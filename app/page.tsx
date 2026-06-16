"use client";

import { useRef, useState } from "react";
import Badge from "./components/Badge";
import SectionTitle from "./components/SectionTitle";
import { career, coreValues, projects, skills } from "./constants/portfolio";
import * as motion from "motion/react-client";
import ProjectModal from "./components/ProjectModal";
import { useInView, useScroll } from "motion/react";
import { sectionAnimation } from "./constants/animations";
import Section from "./components/Section";
import Image from "next/image";

export default function Home() {
  const [isWork, setIsWork] = useState<boolean>(false);
  const [isProject, setIsProject] = useState<boolean>(false);

  return (
    <main className="w-full max-w-5xl">
      <section id="intro" className="min-h-dvh px-5">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold">
            안녕하세요,
            <br /> 프론트엔드 개발자
            <br /> <em className="text-orange-400">윤동성</em>
            입니다.
          </h1>
        </div>
      </section>
      <Section id="core-value" isAnimation>
        <div className="flex flex-col items-center justify-center">
          <SectionTitle>3가지 철학</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreValues.map((el) => (
              <div key={el.id} className="flex flex-col gap-3">
                <div className="w-full aspect-square bg-white rounded-xl"></div>
                <p className="text-[1rem] md:text-xl font-semibold">
                  {el.title}
                </p>
                <p className="text-[#A5A5A5] text-[0.8rem] md:text-[1rem]">
                  {el.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="skill" isAnimation>
        <div className="w-full flex flex-col items-center justify-center">
          <SectionTitle>기술스택</SectionTitle>
          <div className="w-full max-w-full md:max-w-[60%] flex flex-col gap-15">
            {skills.map((el) => (
              <div className="flex flex-col items-center relative" key={el.id}>
                <Badge size="md" className="absolute bottom-4/5">
                  {el.category}
                </Badge>
                <div className="w-full bg-[#555555]/30 py-5 lg:py-7 px-5 lg:px-10 rounded-[40px]">
                  <p className="text-center text-[clamp(0.6rem,3.5vw,1rem)]">
                    {el.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="career" isAnimation>
        <div className="w-full flex flex-col items-center justify-center">
          <SectionTitle>경력 및 교육</SectionTitle>
          <div className="w-full max-w-full md:max-w-[80%] lg:max-w-[60%]">
            {career.map((career) => (
              <div
                className="relative border-t border-white mb-20"
                key={career.id}
              >
                <p className="absolute bg-[#082032] py-1 px-5 -top-4 left-1/2 -translate-x-1/2">
                  {career.title}
                </p>
                <ul className="pt-10 flex flex-col gap-10">
                  {career.content.map((career) => (
                    <li
                      className="flex flex-col sm:flex-row gap-3 sm:gap-0"
                      key={career.id}
                    >
                      <p className="text-[0.8rem] sm:text-[1rem] flex-1">
                        {career.period}
                      </p>
                      <div className="flex flex-col flex-2 gap-2 sm:gap-3">
                        <p className="text-2xl">{career.title}</p>
                        <p className="text-[#A5A5A5] text-[0.7rem] sm:text-[0.8rem]">
                          {career.sub}
                        </p>
                        {career.work && (
                          <div>
                            <button
                              className="text-orange-400 font-semibold text-[0.8rem] cursor-pointer"
                              onClick={() => setIsWork(!isWork)}
                            >
                              ► 주요업무
                            </button>
                            {isWork && (
                              <ul className="text-[0.8rem] bg-[#555555]/30 py-4 px-6 mt-3 rounded-2xl leading-6">
                                {career.work.map((work, idx) => (
                                  <li key={idx}>- {work}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="project" isAnimation>
        <div className="w-full flex flex-col items-center justify-center">
          <SectionTitle>프로젝트</SectionTitle>
          <div className="w-full max-w-full md:max-w-[80%] lg:max-w-[60%] grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((el) => (
              <div
                className="bg-[#555555]/30 rounded-2xl p-6 flex flex-col justify-between"
                key={el.id}
                onClick={() => setIsProject(true)}
              >
                <div>
                  <p className="text-[1rem] lg:text-xl">{el.title}</p>
                  <Badge size="xs" className="mt-1 mb-4 bg-red-500 text-white">
                    {el.type}
                  </Badge>
                  <p className="text-[0.8rem] text-[#A5A5A5] mb-12">
                    {el.description}
                  </p>
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
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="ending" isAnimation={false}>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-center text-[1rem] lg:text-xl mb-10">
            고객들에게 보다 더 좋은 서비스를 제공하기 위해,
            <br />
            회사와 함께 발전해나가기 위해,
            <br />
            열정과 호기심을 바탕으로 성장해나가는 개발자가 되겠습니다.
          </p>
          <p className="text-2xl lg:text-3xl font-bold">감사합니다.</p>
        </div>
      </Section>
    </main>
  );
}
