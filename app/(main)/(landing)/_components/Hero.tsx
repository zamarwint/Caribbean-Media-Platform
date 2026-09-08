import React from "react";
import { PhoneSimulator } from "./PhoneSimulator";
import { ChevronRight, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenClaimModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenClaimModal }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-background text-secondary-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-left"
          >
            {/* Minimal Tag Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary/40 border border-secondary px-3 py-1 rounded-md mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                The Caribbean Digital Stage
              </span>
              <span className="text-secondary-foreground/70 font-medium text-xs border-l border-border/20 pl-2">
                28+ Island Nations
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.1]">
              Our Islands. Our Culture. <br className="hidden sm:inline" />
              <span className="text-secondary-foreground">
                Our Viral Stage.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-secondary-foreground font-normal max-w-2xl leading-relaxed">
              CMP is the dedicated, high-speed social media platform built
              exclusively for creators, everyday users, and local businesses
              across 28+ Caribbean island nations. Engineered with hyper-tuned
              discovery to propel authentic talent directly into the spotlight.
            </p>

            {/* Primary & Secondary Call to Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenClaimModal}
                className="bg-primary hover:bg-primary/90 text-background font-bold text-sm px-7 py-3.5 rounded-md transition-all shadow-xs flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <Sparkles size={16} className="text-secondary" />
                <span>Start Creating Free</span>
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>

              <button
                onClick={onOpenClaimModal}
                className="bg-transparent hover:bg-secondary text-primary font-semibold text-sm px-6 py-3.5 rounded-md transition-all border border-border flex items-center justify-center space-x-2 cursor-pointer"
              >
                <ShieldCheck size={16} className="text-secondary-foreground" />
                <span>Reserve @Handle</span>
              </button>
            </div>

            {/* Key Value Proof Badges */}
            <div className="mt-10 pt-6 border-t border-border grid grid-cols-3 gap-4 text-left">
              <div className="bg-background border border-border p-3.5 rounded-md">
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">
                  8.5x
                </p>
                <p className="text-xs font-semibold text-secondary-foreground mt-0.5">
                  Local Discovery Lift
                </p>
              </div>
              <div className="bg-background border border-border p-3.5 rounded-md">
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">
                  100%
                </p>
                <p className="text-xs font-semibold text-secondary-foreground mt-0.5">
                  Island-Tuned Feeds
                </p>
              </div>
              <div className="bg-background border border-border p-3.5 rounded-md">
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">
                  28+
                </p>
                <p className="text-xs font-semibold text-secondary-foreground mt-0.5">
                  Nations Connected
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Smartphone Interactive Simulator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <PhoneSimulator />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
