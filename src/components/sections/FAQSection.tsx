"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare, Bot, Shield, Layers, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { FAQ_ITEMS } from "@/lib/constants";

const faqIcons: Record<string, LucideIcon> = {
  MessageSquare,
  Bot,
  Shield,
  Layers,
  Monitor,
};

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <AnimateInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <GradientText>자주 묻는 질문</GradientText>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            궁금한 점이 있으신가요? 가장 많이 물어보시는 질문을 모았어요.
          </p>
        </AnimateInView>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => {
            const Icon = faqIcons[item.icon] || MessageSquare;
            const isOpen = openId === item.id;

            return (
              <AnimateInView key={item.id}>
                <div className="glass-subtle rounded-2xl">
                  <button
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sap-bright/10">
                      <Icon size={18} className="text-sap-sky" />
                    </div>
                    <span className="flex-1 text-base font-medium text-text-primary">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} className="text-text-muted" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pl-20">
                          <p className="text-sm leading-relaxed text-text-secondary">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
