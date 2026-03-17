"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { SCREENSHOTS } from "@/lib/constants";

export function ScreenshotSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="screenshots" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <GradientText>화면 미리보기</GradientText>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            직관적인 UI로 SAP 운영 작업을 효율적으로 수행할 수 있어요.
          </p>
        </AnimateInView>

        {/* Tabs */}
        <AnimateInView>
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

          {/* Screenshot Display */}
          <div className="relative mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-border-glass"
              >
                {/* Placeholder screenshot */}
                <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-primary">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sap-bright/10">
                      <span className="text-2xl text-sap-sky">
                        {SCREENSHOTS[activeTab].label.charAt(0)}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-text-primary">{SCREENSHOTS[activeTab].label}</p>
                    <p className="mt-2 text-sm text-text-muted">스크린샷 준비 중이에요</p>
                  </div>
                </div>

                {/* Caption */}
                <div className="border-t border-border-glass bg-bg-secondary/30 px-6 py-4">
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
