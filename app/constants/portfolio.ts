import { Career, CoreValue, Project, Skills } from "../types/portfolio";

export const coreValues: CoreValue[] = [
  {
    id: 1,
    image: "",
    title: "커뮤니케이션",
    content:
      "함께 일하는 과정에서 가장 중요한 요소 중 하나가 커뮤니케이션이라고 생각합니다. 원활한 협업을 위해 자신의 의견을 명확하게 전달하는 것 뿐만 아니라 상대방을 이해하고 배려하는 태도가 중요하다고 생각합니다. 겸손한 자세로 피드백을 받아들이고, 약속한 일정과 역할을 책임감을 갖고 지키려고 노력합니다.",
  },
  {
    id: 2,
    image: "",
    title: "근거있는 행동",
    content:
      "추측이나 감에 의존하는 것보다 사실과 근거를 바탕으로 판단하고 행동하는 것을 중요하게 생각합니다. 명확한 이유와 근거를 바탕으로 소통할 때 팀원 간의 신뢰가 높아지고 더 나은 의사결정을 할 수 있다고 믿습니다.",
  },
  {
    id: 3,
    image: "",
    title: "책임감",
    content:
      "민폐 끼치는 것을 싫어합니다. 때문에 저는 책임감을 갖고 맡은 일을 완수하기 위해 많은 고민을 하고 자기개발을 통해 부족한 부분을 개선하기 위해 노력합니다. 또한 동료의 도움이 필요할 경우 도움을 요청하여 더 나은 결과를 만들기 위해 노력합니다.",
  },
];

export const skills: Skills[] = [
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

export const career: Career[] = [
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

export const projects: Project[] = [
  {
    id: 1,
    title: "Next js 기반 웹사이트 개발 및 유지보수",
    description: "코드스테이츠 홈페이지 유지보수 및 리뉴얼 업무",
    period: "2024.01 ~ 2024.03",
    link: "",
    skills: [
      {
        name: "React",
        image: "",
      },
      {
        name: "Next.js",
        image: "",
      },
      {
        name: "Python",
        image: "",
      },
    ],
    details: ["상세 내용 1", "상세 내용 2", "상세 내용 3"],
  },
  {
    id: 2,
    title: "Next js 기반 웹사이트 개발 및 유지보수",
    description: "코드스테이츠 홈페이지 유지보수 및 리뉴얼 업무",
    period: "2024.01 ~ 2024.03",
    link: "",
    skills: [
      {
        name: "React",
        image: "",
      },
      {
        name: "Next.js",
        image: "",
      },
      {
        name: "Python",
        image: "",
      },
    ],
    details: ["상세 내용 1", "상세 내용 2", "상세 내용 3"],
  },
  {
    id: 3,
    title: "Next js 기반 웹사이트 개발 및 유지보수",
    description: "코드스테이츠 홈페이지 유지보수 및 리뉴얼 업무",
    period: "2024.01 ~ 2024.03",
    link: "",
    skills: [
      {
        name: "React",
        image: "",
      },
      {
        name: "Next.js",
        image: "",
      },
      {
        name: "Python",
        image: "",
      },
    ],
    details: ["상세 내용 1", "상세 내용 2", "상세 내용 3"],
  },
  {
    id: 4,
    title: "Next js 기반 웹사이트 개발 및 유지보수",
    description: "코드스테이츠 홈페이지 유지보수 및 리뉴얼 업무",
    period: "2024.01 ~ 2024.03",
    link: "",
    skills: [
      {
        name: "React",
        image: "",
      },
      {
        name: "Next.js",
        image: "",
      },
      {
        name: "Python",
        image: "",
      },
    ],
    details: ["상세 내용 1", "상세 내용 2", "상세 내용 3"],
  },
  {
    id: 5,
    title: "Next js 기반 웹사이트 개발 및 유지보수",
    description: "코드스테이츠 홈페이지 유지보수 및 리뉴얼 업무",
    period: "2024.01 ~ 2024.03",
    link: "",
    skills: [
      {
        name: "React",
        image: "",
      },
      {
        name: "Next.js",
        image: "",
      },
      {
        name: "Python",
        image: "",
      },
    ],
    details: ["상세 내용 1", "상세 내용 2", "상세 내용 3"],
  },
];
