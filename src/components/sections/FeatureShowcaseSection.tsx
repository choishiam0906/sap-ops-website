"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Shield, Bot, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { FEATURE_SHOWCASES } from "@/lib/constants";

const mockupIcons: Record<string, LucideIcon> = {
  chat: MessageSquare,
  cbo: Search,
  settings: Shield,
  cockpit: Bot,
};

export function FeatureShowcaseSection() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateInView className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <GradientText>핵심 기능</GradientText>을 한눈에
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            SAP 운영에 꼭 필요한 기능만 모았어요. 각 기능이 어떻게 동작하는지 살펴보세요.
          </p>
        </AnimateInView>

        <div className="flex flex-col gap-24">
          {FEATURE_SHOWCASES.map((feature, index) => {
            const isEven = index % 2 === 1;
            const MockupIcon = mockupIcons[feature.mockupId] || MessageSquare;

            return (
              <div
                key={feature.id}
                className={`grid items-center gap-12 lg:grid-cols-2 ${isEven ? "lg:direction-rtl" : ""}`}
              >
                {/* Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={isEven ? "lg:order-2" : "lg:order-1"}
                >
                  <div className="mockup-frame">
                    <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-sap-deep/60 to-bg-primary">
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sap-bright/10">
                          <MockupIcon size={28} className="text-sap-sky" />
                        </div>
                        <p className="text-sm font-medium text-text-secondary">{feature.title}</p>
                        <div className="flex gap-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className={`h-2 rounded-full bg-sap-bright/${20 + i * 10}`} style={{ width: `${40 + i * 16}px` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 설명 */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className={isEven ? "lg:order-1" : "lg:order-2"}
                >
                  <p className="mb-2 text-sm font-medium text-sap-sky">{feature.subtitle}</p>
                  <h3 className="mb-4 text-2xl font-bold text-text-primary sm:text-3xl">{feature.title}</h3>
                  <p className="mb-6 text-text-secondary leading-relaxed">{feature.description}</p>
                  <ul className="flex flex-col gap-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-text-secondary">
                        <Check size={16} className="mt-0.5 shrink-0 text-sap-sky" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
