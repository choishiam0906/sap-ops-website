"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="hero-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Decorative orbs */}
      <div className="glow-orb left-1/4 top-1/4 h-96 w-96 bg-sap-bright animate-pulse-glow" />
      <div className="glow-orb right-1/4 bottom-1/3 h-72 w-72 bg-sap-sky animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 rounded-full border border-border-glass px-4 py-1.5 text-xs text-text-secondary"
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

        {/* GitHub stars */}
        <motion.a
          href={APP.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-secondary"
        >
          <Github size={16} />
          GitHub에서 소스 보기
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 z-10"
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
