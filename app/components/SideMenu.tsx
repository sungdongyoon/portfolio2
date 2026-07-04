"use client";

import React, { useEffect, useState } from "react";

const menuItems = [
  {
    id: "intro",
    label: "인트로",
  },
  {
    id: "value",
    label: "가치관",
  },
  {
    id: "skill",
    label: "기술스택",
  },
  {
    id: "career",
    label: "경력 및 교육",
  },
  {
    id: "project",
    label: "프로젝트",
  },
];

// intro 렌더링 제외
const visibleMenuItems = menuItems.filter((menu) => menu.id !== "intro");

const SideMenu = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");

  const isIntro = activeSection === "intro";

  const handleClickScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // 스크롤 섹션 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px", // 감시 영역
        threshold: 0,
      },
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  if (isIntro) return null;

  return (
    <div className="fixed top-1/2 left-10 -translate-y-1/2">
      <div className="py-5 px-8 rounded-md flex items-start flex-col gap-3">
        {visibleMenuItems.map((menu) => {
          const isActive = activeSection === menu.id;

          return (
            <button
              key={menu.id}
              onClick={() => handleClickScroll(menu.id)}
              className={`cursor-pointer text-[0.9rem] relative ${isActive ? "text-white font-semibold" : "text-sub-text"}`}
            >
              <span
                className={`absolute top-1/2 -left-4 -translate-y-1/2 h-4 w-1 rounded-full bg-main-text transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
              />

              {menu.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
