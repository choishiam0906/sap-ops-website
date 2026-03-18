"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, MessageSquare, Shield, Cpu } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="hero-gradient relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* 왼쪽: 텍스트 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-8 w-fit rounded-full border border-border-glass px-4 py-1.5 text-xs text-text-secondary"
          >
            v{APP.version} · Desktop Platform · Electron + React
          </motion.div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            SAP 운영 자동화,{" "}
            <GradientText>안전하게.</GradientText>
          </h1>

          {/* Sub-heading */}
          <p className="mb-10 max-w-xl text-lg text-text-secondary sm:text-xl">
            로컬 우선 아키텍처로 민감한 데이터를 보호하면서
            <br className="hidden sm:block" />
            다중 LLM을 활용하세요.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#download" size="lg">
              무료 다운로드
            </Button>
            <Button href="#architecture" variant="secondary" size="lg">
              아키텍처 보기
            </Button>
          </div>

          {/* GitHub link */}
          <motion.a
            href={APP.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-8 flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-secondary"
          >
            <Github size={16} />
            GitHub에서 소스 보기
          </motion.a>
        </motion.div>

        {/* 오른쪽: 앱 Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="mockup-frame shadow-2xl shadow-sap-bright/10">
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-sap-deep/80 to-bg-primary p-8">
              <div className="flex w-full max-w-md flex-col gap-4">
                {/* 모의 채팅 UI */}
                <div className="flex items-center gap-3 rounded-lg bg-bg-secondary/60 px-4 py-3">
                  <MessageSquare size={16} className="text-sap-sky" />
                  <span className="text-sm text-text-secondary">SAP 운영 질문을 입력하세요...</span>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 rounded-lg bg-sap-bright/10 px-3 py-2">
                    <Shield size={14} className="text-sap-sky" />
                    <span className="text-xs text-text-secondary">Secure Local</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-sap-bright/10 px-3 py-2">
                    <Cpu size={14} className="text-sap-sky" />
                    <span className="text-xs text-text-secondary">GPT-4.1</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-bg-secondary/40" />
                  <div className="h-3 w-4/5 rounded bg-bg-secondary/40" />
                  <div className="h-3 w-3/5 rounded bg-bg-secondary/40" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
