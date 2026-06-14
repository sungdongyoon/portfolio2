import Badge from "./components/Badge";
import SecitonTitle from "./components/SecitonTitle";
import { career, coreValues, projects, skills } from "./constants/portfolio";

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
          <SecitonTitle>3가지 철학</SecitonTitle>
          <div className="grid grid-cols-3 gap-10">
            {coreValues.map((el) => (
              <div key={el.id} className="flex flex-col gap-3">
                <div className="w-full aspect-square bg-white rounded-xl"></div>
                <p className="text-xl font-semibold">{el.title}</p>
                <p className="text-[#A5A5A5]">{el.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="skill" className="border border-white">
        <div className="w-full flex flex-col items-center justify-center">
          <SecitonTitle>기술스택</SecitonTitle>
          <div className="w-full max-w-[60%] flex flex-col gap-15">
            {skills.map((el) => (
              <div className="flex flex-col items-center relative">
                <Badge size="md" className="absolute bottom-4/5">
                  {el.category}
                </Badge>
                <div className="w-full bg-[#555555]/30 py-7 px-10 rounded-4xl">
                  <p className="text-center">{el.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="career" className="border border-white">
        <div className="w-full flex flex-col items-center justify-center">
          <SecitonTitle>경력 및 교육</SecitonTitle>
          <div className="w-full max-w-[60%]">
            <div className="relative border-t border-white mb-20">
              <p className="absolute bg-[#082032] py-1 px-5 -top-4 left-1/2 -translate-x-1/2">
                실무
              </p>
              <ul className="pt-10 flex flex-col gap-10">
                {career
                  .filter((el) => el.category === "career")
                  .map((career) => (
                    <li className="flex gap-10 sborder border-white ">
                      <p>{career.period}</p>
                      <div className="flex flex-col gap-3">
                        <p className="text-2xl">{career.title}</p>
                        <p className="text-[#A5A5A5] text-[0.8rem]">
                          {career.sub}
                        </p>
                        {career.work && (
                          <div>
                            <p className="text-orange-400 mb-3 font-semibold text-[0.8rem]">
                              주요업무
                            </p>
                            <ul className="text-[0.8rem] bg-[#555555]/30 py-4 px-6 rounded-2xl leading-6">
                              {career.work.map((work) => (
                                <li>{work}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="border-t border-white relative">
              <p className="absolute bg-[#082032] py-1 px-5 -top-4 left-1/2 -translate-x-1/2">
                교육
              </p>
              <ul className="pt-10 flex flex-col gap-10">
                {career
                  .filter((el) => el.category === "education")
                  .map((career) => (
                    <li className="flex gap-10 sborder border-white ">
                      <p>{career.period}</p>
                      <div className="flex flex-col gap-3">
                        <p className="text-2xl">{career.title}</p>
                        <p className="text-[#A5A5A5] text-[0.8rem]">
                          {career.sub}
                        </p>
                        {career.work && (
                          <div>
                            <p className="text-orange-400 mb-3 font-semibold text-[0.8rem]">
                              주요업무
                            </p>
                            <ul className="text-[0.8rem] bg-[#555555]/30 py-4 px-6 rounded-2xl leading-6">
                              {career.work.map((work) => (
                                <li>{work}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="project" className="border border-white">
        <div className="w-full flex flex-col items-center justify-center">
          <SecitonTitle>프로젝트</SecitonTitle>
          <div className="w-full max-w-[60%] grid grid-cols-3 gap-5">
            {projects.map((el) => (
              <div className="bg-[#555555]/30 rounded-2xl p-6">
                <p className="text-[1.2rem] mb-2">{el.title}</p>
                <p className="text-[0.8rem] text-[#A5A5A5] mb-12">
                  {el.description}
                </p>
                <div className="flex gap-3">
                  {el.skills.map((skill) => (
                    <div className="bg-white rounded-[3px] w-7 aspect-square"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="ending" className="border border-white">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-center text-xl mb-10">
            고객들에게 보다 더 좋은 서비스를 제공하기 위해,
            <br />
            회사와 함께 발전해나가기 위해,
            <br />
            열정과 호기심을 바탕으로 성장해나가는 개발자가 되겠습니다.
          </p>
          <p className="text-3xl font-bold">감사합니다.</p>
        </div>
      </section>
    </main>
  );
}
