"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, LayoutDashboard, Search, Settings, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { SCREENSHOTS } from "@/lib/constants";

const screenshotIcons: Record<string, LucideIcon> = {
  "hero-mockup": Monitor,
  chat: MessageSquare,
  cockpit: LayoutDashboard,
  cbo: Search,
  settings: Settings,
};

export function ScreenshotSection() {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveIcon = screenshotIcons[SCREENSHOTS[activeTab].id] || Monitor;

  return (
    <section id="screenshots" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <GradientText>화면 미리보기</GradientText>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            직관적인 UI로 SAP 운영 작업을 효율적으로 수행할 수 있어요.
          </p>
        </AnimateInView>

        <AnimateInView>
          {/* Tabs */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex gap-1 rounded-xl bg-bg-secondary/50 p-1">
              {SCREENSHOTS.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  onClick={() => setActiveTab(index)}
                  className={`rounded-lg px-4 py-2 text-sm transition-all ${
                    activeTab === index
                      ? "bg-sap-bright text-white"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {screenshot.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mockup Frame */}
          <div className="relative mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mockup-frame shadow-2xl shadow-sap-bright/5">
                  <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-sap-deep/60 to-bg-primary">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sap-bright/10">
                        <ActiveIcon size={28} className="text-sap-sky" />
                      </div>
                      <p className="text-lg font-medium text-text-primary">{SCREENSHOTS[activeTab].label}</p>
                      <p className="text-sm text-text-muted">스크린샷 준비 중이에요</p>
                      {/* 가상 UI 요소 */}
                      <div className="mt-2 flex gap-3">
                        <div className="h-8 w-24 rounded-lg bg-bg-secondary/40" />
                        <div className="h-8 w-32 rounded-lg bg-sap-bright/10" />
                        <div className="h-8 w-20 rounded-lg bg-bg-secondary/40" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-2 w-16 rounded-full bg-bg-secondary/30" />
                        <div className="h-2 w-24 rounded-full bg-bg-secondary/30" />
                        <div className="h-2 w-12 rounded-full bg-bg-secondary/30" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-text-secondary">{SCREENSHOTS[activeTab].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
