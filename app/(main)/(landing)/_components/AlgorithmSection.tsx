import React, { useState } from "react";
import { AudienceTab } from "@/types/types";
import {
  Users,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  Sliders,
  Flame,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const AlgorithmSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AudienceTab>("creators");

  // Interactive Calculator State
  const [followerCount, setFollowerCount] = useState<number>(1500);
  const [selectedIsland, setSelectedIsland] = useState<string>("Jamaica 🇯🇲");

  // Calculation multipliers
  const globalReachEstimate = Math.round(followerCount * 0.08); // 8% reach on old networks
  const cmpReachEstimate = Math.round(followerCount * 4.2 + 15000); // 420% + base local viral seed

  return (
    <section
      id="algorithm"
      className="py-20 md:py-28 bg-background text-secondary-foreground border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-secondary text-secondary-foreground border border-secondary text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider inline-block mb-3">
            The Discovery Engine
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Democratizing Reach with <br />
            <span className="text-secondary-foreground">
              Hyper-Tuned Island Virality
            </span>
          </h2>
          <p className="mt-4 text-secondary-foreground text-base sm:text-lg leading-relaxed font-normal">
            Legacy social networks require massive follower counts before
            showing your videos to anyone. CMP's algorithm tests your content
            directly with local audiences — ensuring true talent and regional
            businesses can go viral overnight.
          </p>
        </div>

        {/* 3 Audience Toggle Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-background p-1 rounded-md border border-border shadow-2xs flex space-x-1">
            <button
              onClick={() => setActiveTab("creators")}
              className={`px-4 sm:px-5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === "creators"
                  ? "bg-primary text-background shadow-xs"
                  : "text-secondary-foreground hover:bg-muted"
              }`}
            >
              <TrendingUp size={15} />
              <span>For Creators</span>
            </button>

            <button
              onClick={() => setActiveTab("users")}
              className={`px-4 sm:px-5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === "users"
                  ? "bg-primary text-background shadow-xs"
                  : "text-secondary-foreground hover:bg-muted"
              }`}
            >
              <Users size={15} />
              <span>For Everyday Users</span>
            </button>

            <button
              onClick={() => setActiveTab("businesses")}
              className={`px-4 sm:px-5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === "businesses"
                  ? "bg-primary text-background shadow-xs"
                  : "text-secondary-foreground hover:bg-muted"
              }`}
            >
              <Briefcase size={15} />
              <span>For Local Businesses</span>
            </button>
          </div>
        </div>

        {/* Tab Detail Cards */}
        <div className="mb-14">
          <AnimatePresence mode="wait">
            {activeTab === "creators" && (
              <motion.div
                key="creators"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-background rounded-lg p-6 sm:p-8 border border-border shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7">
                  <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-1">
                    Uncapped Local Reach
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mb-3">
                    Zero Follower Barriers. Pure Organic Discoverability.
                  </h3>
                  <p className="text-secondary-foreground leading-relaxed mb-5 font-normal text-sm sm:text-base">
                    Whether you have 10 followers or 100,000 followers, every
                    reel you post is instantly seeded in front of a live local
                    audience. If the vibes resonate, the algorithm propels you
                    straight across all 28+ island feeds.
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-center text-sm font-medium text-secondary-foreground">
                      <CheckCircle2
                        size={16}
                        className="text-primary mr-2 shrink-0"
                      />
                      Automatic soundbite attribution & riddim indexing
                    </li>
                    <li className="flex items-center text-sm font-medium text-secondary-foreground">
                      <CheckCircle2
                        size={16}
                        className="text-primary mr-2 shrink-0"
                      />
                      Verified Mountain Green badges for authentic Caribbean
                      talent
                    </li>
                    <li className="flex items-center text-sm font-medium text-secondary-foreground">
                      <CheckCircle2
                        size={16}
                        className="text-primary mr-2 shrink-0"
                      />
                      Direct creator tipping & local sponsor discovery
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-secondary/20 p-6 rounded-lg border border-secondary">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      VIRAL MATCH SCORE
                    </span>
                    <Flame className="text-primary" size={18} />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-primary mb-2">
                    98.4%
                  </div>
                  <p className="text-xs text-secondary-foreground">
                    High local resonance detected based on regional audio trends
                    and authentic hashtag clustering.
                  </p>
                  <div className="mt-5 pt-3 border-t border-border flex justify-between text-xs text-secondary-foreground font-semibold">
                    <span>Target: Caribbean Archipelago</span>
                    <span className="text-primary">Status: Boost Active</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "users" && (
              <motion.div
                key="users"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-background rounded-lg p-6 sm:p-8 border border-border shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7">
                  <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-1">
                    Tailored Island Experience
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mb-3">
                    100% Authentic Caribbean Feed. No Noise.
                  </h3>
                  <p className="text-secondary-foreground leading-relaxed mb-5 font-normal text-sm sm:text-base">
                    Say goodbye to generic international spam. Experience a
                    hyper-curated stream of Soca trends, carnival prep, local
                    street food, comedy, news, and island lifestyle tailored to
                    your specific country or the entire region.
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-center text-sm font-medium text-secondary-foreground">
                      <CheckCircle2
                        size={16}
                        className="text-primary mr-2 shrink-0"
                      />
                      Seamless island switching (Jamaica, Trinidad, Barbados,
                      Haiti, etc.)
                    </li>
                    <li className="flex items-center text-sm font-medium text-secondary-foreground">
                      <CheckCircle2
                        size={16}
                        className="text-primary mr-2 shrink-0"
                      />
                      Save & remix local audio clips and carnival chants
                    </li>
                    <li className="flex items-center text-sm font-medium text-secondary-foreground">
                      <CheckCircle2
                        size={16}
                        className="text-primary mr-2 shrink-0"
                      />
                      Discover hidden local spots, concerts, and pop-up events
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-secondary/20 p-6 rounded-lg border border-secondary">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      CURATED FEED PREFERENCE
                    </span>
                    <Sparkles className="text-primary" size={18} />
                  </div>
                  <div className="text-2xl font-extrabold text-primary mb-3">
                    Pure Island Vibration
                  </div>
                  <div className="space-y-2 text-xs text-secondary-foreground">
                    <div className="flex justify-between py-1.5 border-b border-border font-medium">
                      <span>Soca & Reggae Riddims</span>
                      <span className="text-primary font-bold">45%</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border font-medium">
                      <span>Local Street Food & Culture</span>
                      <span className="text-primary font-bold">30%</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border font-medium">
                      <span>Island Comedy & Sketches</span>
                      <span className="text-primary font-bold">25%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "businesses" && (
              <motion.div
                key="businesses"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-background rounded-lg p-6 sm:p-8 border border-border shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7">
                  <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-1">
                    High Conversion Local Marketing
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mb-3">
                    Put Your Business in Front of Paying Island Customers.
                  </h3>
                  <p className="text-secondary-foreground leading-relaxed mb-5 font-normal text-sm sm:text-base">
                    Stop paying ad dollars for impressions in random foreign
                    countries. CMP guarantees that every impression reaches
                    customers living, visiting, or ordering directly within your
                    Caribbean community.
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-center text-sm font-medium text-secondary-foreground">
                      <CheckCircle2
                        size={16}
                        className="text-primary mr-2 shrink-0"
                      />
                      Hyper-local geographic targeting by island &
                      parish/district
                    </li>
                    <li className="flex items-center text-sm font-medium text-secondary-foreground">
                      <CheckCircle2
                        size={16}
                        className="text-primary mr-2 shrink-0"
                      />
                      Direct Click-to-WhatsApp and Instagram order buttons
                    </li>
                    <li className="flex items-center text-sm font-medium text-secondary-foreground">
                      <CheckCircle2
                        size={16}
                        className="text-primary mr-2 shrink-0"
                      />
                      Verified Business badges & native storefront showcases
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-secondary/20 p-6 rounded-lg border border-secondary">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      LOCAL AD EFFICIENCY
                    </span>
                    <Briefcase className="text-primary" size={18} />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-primary mb-2">
                    3.4x
                  </div>
                  <p className="text-xs text-secondary-foreground">
                    Higher local transaction conversion rate compared to
                    standard global ad platforms.
                  </p>
                  <div className="mt-5 pt-3 border-t border-border flex justify-between text-xs text-secondary-foreground font-semibold">
                    <span>Wasted Impressions: 0%</span>
                    <span className="text-primary">100% Caribbean</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Interactive Virality Reach Simulator Tool */}
        <div className="bg-background rounded-lg p-6 sm:p-8 border border-border shadow-2xs max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-background text-primary rounded-md border border-secondary">
              <Sliders size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">
                Island Virality Simulator
              </h3>
              <p className="text-xs text-secondary-foreground">
                Estimate your potential video impressions on CMP vs legacy
                global apps.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Input Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-primary uppercase mb-1.5">
                  Starting Followers:{" "}
                  <span className="text-primary font-extrabold">
                    {followerCount.toLocaleString()}
                  </span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="50000"
                  step="500"
                  value={followerCount}
                  onChange={(e) => setFollowerCount(Number(e.target.value))}
                  className="w-full accent-[#1D4533] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary-foreground uppercase mb-1.5">
                  Island Hub
                </label>
                <select
                  value={selectedIsland}
                  onChange={(e) => setSelectedIsland(e.target.value)}
                  className="w-full bg-background border border-border text-secondary-foreground rounded-md p-2.5 text-xs font-semibold focus:border-primary outline-none"
                >
                  <option>Jamaica 🇯🇲</option>
                  <option>Trinidad & Tobago 🇹🇹</option>
                  <option>Barbados 🇧🇧</option>
                  <option>Haiti 🇭🇹</option>
                  <option>St. Lucia 🇱🇨</option>
                  <option>Bahamas 🇧🇸</option>
                  <option>Guyana 🇬🇾</option>
                </select>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-secondary/20 p-5 rounded-md border border-secondary flex flex-col justify-between space-y-3">
              <div>
                <p className="text-xs text-secondary-foreground font-semibold uppercase">
                  Legacy Network Reach
                </p>
                <p className="text-base font-semibold text-secondary-foreground line-through">
                  ~{globalReachEstimate.toLocaleString()} Views
                </p>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-primary uppercase">
                    CMP Local Discovery Reach
                  </span>
                  <span className="bg-primary text-background text-[10px] px-2 py-0.5 rounded-sm font-bold">
                    8.5x LIFT
                  </span>
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-primary mt-1">
                  ~{cmpReachEstimate.toLocaleString()}{" "}
                  <span className="text-sm text-secondary-foreground font-semibold">
                    Views
                  </span>
                </p>
                <p className="text-[11px] text-secondary-foreground mt-1">
                  *Based on CMP's localized initial seeding algorithm across{" "}
                  {selectedIsland}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
