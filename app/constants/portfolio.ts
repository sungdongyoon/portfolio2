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
    content: "Javascript · Typescript · React · Next.js",
  },
  {
    id: 2,
    category: "BACKEND",
    content: "SQL · Supabase",
  },
  {
    id: 3,
    category: "OTHERS",
    content: "AWS S3 · AWS Amplify · Vercel · Github · Figma",
  },
];

export const career: Career[] = [
  {
    id: 1,
    category: "career",
    title: "경력",
    content: [
      {
        id: "carrer1",
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
    ],
  },
  {
    id: 2,
    category: "education",
    title: "교육",
    content: [
      {
        id: "edu1",
        period: "2023.02 ~ 2023.08",
        title: "그린컴퓨터아카데미학원",
        sub: "웹 퍼블리셔 & 리액트 활용 프론트엔드 웹 SW 개발자 과정",
      },
    ],
  },
  {
    id: 3,
    category: "certificate",
    title: "자격",
    content: [
      {
        id: "certificate1",
        period: "2026.06",
        title: "SQLD",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "상세페이지 템플릿 시스템",
    type: "호텔스토리",
    description:
      "사내 플랫폼에서 상품 판매 상세페이지를 생성할 때 사용하는 템플릿 제작 시스템",
    period: "2024.01 ~ 2024.03",
    link: "",
    skills: [
      {
        name: "React",
        image: "react",
      },
      {
        name: "Next.js",
        image: "nextjs",
      },
    ],
    details: ["상세 내용 1", "상세 내용 2", "상세 내용 3"],
  },
  {
    id: 2,
    title: "UI Components",
    type: "호텔스토리",
    description:
      "사내 개발자용으로 모든 개발자들이 쉽고 간편하게 화면 작업을 할 수 있도록 제작한 UI 컴포넌트",
    period: "2024.05 ~ 상시",
    link: "",
    skills: [
      {
        name: "React",
        image: "react",
      },
      {
        name: "Next.js",
        image: "nextjs",
      },
    ],
    details: ["상세 내용 1", "상세 내용 2", "상세 내용 3"],
  },
  {
    id: 3,
    title: "TMS(Ticket Management System)",
    type: "호텔스토리",
    description:
      "티켓 예약 관리, 티켓 사용처리, 티켓 취소처리 등의 티켓 관련된 업무를 쉽게 관리할 수 있는 티켓 관리 시스템",
    period: "2024.12 ~ 2025.06",
    link: "",
    skills: [
      {
        name: "React",
        image: "react",
      },
      {
        name: "Next.js",
        image: "nextjs",
      },
    ],
    details: ["상세 내용 1", "상세 내용 2", "상세 내용 3"],
  },
  {
    id: 4,
    title: "신규 부킹엔진",
    type: "호텔스토리",
    description:
      "호텔스토리에서 자체 개발한 숙소 예약 시스템(MRI 사이판 및 CJ 홈쇼핑 판매 목적으로 신규버전 제작)",
    period: "2025.03 ~ 2025.06",
    link: "",
    skills: [
      {
        name: "React",
        image: "react",
      },
      {
        name: "Next.js",
        image: "nextjs",
      },
    ],
    details: ["상세 내용 1", "상세 내용 2", "상세 내용 3"],
  },
  {
    id: 5,
    title: "개인 프로젝트 1",
    type: "개인",
    description: "개인 프로젝트 1입니다.",
    period: "2026.06 ~ 2026.06",
    link: "",
    skills: [
      {
        name: "React",
        image: "react",
      },
      {
        name: "Next.js",
        image: "nextjs",
      },
    ],
    details: ["상세 내용 1", "상세 내용 2", "상세 내용 3"],
  },
];
