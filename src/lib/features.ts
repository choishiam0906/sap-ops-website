export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: "MessageSquare",
    title: "다중 LLM 채팅",
    description: "GPT-4.1, Claude 4.6, Gemini 2.5 Pro를 하나의 인터페이스에서 자유롭게 전환하며 사용할 수 있어요.",
  },
  {
    icon: "Search",
    title: "CBO Impact 분석",
    description: "SAP 커스터마이징 변경(CBO)의 영향 범위를 자동으로 분석하고 리스크를 평가해요.",
  },
  {
    icon: "Shield",
    title: "3가지 보안 모드",
    description: "Secure Local, Reference, Hybrid — 환경에 맞는 보안 수준을 선택할 수 있어요.",
  },
  {
    icon: "Layers",
    title: "5가지 도메인팩",
    description: "Ops, Functional, CBO, PI, BTP 등 SAP 도메인별 전문 지식 팩을 제공해요.",
  },
  {
    icon: "Database",
    title: "Knowledge Vault",
    description: "기밀 자료와 참고 자료를 분류하여 안전하게 관리하고 LLM 컨텍스트로 활용해요.",
  },
  {
    icon: "Bot",
    title: "커스텀 에이전트",
    description: "Markdown 기반 워크플로우로 반복 작업을 자동화하는 에이전트를 만들 수 있어요.",
  },
  {
    icon: "Clock",
    title: "스케줄 자동화",
    description: "node-cron 기반으로 루틴 작업을 예약하고 자동으로 실행해요.",
  },
  {
    icon: "Zap",
    title: "실시간 스트리밍",
    description: "SSE 기반 LLM 응답 스트리밍으로 빠른 피드백을 받을 수 있어요.",
  },
  {
    icon: "RefreshCw",
    title: "에러 복원력",
    description: "Retry, Circuit Breaker, Fallback 패턴으로 안정적인 LLM 통신을 보장해요.",
  },
  {
    icon: "LayoutDashboard",
    title: "14+ UI 페이지",
    description: "Cockpit, Chat, CBO, Knowledge, Settings 등 풍부한 인터페이스를 제공해요.",
  },
];
