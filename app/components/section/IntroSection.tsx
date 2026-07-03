import React from "react";

const IntroSection = () => {
  return (
    <section id="intro" className="min-h-dvh px-5">
      <div className="flex flex-col justify-center">
        <p className="text-[clamp(0.8rem,2.5vw,1.5rem)] font-regular">
          안녕하세요
        </p>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold">
          Frontend Developer
          <br />
          <em className="text-main-text">윤동성</em> 입니다
        </h1>
      </div>
    </section>
  );
};

export default IntroSection;
