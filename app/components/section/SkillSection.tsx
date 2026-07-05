import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { skills } from "../../constants/portfolio";
import Badge from "../Badge";
import Image from "next/image";

const SkillSection = () => {
  return (
    <Section id="skill" isAnimation>
      <div className="w-full flex flex-col items-center justify-center">
        <SectionTitle>기술스택</SectionTitle>
        <div className="w-full max-w-full flex flex-col gap-15 mt-10">
          {skills.map((el) => (
            <div className="flex flex-col items-center relative" key={el.id}>
              <Badge
                size="sm"
                className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2"
              >
                {el.category}
              </Badge>
              <div className="w-full flex gap-3 flex-wrap bg-overlay/10 py-5 lg:py-7 px-5 lg:px-10 border border-overlay/50 rounded-md">
                {el.skills.map((skill, idx) => (
                  <div
                    className="flex items-center gap-1 text-center font-semibold text-[clamp(0.6rem,3vw,0.8rem)] bg-white text-black px-2 py-1 rounded-sm"
                    key={idx}
                  >
                    {skill.url && (
                      <Image
                        src={`/logo/${skill.url}`}
                        alt={`${skill.skill} 로고`}
                        width={20}
                        height={20}
                      />
                    )}
                    <span>{skill.skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillSection;
