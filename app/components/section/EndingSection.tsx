import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";

const EndingSection = () => {
  return (
    <Section id="ending" isAnimation={false}>
      <div className="w-full flex flex-col items-center justify-center">
        <SectionTitle>Contact</SectionTitle>
        <div className="my-10 flex gap-10 border border-overlay/50 bg-overlay/10 px-7 py-5 rounded-md">
          <Link
            href="https://github.com/sungdongyoon"
            className="flex flex-col gap-3 items-center"
          >
            <Image
              src="/logo/github-logo.png"
              alt="깃허브 로고"
              width={60}
              height={60}
            />
            <p className="text-[0.8rem]">@sungdongyoon</p>
          </Link>
          <div className="flex flex-col gap-3 items-center">
            <div>
              <Image
                src="/images/gmail.png"
                alt="이메일 로고"
                width={60}
                height={60}
              />
            </div>
            <span className="text-[0.8rem]">yds090655@gmail.com</span>
          </div>
        </div>
        {/* <p className="text-center text-[1rem] lg:text-xl mb-10">
          고객들에게 보다 더 좋은 서비스를 제공하기 위해,
          <br />
          회사와 함께 발전해나가기 위해,
          <br />
          열정과 호기심을 바탕으로 성장해나가는 개발자가 되겠습니다.
        </p> */}
        <p className="text-2xl lg:text-3xl font-bold mt-10">감사합니다.</p>
      </div>
    </Section>
  );
};

export default EndingSection;
