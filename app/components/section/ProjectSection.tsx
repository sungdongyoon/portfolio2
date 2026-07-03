"use client";

import React, { useState } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { projects } from "../../constants/portfolio";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Image from "next/image";

const ProjectSection = () => {
  const [isOpenProject, setIsOpenProject] = useState<number | null>(null);

  // 프로젝트 섹션 상세내용 토글 함수
  const handleToggleProject = (id: number) => {
    setIsOpenProject((prev) => (prev === id ? null : id));
  };

  return (
    <Section id="project" isAnimation>
      <div className="w-full flex flex-col items-center justify-center">
        <SectionTitle>프로젝트</SectionTitle>
        <div className="w-full max-w-full flex flex-col gap-5 mt-10">
          {projects.map((el) => (
            <div
              className="bg-overlay/10 border border-overlay/50 rounded-md p-6 flex flex-col justify-between relative cursor-pointer hover:bg-overlay/30 hover:scale-101 transition-all"
              key={el.id}
              onClick={() => handleToggleProject(el.id)}
            >
              <div className="absolute top-3 right-3">
                {el.id === isOpenProject ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <div>
                <div className="flex gap-3 items-end mb-3">
                  <p className="text-[1rem] lg:text-xl">{el.title}</p>
                  <p className="text-[0.8rem] text-sub-text">
                    {el.type} / {el.period}
                  </p>
                </div>
                <p className="text-[0.8rem] text-sub-text">{el.description}</p>

                {el.id === isOpenProject && (el.role || el.result) ? (
                  <>
                    <hr className="my-3 text-gray-700" />
                    <div className="mb-8 flex flex-col gap-1 my-3">
                      {el.role && (
                        <p className="text-[0.8rem]">역할 | {el.role}</p>
                      )}
                      {el.result && (
                        <p className="text-[0.8rem]">성과 | {el.result}</p>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {el.skills.map((skill, idx) => (
                        <div
                          className="rounded-[3px] w-7 aspect-square relative bg-white"
                          key={idx}
                        >
                          <Image
                            fill
                            src={`/logo/${skill.image}-logo.png`}
                            alt={`${skill.image} 로고 이미지`}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectSection;
