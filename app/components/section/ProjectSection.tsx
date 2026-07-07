"use client";

import React, { useState } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { projects } from "../../constants/portfolio";
import { FaChevronDown, FaChevronUp, FaLink } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

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
              className={`bg-overlay/10 border border-overlay/50 rounded-md flex flex-col justify-between relative ${isOpenProject !== el.id && "hover:bg-overlay/30 hover:scale-101 transition-all"}`}
              key={el.id}
              onClick={() => handleToggleProject(el.id)}
            >
              <div className="absolute top-3 right-3">
                {el.id === isOpenProject ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <div>
                <div className="flex gap-3 items-end flex-wrap mb-3 p-6 pb-0">
                  <p className="text-[1rem] lg:text-xl">{el.title}</p>
                  <p className="text-[0.7rem] text-sub-text">
                    {el.type} / {el.period}
                  </p>
                </div>
                <p className="text-[0.8rem] text-sub-text p-6 pt-0">
                  {el.description}
                </p>

                {el.id === isOpenProject &&
                (el.role || el.result || el.skills) ? (
                  <div onClick={(e) => e.stopPropagation()}>
                    <hr className="text-gray-700 mx-6" />
                    <div className="inline-flex flex-col gap-1 p-6 pb-0">
                      {el.link && (
                        <Link
                          href={el.link}
                          target="_blank"
                          className="text-[0.8rem] inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                        >
                          <FaLink /> 바로가기
                        </Link>
                      )}
                      {el.role && (
                        <p className="text-[0.8rem]">역할 | {el.role}</p>
                      )}
                      {el.result && (
                        <p className="text-[0.8rem]">성과 | {el.result}</p>
                      )}
                      {el.content && (
                        <ul className="mt-3">
                          {el.content.map((content, idx) => (
                            <li key={idx} className="text-[0.8rem]">
                              ∙ {content}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="flex gap-3 flex-wrap p-6">
                      {el.skills.map((skill, idx) => (
                        <div
                          className="flex items-center gap-2 py-1 px-2 rounded-sm relative bg-white cursor-default"
                          key={idx}
                        >
                          {skill.image && (
                            <Image
                              width={15}
                              height={15}
                              src={`/logo/${skill.image}-logo.png`}
                              alt={`${skill.image} 로고 이미지`}
                            />
                          )}
                          <span className="text-[0.7rem] text-black">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
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
