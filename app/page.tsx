import Badge from "./components/Badge";
import SecitonTitle from "./components/SecitonTitle";

interface CoreValue {
  id: number;
  image: string;
  title: string;
  content: string;
}

interface Skills {
  id: number;
  category: string;
  content: string;
}

interface Career {
  id: number;
  category: string;
  period: string;
  title: string;
  sub: string;
  work?: string[];
}

const coreValues: CoreValue[] = [
  {
    id: 1,
    image: "",
    title: "모던 프론트엔드 개발",
    content:
      "React.js를 이용한 프론트엔드 개발 경험이 있으며, JavaScript(ES6), TypeScript에 능숙합니다. Next.js와 더불어 핵심적인 React 라이브러리 활용 경험이 있습니다.",
  },
  {
    id: 2,
    image: "",
    title: "사용자 중심 UI 구현",
    content:
      "사용자가 이해하기 쉽고 편하게 사용할 수 있는 인터페이스를 고민하며, 반응형 UI와 접근성을 고려한 화면 구현을 지향합니다.",
  },
  {
    id: 3,
    image: "",
    title: "지속적인 개선과 성장",
    content:
      "문제를 단순히 해결하는 것에 그치지 않고, 더 나은 구조와 유지보수성을 고민하며 꾸준히 학습하고 개선합니다.",
  },
];

const skills: Skills[] = [
  {
    id: 1,
    category: "FRONTEND",
    content: "TS · JS · React · Next · Flutter · Dart",
  },
  {
    id: 2,
    category: "BACKEND",
    content: "TS · JS · React · Next · Flutter · Dart",
  },
  {
    id: 3,
    category: "OTHERS",
    content: "TS · JS · React · Next · Flutter · Dart",
  },
];

const career: Career[] = [
  {
    id: 1,
    category: "career",
    period: "2023.12 ~ 2025.06",
    title: "호텔스토리",
    sub: "연구개발실 BX팀 Frontend Developer",
    work: [
      "관리자 페이지 및 신규 프로젝트 프론트엔드 개발 및 고도화",
      "백엔드 API 연동 및 데이터 가공 처리",
      "공통 UI 컴포넌트 설계 및 제작, 문서화",
      "유지보수 및 사용자 요구사항 기반 기능 개선",
    ],
  },
  {
    id: 2,
    category: "education",
    period: "2023.02 ~ 2023.08",
    title: "그린컴퓨터아카데미학원",
    sub: "웹 퍼블리셔 & 리액트 활용 프론트엔드 웹 SW 개발자 과정",
  },
];

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
          <SecitonTitle>핵심역량</SecitonTitle>
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
        <SecitonTitle>프로젝트</SecitonTitle>
      </section>
      <section id="ending" className="border border-white">
        ending
      </section>
    </main>
  );
}
