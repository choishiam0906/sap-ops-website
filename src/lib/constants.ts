export const APP = {
  name: "SAP Assistant Desktop Platform",
  shortName: "SAP Assistant",
  version: "6.0.0",
  description:
    "로컬 우선 아키텍처로 SAP 운영 자동화를 안전하게 수행하세요. 다중 LLM 통합, CBO 분석, 3가지 보안 모드를 제공해요.",
  url: "https://sap-ops-website.vercel.app",
  github: "https://github.com/choishiam0906/sap-ops-website",
  license: "MIT",
} as const;

export const NAV_LINKS = [
  { label: "기능", href: "#features" },
  { label: "보안", href: "#security" },
  { label: "아키텍처", href: "#architecture" },
  { label: "기술 스택", href: "#tech-stack" },
  { label: "다운로드", href: "#download" },
] as const;

const RELEASE_BASE = `${APP.github}/releases/download/v${APP.version}`;

export const DOWNLOAD_LINKS = {
  portable: {
    label: "Portable EXE",
    description: "설치 없이 바로 실행할 수 있어요",
    size: "75MB",
    recommended: true,
    href: `${RELEASE_BASE}/SAP-Assistant-Desktop-Platform-${APP.version}-Portable.exe`,
  },
  installer: {
    label: "NSIS 설치기",
    description: "Windows 프로그램으로 설치해요",
    size: "85MB",
    recommended: false,
    href: `${RELEASE_BASE}/SAP-Assistant-Desktop-Platform-${APP.version}-Setup.exe`,
  },
} as const;

export const TECH_STACK = {
  runtime: {
    label: "Runtime",
    items: [
      { name: "Electron", version: "31", role: "데스크톱 런타임" },
      { name: "Node.js", version: "20+", role: "백엔드 런타임" },
      { name: "Vite", version: "6", role: "번들러 & HMR" },
    ],
  },
  frontend: {
    label: "Frontend",
    items: [
      { name: "React", version: "18", role: "UI 프레임워크" },
      { name: "TypeScript", version: "5.7", role: "타입 시스템" },
      { name: "CSS Variables", version: "-", role: "디자인 시스템" },
    ],
  },
  state: {
    label: "State",
    items: [
      { name: "Zustand", version: "5", role: "글로벌 상태 관리" },
      { name: "React Query", version: "5", role: "서버 상태 & 캐싱" },
    ],
  },
  database: {
    label: "Database",
    items: [
      { name: "better-sqlite3", version: "-", role: "로컬 SQLite DB" },
      { name: "keytar", version: "-", role: "시스템 키체인" },
    ],
  },
  build: {
    label: "Build",
    items: [
      { name: "esbuild", version: "-", role: "CJS 번들링" },
      { name: "electron-builder", version: "-", role: "패키징 & 배포" },
    ],
  },
  test: {
    label: "Test",
    items: [
      { name: "Vitest", version: "-", role: "테스트 러너" },
      { name: "Testing Library", version: "-", role: "UI 테스트" },
    ],
  },
} as const;

export const SECURITY_MODES = [
  {
    id: "secure-local",
    name: "Secure Local",
    icon: "ShieldCheck",
    recommended: true,
    description: "모든 데이터가 로컬에서만 처리돼요. 민감한 SAP 데이터가 외부로 절대 나가지 않아요.",
    flow: "사용자 → 로컬 LLM → 로컬 DB",
    useCase: "보안이 최우선인 환경",
  },
  {
    id: "reference",
    name: "Reference",
    icon: "BookOpen",
    recommended: false,
    description: "참고 자료만 클라우드 LLM에 전달해요. 기밀 데이터는 로컬에 남아요.",
    flow: "참고 자료 → 클라우드 LLM / 기밀 → 로컬",
    useCase: "외부 LLM 활용이 필요할 때",
  },
  {
    id: "hybrid",
    name: "Hybrid",
    icon: "Shuffle",
    recommended: false,
    description: "작업 유형에 따라 로컬과 클라우드를 자동으로 선택해요.",
    flow: "자동 라우팅: 민감 → 로컬 / 일반 → 클라우드",
    useCase: "유연한 운영이 필요할 때",
  },
] as const;

export const SCREENSHOTS = [
  { id: "hero-mockup", label: "메인 화면", description: "Cockpit 대시보드에서 모든 기능을 한눈에 볼 수 있어요" },
  { id: "chat", label: "AI 채팅", description: "GPT-4.1, Claude, Gemini를 하나의 인터페이스에서 사용해요" },
  { id: "cockpit", label: "Cockpit", description: "시스템 상태, 스케줄, 에이전트를 모니터링해요" },
  { id: "cbo", label: "CBO 분석", description: "SAP 커스터마이징 변경의 영향을 분석해요" },
  { id: "settings", label: "설정", description: "LLM Provider, 보안 모드, UI 테마를 설정해요" },
] as const;
