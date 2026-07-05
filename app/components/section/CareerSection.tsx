"use client";

import React, { useState } from "react";

import { career } from "../../constants/portfolio";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import {
  FaCheck,
  FaChevronDown,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa6";

const CareerSection = () => {
  const [isWork, setIsWork] = useState<boolean>(true);

  return (
    <Section id="career" isAnimation>
      <div className="w-full flex flex-col items-center justify-center">
        <SectionTitle>경력 및 교육</SectionTitle>
        <div className="w-full max-w-full md:max-w-[90%] lg:max-w-[80%] mt-10">
          {career.map((career) => (
            <div
              className="relative border-t border-white mb-20"
              key={career.id}
            >
              <p className="absolute bg-main-bg py-1 px-5 -top-4 left-1/2 -translate-x-1/2">
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
                      <p className="text-sub-text text-[0.7rem] sm:text-[0.8rem]">
                        {career.sub}
                      </p>
                      {career.work && (
                        <div>
                          <button
                            className="flex items-center gap-2 text-main-text font-semibold text-[0.8rem]"
                            // onClick={() => setIsWork(!isWork)}
                          >
                            {/* {isWork ? <FaChevronUp /> : <FaChevronDown />} */}
                            <FaCheck />
                            주요업무
                          </button>
                          {isWork && (
                            <ul className="text-[0.8rem] bg-overlay/10 border border-overlay/50 py-4 px-6 mt-3 rounded-md leading-6">
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
  );
};

export default CareerSection;
