import React, { useState } from "react";
import { TESTIMONIALS, TRENDING_HASHTAGS } from "@/lib/data/mockData";
import { Hash, Star, CheckCircle2, Flame } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export const SocialProof: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("Soca2026");

  const activeHashtagInfo =
    TRENDING_HASHTAGS.find((h) => h.tag === selectedTag) ||
    TRENDING_HASHTAGS[0];

  return (
    <section
      id="community"
      className="py-20 md:py-28 bg-background text-secondary-foreground border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-secondary text-secondary-foreground border border-secondary text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider inline-block mb-3">
            Social Proof & Community Pulse
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Voices of Caribbean Creators & <br />
            <span className="text-secondary-foreground">
              Trending Island Culture
            </span>
          </h2>
          <p className="mt-4 text-secondary-foreground text-base sm:text-lg font-normal">
            Real stories from local musicians, island entrepreneurs, and
            creative tastemakers who unlocked genuine virality on CMP.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -3 }}
              className="bg-background p-7 rounded-lg border border-border shadow-2xs flex flex-col justify-between hover:border-border transition-colors"
            >
              <div>
                {/* Rating & Growth Pill */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="bg-secondary text-secondary-foreground text-[11px] font-bold px-2 py-0.5 rounded-md border border-secondary">
                    {t.growthStat}
                  </span>
                </div>

                <p className="text-secondary-foreground italic text-sm leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center pt-4 border-t border-border">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={100}
                  height={100}
                  loading="eager"
                  className="w-10 h-10 rounded-md object-cover border border-border"
                />
                <div className="ml-3">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-primary text-sm">
                      {t.name}
                    </span>
                    {t.verified && (
                      <CheckCircle2 size={13} className="text-primary" />
                    )}
                  </div>
                  <p className="text-xs text-secondary-foreground font-medium">
                    {t.handle} • {t.flag} {t.island}
                  </p>
                  <p className="text-[11px] text-secondary-foreground font-normal">
                    {t.role} ({t.followers})
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trending Hashtags Showcase */}
        <div className="bg-background rounded-lg p-6 sm:p-8 border border-border shadow-2xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 border-b border-border pb-5">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-1">
                Live Island Culture Radar
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-foreground flex items-center space-x-2">
                <Flame className="text-primary" size={20} />
                <span>Trending Caribbean Hashtags</span>
              </h3>
            </div>
            <div className="bg-secondary px-3 py-1 rounded-md border border-secondary flex items-center space-x-2 text-xs font-semibold text-secondary-foreground">
              <span>65.2M Views Today</span>
            </div>
          </div>

          {/* Hashtag Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {TRENDING_HASHTAGS.map((h) => (
              <button
                key={h.tag}
                onClick={() => setSelectedTag(h.tag)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
                  selectedTag === h.tag
                    ? "bg-primary text-background shadow-xs"
                    : "bg-background text-secondary-foreground border border-border"
                }`}
              >
                <Hash size={12} />
                <span>{h.tag}</span>
                {h.isHot && <span className="text-xs">🔥</span>}
              </button>
            ))}
          </div>

          {/* Active Hashtag Detail Box */}
          <div className="bg-secondary/20 p-5 rounded-md border border-secondary flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl font-bold text-primary">
                  #{activeHashtagInfo.tag}
                </span>
                <span className="bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-md border border-secondary">
                  {activeHashtagInfo.category}
                </span>
              </div>
              <p className="text-xs text-secondary-foreground mt-1">
                Trending rapidly across Jamaica, Trinidad, Barbados, Haiti, St.
                Lucia, and Guyana.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div>
                <span className="text-secondary-foreground text-xs block uppercase font-medium">
                  Views
                </span>
                <span className="text-primary text-lg font-bold">
                  {activeHashtagInfo.views}
                </span>
              </div>
              <div>
                <span className="text-secondary-foreground text-xs block uppercase font-medium">
                  Reels Posted
                </span>
                <span className="text-primary text-lg font-bold">
                  {activeHashtagInfo.posts}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
