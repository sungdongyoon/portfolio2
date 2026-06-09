export default function Home() {
  return (
    <main className="w-full max-w-screen-xl">
      <section
        id="intro"
        className="w-full h-screen bg-red-100 flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center border-2 border-black text-center">
          <h1 className="text-4xl font-bold ">
            안녕하세요,
            <br /> 프론트엔드 개발자
            <br /> 윤동성입니다.
          </h1>
        </div>
      </section>
      <section id="skill" className="w-full bg-blue-100">
        skill
      </section>
      <section id="skill2" className="w-full bg-green-100">
        skill2
      </section>
      <section id="career" className="w-full bg-yellow-100">
        career
      </section>
      <section id="project" className="w-full bg-purple-100">
        project
      </section>
      <section id="ending" className="w-full bg-pink-100">
        ending
      </section>
    </main>
  );
}
