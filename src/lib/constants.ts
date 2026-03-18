export const APP = {
  name: "SAP Assistant Desktop Platform",
  shortName: "SAP Assistant",
  version: "6.0.0",
  description:
    "로컬 우선 아키텍처로 SAP 운영 자동화를 안전하게 수행하세요. 다중 LLM 통합, CBO 분석, 3가지 보안 모드를 제공해요.",
  url: "https://sap-assistant.vercel.app",
  github: "https://github.com/choishiam0906/sap-ops-website",
  license: "MIT",
} as const;

export const NAV_LINKS = [
  { label: "기능", href: "#features" },
  { label: "보안", href: "#security" },
  { label: "아키텍처", href: "#architecture" },
  { label: "FAQ", href: "#faq" },
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

export interface PlatformDownload {
  label: string;
  icon: string;
  available: boolean;
  options?: {
    label: string;
    description: string;
    size: string;
    recommended: boolean;
    href: string;
  }[];
  comingSoonMessage?: string;
}

export const PLATFORM_DOWNLOADS: Record<string, PlatformDownload> = {
  windows: {
    label: "Windows",
    icon: "Monitor",
    available: true,
    options: [
      {
        label: "Portable EXE",
        description: "설치 없이 바로 실행할 수 있어요",
        size: "75MB",
        recommended: true,
        href: `${RELEASE_BASE}/SAP-Assistant-Desktop-Platform-${APP.version}-Portable.exe`,
      },
      {
        label: "NSIS 설치기",
        description: "Windows에 프로그램으로 설치해요",
        size: "85MB",
        recommended: false,
        href: `${RELEASE_BASE}/SAP-Assistant-Desktop-Platform-${APP.version}-Setup.exe`,
      },
    ],
  },
  macos: {
    label: "macOS",
    icon: "Apple",
    available: false,
    comingSoonMessage: "macOS 지원은 곧 준비될 거예요",
  },
  linux: {
    label: "Linux",
    icon: "Terminal",
    available: false,
    comingSoonMessage: "Linux 지원도 계획 중이에요",
  },
} as const;

export interface FeatureShowcase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  mockupId: string;
}

export const FEATURE_SHOWCASES: FeatureShowcase[] = [
  {
    id: "multi-llm",
    title: "다중 LLM, 하나의 인터페이스",
    subtitle: "어떤 AI를 써야 할지 고민되시나요?",
    description: "GPT-4.1, Claude 4.6, Gemini 2.5 Pro를 하나의 채팅에서 자유롭게 전환하며 사용할 수 있어요.",
    points: [
      "대화 중 LLM 실시간 전환",
      "SSE 기반 스트리밍 응답",
      "Provider별 토큰 사용량 추적",
    ],
    mockupId: "chat",
  },
  {
    id: "cbo-analysis",
    title: "CBO Impact 분석",
    subtitle: "커스터마이징 변경, 어디까지 영향을 줄까요?",
    description: "SAP 커스터마이징 변경(CBO)의 영향 범위를 자동으로 분석하고 리스크를 평가해요.",
    points: [
      "변경 오브젝트별 영향 범위 시각화",
      "리스크 레벨 자동 평가",
      "의존성 트리 분석",
    ],
    mockupId: "cbo",
  },
  {
    id: "security-modes",
    title: "3가지 보안 모드",
    subtitle: "민감한 SAP 데이터, 안전하게 다루고 싶으시죠?",
    description: "Secure Local, Reference, Hybrid — 환경에 맞는 보안 수준을 선택할 수 있어요.",
    points: [
      "Secure Local: 데이터가 절대 외부로 안 나가요",
      "Reference: 참고 자료만 클라우드로 전달",
      "Hybrid: 민감도에 따라 자동 라우팅",
    ],
    mockupId: "settings",
  },
  {
    id: "custom-agents",
    title: "커스텀 에이전트",
    subtitle: "반복 작업, 자동화하고 싶지 않으세요?",
    description: "Markdown 기반 워크플로우로 반복 작업을 자동화하는 에이전트를 만들 수 있어요.",
    points: [
      "Markdown 기반 워크플로우 정의",
      "node-cron 스케줄 자동화",
      "5가지 SAP 도메인팩 지원",
    ],
    mockupId: "cockpit",
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-llm",
    question: "LLM을 자유롭게 전환할 수 있나요?",
    answer: "네, 대화 중에도 GPT-4.1, Claude 4.6, Gemini 2.5 Pro 사이를 자유롭게 전환할 수 있어요. Provider Router가 자동으로 API 호출을 관리하고, 각 LLM의 응답 스타일에 맞게 UI를 조정해요.",
    icon: "MessageSquare",
  },
  {
    id: "faq-agent",
    question: "커스텀 에이전트는 어떻게 만드나요?",
    answer: "Markdown 파일로 워크플로우를 정의하면 돼요. 트리거 조건, 실행 단계, 변수 바인딩을 설정하면 에이전트가 자동으로 반복 작업을 수행해요. 도메인팩과 결합하면 SAP 특화 자동화도 가능해요.",
    icon: "Bot",
  },
  {
    id: "faq-security",
    question: "데이터가 외부로 나가지 않는다는 게 사실인가요?",
    answer: "Secure Local 모드에서는 모든 처리가 로컬에서만 이루어져요. 로컬 LLM과 SQLite DB를 사용하며, 네트워크 요청이 완전히 차단돼요. Electron의 프로세스 격리와 contextBridge가 보안 경계를 지켜줘요.",
    icon: "Shield",
  },
  {
    id: "faq-domain",
    question: "도메인팩은 어떤 것들이 있나요?",
    answer: "Ops, Functional, CBO, PI, BTP 등 5가지 SAP 도메인별 전문 지식 팩을 제공해요. 각 팩에는 도메인 전문 용어, 베스트 프랙티스, 트러블슈팅 가이드가 포함되어 있어서 LLM의 SAP 이해도를 높여줘요.",
    icon: "Layers",
  },
  {
    id: "faq-platform",
    question: "macOS나 Linux에서도 사용할 수 있나요?",
    answer: "현재는 Windows 전용이에요. Electron 기반이라 크로스플랫폼 지원이 기술적으로 가능하고, macOS와 Linux 지원을 준비하고 있어요. 곧 만나보실 수 있을 거예요.",
    icon: "Monitor",
  },
];

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
