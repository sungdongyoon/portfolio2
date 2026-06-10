import Badge from "./components/Badge";

export default function Home() {
  return (
    <main className="w-full max-w-7xl">
      <section id="intro" className="h-screen">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[3rem] font-bold">
            안녕하세요,
            <br /> 프론트엔드 개발자
            <br /> <em className="text-orange-400">윤동성</em>입니다.
          </h1>
        </div>
      </section>
      <section id="core-value" className="border border-white">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-4xl font-bold mb-10 text-orange-400">핵심역량</h3>
          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <div className="w-full aspect-square bg-white rounded-xl"></div>
              <p className="text-xl font-semibold">모던 프론트엔드 개발</p>
              <p className="text-[#A5A5A5]">
                React.js를 이용한 프론트엔드 개발경험이 있으며, Javascript(ES6),
                typescript에 능숙합니다. Next.js와 더불어 핵심적인 React library
                활용 경험이 있습니다.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-full aspect-square bg-white rounded-xl"></div>
              <p className="text-xl font-semibold">모던 프론트엔드 개발</p>
              <p className="text-[#A5A5A5]">
                React.js를 이용한 프론트엔드 개발경험이 있으며, Javascript(ES6),
                typescript에 능숙합니다. Next.js와 더불어 핵심적인 React library
                활용 경험이 있습니다.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-full aspect-square bg-white rounded-xl"></div>
              <p className="text-xl font-semibold">모던 프론트엔드 개발</p>
              <p className="text-[#A5A5A5]">
                React.js를 이용한 프론트엔드 개발경험이 있으며, Javascript(ES6),
                typescript에 능숙합니다. Next.js와 더불어 핵심적인 React library
                활용 경험이 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skill" className="border border-white">
        <div className="w-full flex flex-col items-center justify-center">
          <h3 className="text-4xl font-bold mb-10 text-orange-400">기술스택</h3>
          <div className="w-full max-w-[60%] flex flex-col gap-15">
            <div className="flex flex-col items-center relative">
              <Badge size="md" className="absolute bottom-4/5">
                FRONTEND
              </Badge>
              <div className="w-full bg-[#555555]/30 py-7 px-10 rounded-4xl">
                <p className="text-center">
                  TS · JS · React · Next · Flutter · Dart
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center relative">
              <Badge size="md" className="absolute bottom-4/5">
                FRONTEND
              </Badge>
              <div className="w-full bg-[#555555]/30 py-7 px-10 rounded-4xl">
                <p className="text-center">
                  TS · JS · React · Next · Flutter · Dart
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center relative">
              <Badge size="md" className="absolute bottom-4/5">
                FRONTEND
              </Badge>
              <div className="w-full bg-[#555555]/30 py-7 px-10 rounded-4xl">
                <p className="text-center">
                  TS · JS · React · Next · Flutter · Dart
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="career" className="border border-white">
        career
      </section>
      <section id="project" className="border border-white">
        project
      </section>
      <section id="ending" className="border border-white">
        ending
      </section>
    </main>
  );
}
