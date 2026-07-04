import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { values } from "../../constants/portfolio";

const ValueSection = () => {
  return (
    <Section id="value" isAnimation>
      <div className="flex flex-col items-center justify-center">
        <SectionTitle>가치관</SectionTitle>
        <p>일을 할 때 가장 중요하게 생각하는 가치관입니다.</p>
        <div className="flex flex-col gap-5 mt-10">
          {values.map((el) => (
            <div
              key={el.id}
              className="flex flex-col gap-3 border border-overlay/50 bg-overlay/10 px-7 py-5 rounded-md"
            >
              <p className="text-[1rem] md:text-xl font-semibold">{el.title}</p>
              <hr className="text-gray-700" />
              <p className="text-sub-text text-[0.8rem] md:text-[1rem]">
                {el.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ValueSection;
