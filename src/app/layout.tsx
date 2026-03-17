import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sap-assistant.vercel.app"),
  title: "SAP Assistant Desktop Platform",
  description:
    "로컬 우선 아키텍처로 SAP 운영 자동화를 안전하게 수행하세요. 다중 LLM 통합, CBO 분석, 3가지 보안 모드를 제공해요.",
  keywords: ["SAP", "자동화", "LLM", "Electron", "데스크톱", "CBO", "보안"],
  authors: [{ name: "boxlogodev" }],
  openGraph: {
    title: "SAP Assistant Desktop Platform v6.0.0",
    description: "다중 LLM 통합 · CBO 분석 · 로컬 우선 보안",
    url: "https://sap-assistant.vercel.app",
    siteName: "SAP Assistant",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP Assistant Desktop Platform v6.0.0",
    description: "다중 LLM 통합 · CBO 분석 · 로컬 우선 보안",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} ${notoSansKR.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
