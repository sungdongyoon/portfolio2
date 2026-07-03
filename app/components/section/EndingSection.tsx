import React from "react";
import Section from "./Section";

const EndingSection = () => {
  return (
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
  );
};

export default EndingSection;
