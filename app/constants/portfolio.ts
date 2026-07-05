import { Career, Values, Project, Skills } from "../types/portfolio";

export const values: Values[] = [
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
      "추측이나 감에 의존하기보다, 사실과 근거를 바탕으로 판단하고 행동하려 합니다. 명확한 이유와 근거를 바탕으로 소통할 때 팀원 간의 신뢰가 높아지고 더 나은 의사결정으로 이어진다고 믿습니다.",
  },
  {
    id: 3,
    image: "",
    title: "책임감",
    content:
      "맡은 일은 끝까지 해내기 위해 깊이 고민하고, 부족한 부분은 꾸준히 학습하며 개선하려 합니다. 혼자 해결하기 어려운 문제는 적절한 시점에 도움을 요청하고, 더 나은 결과를 만들기 위해 동료와 함께 해결책을 찾아갑니다.",
  },
];

export const skills: Skills[] = [
  {
    id: 1,
    category: "FRONTEND",
    skills: [
      {
        skill: "JavaScript",
        url: "js-logo.png",
      },
      {
        skill: "TypeScript",
        url: "ts-logo.png",
      },
      {
        skill: "React",
        url: "react-logo.png",
      },
      {
        skill: "Next.js",
        url: "nextjs-logo.png",
      },
    ],
  },
  // {
  //   id: 2,
  //   category: "BACKEND",
  //   skills: [
  //     { skill: "SQL", url: "" },
  //     { skill: "Supabase", url: "" },
  //   ],
  // },
  {
    id: 3,
    category: "OTHERS",
    skills: [
      { skill: "AWS S3", url: "aws-s3.png" },
      { skill: "AWS Amplify", url: "aws-amplify.png" },
      { skill: "Supabase", url: "supabase-logo.png" },
      { skill: "Vercel", url: "vercel-logo.png" },
      { skill: "Github", url: "github-logo.png" },
      { skill: "Figma", url: "figma-logo.png" },
    ],
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
    role: "서비스 화면 개발 및 UI 구현, API 연동 및 데이터 가공 로직 처리, 유지보수 등 전체적인 개발 담당",
    result:
      "세일즈 팀 및 디자이너의 반복 업무 프로세스 개선을 통해 업무 효율성 향상에 기여",
  },
  {
    id: 2,
    title: "UI Components",
    type: "호텔스토리",
    description:
      "사내 개발자용으로 UI 규칙과 컴포넌트를 만들어서 모든 개발자들이 쉽고 간편하게 화면 작업을 할 수 있도록 제작한 공통 UI 컴포넌트",
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
    role: "공통 UI 컴포넌트 기획 및 개발, 사용 가이드 문서화 및 버전 관리, 아이콘/컴포넌트 개선 및 업데이트",
    result:
      "백엔드 개발자의 화면 구현 진입장벽을 낮추고, 반복적인 UI 문의 감소 및 협업 효율 개선에 기여",
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
    role: "관리자 화면 개발 및 API 연동, 운영 이슈 개선 및 추가 요청사항 적용",
    result:
      "티켓 관리 기능 구축을 통해 티켓 신규 사업 확장의 발판이 되었으며, TMS를 이용하는 숙소의 업무 효율성 향상에 기여",
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
    role: "예약 시스템 화면 개발 및 API 연동",
    result:
      "MRI 사이판(켄싱턴, PIC, 코럴오션)과 제휴를 맺어 기존 사업 대비 높은 수수료율의 예약 매출 확보에 기여",
  },
  {
    id: 5,
    title: "Bean Bridge",
    type: "개인",
    description:
      "주요 업체의 생두 정보를 한번에 확인할 수 있는 사이드 프로젝트",
    period: "2026.06 ~ 2026.07",
    link: "https://bean-bridge.vercel.app/",
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
  },
];
