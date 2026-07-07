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
        skill: "HTML",
        url: "html-logo.png",
      },
      {
        skill: "CSS",
        url: "css-logo.png",
      },
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
        name: "SASS",
        image: "sass",
      },
      {
        name: "Recoil",
        image: "recoil",
      },
      {
        name: "React Beautiful dnd",
        image: "",
      },
      {
        name: "React Kakao-maps-sdk",
        image: "",
      },
      {
        name: "html2canvas",
        image: "",
      },
      {
        name: "AWS Amplify",
        image: "aws-amplify",
      },
    ],
    content: [
      "판매 숙소의 분위기에 맞춰 선택할 수 있는 4가지 테마를 제공하고. 드래그 앤 드롭으로 상세페이지 섹션과 이벤트용 배너 이미지 순서를 조정할 수 있도록 구현했습니다.",
      "서버에 저장된 숙소 API를 연동해 템플릿 사용 시 숙소 정보와 이미지를 자동으로 불러오도록 구성했습니다.",
      "테마 선택, 이미지 선택, 섹션 순서 변경만으로 상세페이지를 빠르게 구성하고 판매 사이트 업로드까지 이어질 수 있도록 제작했습니다.",
      "AWS Amplify 기반 배포 환경을 구성하고 프론트엔드 애플리케이션을 관리했습니다.",
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
      "사내 개발자용으로 UI 규칙과 컴포넌트, 아이콘을 만들어서 모든 개발자들이 쉽고 간편하게 화면 작업을 할 수 있도록 제작한 공통 UI 컴포넌트",
    period: "2024.05 ~ 상시",
    link: "",
    skills: [
      {
        name: "Next.js",
        image: "nextjs",
      },
      {
        name: "SASS",
        image: "sass",
      },
      {
        name: "Figma",
        image: "figma",
      },
      {
        name: "AWS Amplify",
        image: "aws-amplify",
      },
    ],
    content: [
      "Bootstrap 기반의 공통 UI 컴포넌트와 사용 규칙을 정의해 일관된 화면 구성을 지원했습니다.",
      "아이콘 및 컴포넌트 리소스를 AWS S3에서 버전별로 관리하여 필요한 버전을 사용할 수 있도록 구성했습니다.",
      "React와 PHP 환경 모두 사용 가능하도록 설계했습니다.",
      "AWS Amplify 기반 배포 환경을 구성하고 프론트엔드 애플리케이션을 관리했습니다.",
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
        name: "Next.js",
        image: "nextjs",
      },
      {
        name: "Axios",
        image: "axios",
      },
      {
        name: "SASS",
        image: "sass",
      },
      {
        name: "Redux-Toolkit",
        image: "redux",
      },
      {
        name: "Next-Auth",
        image: "next-auth",
      },
      {
        name: "Postman",
        image: "postman",
      },
      {
        name: "AWS Amplify",
        image: "aws-amplify",
      },
    ],
    content: [
      "NextAuth를 활용하여 회원가입 및 로그인 기능 구현, 사용자 인증 흐름을 구성했습니다.",
      "관리자 대시보드에 필요한 유저, 예약, 상품, 정산 데이터를 API로 연동하고 화면에 맞게 가공하여 렌더링했습니다.",
      "AWS Amplify로 배포 환경을 구성하고 환경변수로를 활용하여 개발/운영 환경을 분리 했습니다.",
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
        name: "Next.js",
        image: "nextjs",
      },
      {
        name: "Axios",
        image: "axios",
      },
      {
        name: "SASS",
        image: "sass",
      },
      {
        name: "Redux-Toolkit",
        image: "redux",
      },
      {
        name: "Next-Auth",
        image: "next-auth",
      },
      {
        name: "React Kakao-maps-sdk",
        image: "",
      },
      {
        name: "Postman",
        image: "postman",
      },
      {
        name: "Docker",
        image: "docker",
      },
      {
        name: "AWS Amplify",
        image: "aws-amplify",
      },
    ],
    content: [
      "숙소, 일정, 객실 상품, 예약자 정보를 선택하고 예약 완료까지 이어지는 사용자 예약 흐름을 구현했습니다.",
      "숙소 정보 조회, 객실 정보 확인, 예약 정보 생성 등 필요한 API 통신을 했습니다.",
      "NextAuth를 활용하여 사용자 인증 기능을 구현했습니다.",
      "Toss Payments PG를 연동하여 객실 상품 결제 기능을 구현했습니다.",
      "AWS Amplify로 배포 환경을 구성하고 환경변수를 활용하여 개발/운영 환경을 분리 했습니다.",
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
        name: "Next.js",
        image: "nextjs",
      },
      {
        name: "Typescript",
        image: "ts",
      },
      {
        name: "Tailwind CSS",
        image: "tailwindcss",
      },
      {
        name: "Shadcn",
        image: "shadcn",
      },
    ],
    content: [
      "Tailwind CSS와 Shadcn UI를 활용하여 빠르고 효율적으로 UI 구성했습니다.",
      "샘플 상품 데이터를 기반으로 테이블을 렌더링했습니다.",
      "URL params 기반 검색 상태 관리, localstorage 기반 찜하기 기능을 구현했습니다.",
      "next-intl 기반 다국어 처리, next-themes 기반 테마 전환을 구현했습니다.",
    ],
  },
];
