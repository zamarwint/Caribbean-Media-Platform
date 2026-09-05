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
      className="py-20 md:py-28 bg-white text-[#5E3122] border-b border-[#5E3122]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-[#F7EAE0]/80 text-[#1D4533] border border-[#F9D2BA] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider inline-block mb-3">
            Social Proof & Community Pulse
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D4533] tracking-tight">
            Voices of Caribbean Creators & <br />
            <span className="text-[#5E3122]">Trending Island Culture</span>
          </h2>
          <p className="mt-4 text-[#5E3122] text-base sm:text-lg font-normal">
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
              className="bg-white p-7 rounded-lg border border-[#5E3122]/15 shadow-2xs flex flex-col justify-between hover:border-[#1D4533]/40 transition-colors"
            >
              <div>
                {/* Rating & Growth Pill */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="bg-[#F7EAE0] text-[#1D4533] text-[11px] font-bold px-2 py-0.5 rounded-md border border-[#F9D2BA]">
                    {t.growthStat}
                  </span>
                </div>

                <p className="text-[#5E3122] italic text-sm leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center pt-4 border-t border-[#5E3122]/10">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={100}
                  height={100}
                  loading="eager"
                  className="w-10 h-10 rounded-md object-cover border border-[#5E3122]/20"
                />
                <div className="ml-3">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-[#1D4533] text-sm">
                      {t.name}
                    </span>
                    {t.verified && (
                      <CheckCircle2 size={13} className="text-[#1D4533]" />
                    )}
                  </div>
                  <p className="text-xs text-[#5E3122]/80 font-medium">
                    {t.handle} • {t.flag} {t.island}
                  </p>
                  <p className="text-[11px] text-[#5E3122]/60 font-normal">
                    {t.role} ({t.followers})
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trending Hashtags Showcase */}
        <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#5E3122]/15 shadow-2xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 border-b border-[#5E3122]/10 pb-5">
            <div>
              <span className="text-[#1D4533] font-bold text-xs uppercase tracking-wider block mb-1">
                Live Island Culture Radar
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1D4533] flex items-center space-x-2">
                <Flame className="text-[#1D4533]" size={20} />
                <span>Trending Caribbean Hashtags</span>
              </h3>
            </div>
            <div className="bg-[#F7EAE0]/70 px-3 py-1 rounded-md border border-[#F9D2BA] flex items-center space-x-2 text-xs font-semibold text-[#1D4533]">
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
                    ? "bg-[#1D4533] text-white shadow-xs"
                    : "bg-white text-[#5E3122] hover:bg-[#F7EAE0]/50 border border-[#5E3122]/15"
                }`}
              >
                <Hash size={12} />
                <span>{h.tag}</span>
                {h.isHot && <span className="text-xs">🔥</span>}
              </button>
            ))}
          </div>

          {/* Active Hashtag Detail Box */}
          <div className="bg-[#F7EAE0]/40 p-5 rounded-md border border-[#F9D2BA] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl font-bold text-[#1D4533]">
                  #{activeHashtagInfo.tag}
                </span>
                <span className="bg-[#F7EAE0] text-[#1D4533] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#F9D2BA]">
                  {activeHashtagInfo.category}
                </span>
              </div>
              <p className="text-xs text-[#5E3122] mt-1">
                Trending rapidly across Jamaica, Trinidad, Barbados, Haiti, St.
                Lucia, and Guyana.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div>
                <span className="text-[#5E3122]/70 text-xs block uppercase font-medium">
                  Views
                </span>
                <span className="text-[#1D4533] text-lg font-bold">
                  {activeHashtagInfo.views}
                </span>
              </div>
              <div>
                <span className="text-[#5E3122]/70 text-xs block uppercase font-medium">
                  Reels Posted
                </span>
                <span className="text-[#1D4533] text-lg font-bold">
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
