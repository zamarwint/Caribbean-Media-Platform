import React, { useState } from "react";
import { ISLANDS_LIST } from "@/lib/data/mockData";
import { Globe, HeartHandshake, Zap, Compass } from "lucide-react";
import { motion } from "motion/react";

export const WhyCMP: React.FC = () => {
  const [activeIsland, setActiveIsland] = useState<string>("JM");

  const islandDetails: Record<
    string,
    { tag: string; vibe: string; creators: string }
  > = {
    ALL: {
      tag: "Pan-Caribbean",
      vibe: "Unified Island Feed & Diaspora Stage",
      creators: "120K+ Active Creators",
    },
    JM: {
      tag: "Reggae & Dancehall Capital",
      vibe: "Kingston, Montego Bay, Portland",
      creators: "42K+ Creators & Businesses",
    },
    TT: {
      tag: "Soca & Carnival Heartland",
      vibe: "Port of Spain, San Fernando, Tobago",
      creators: "38K+ Creators & Mas Bands",
    },
    BB: {
      tag: "Crop Over & Coastal Culture",
      vibe: "Bridgetown, St. James, Christ Church",
      creators: "19K+ Creators & Artisans",
    },
    HT: {
      tag: "Kompa & Rich Heritage",
      vibe: "Port-au-Prince, Jacmel, Cap-Haïtien",
      creators: "26K+ Artists & Storytellers",
    },
    LC: {
      tag: "Piton Trails & Jazz Fest",
      vibe: "Castries, Soufrière, Gros Islet",
      creators: "14K+ Eco & Travel Guides",
    },
    BS: {
      tag: "Junkanoo & Island Waters",
      vibe: "Nassau, Freeport, Exuma",
      creators: "16K+ Marine & Culture Creators",
    },
    GY: {
      tag: "Mashramani & Rainforest Wonders",
      vibe: "Georgetown, Linden, Essequibo",
      creators: "15K+ Creators & Businesses",
    },
    GD: {
      tag: "Spice Isle & Spicemas",
      vibe: "St. George's, Grenville, Carriacou",
      creators: "9.5K+ Local Creators",
    },
    AG: {
      tag: "365 Beaches & Carnival",
      vibe: "St. John's, English Harbour",
      creators: "8.2K+ Creators & Hospitality",
    },
    DO: {
      tag: "Bachata, Merengue & Dembow",
      vibe: "Santo Domingo, Santiago, Punta Cana",
      creators: "54K+ Artists & Creators",
    },
    BZ: {
      tag: "Garifuna Rhythms & Reefs",
      vibe: "Belize City, San Pedro, Placencia",
      creators: "7.8K+ Eco & Music Creators",
    },
  };

  const selectedData = islandDetails[activeIsland] || islandDetails["ALL"];

  return (
    <section
      id="why-cmp"
      className="py-20 md:py-28 bg-background text-secondary-foreground border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-secondary text-secondary-foreground border border-secondary text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider inline-block mb-4">
            Our Purpose & Digital Sovereignty
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Why Does the Caribbean Need Its{" "}
            <span className="text-primary">Own Stage?</span>
          </h2>
          <p className="mt-4 text-secondary-foreground text-base sm:text-lg leading-relaxed font-normal">
            Global algorithms were not designed for regional islands. Authentic
            music, recipes, local humor, fashion, and neighborhood businesses
            get suppressed by foreign feeds. CMP gives our 44 million people
            their own dedicated discovery engine.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Pillar 1 */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-background p-7 rounded-lg border border-border shadow-2xs hover:border-border transition-colors"
          >
            <div className="w-11 h-11 bg-secondary text-primary rounded-md flex items-center justify-center mb-5 border border-secondary">
              <Globe size={22} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Dedicated Space
            </h3>
            <p className="text-secondary-foreground leading-relaxed text-sm">
              No more fighting multi-million dollar international advertising
              budgets just to be seen by your neighbors in Kingston or
              Bridgetown. CMP isolates and prioritizes Caribbean attention.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-background p-7 rounded-lg border border-border shadow-2xs hover:border-primary transition-colors"
          >
            <div className="w-11 h-11 bg-secondary text-primary rounded-md flex items-center justify-center mb-5 border border-secondary">
              <HeartHandshake size={22} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Cultural Pride
            </h3>
            <p className="text-secondary-foreground leading-relaxed text-sm">
              Celebrate Soca, Reggae, Dancehall, Kompa, Calypso, street food
              recipes, island dialects, and carnival artistry in a digital home
              that honors our collective Caribbean heritage.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-background p-7 rounded-lg border border-border shadow-2xs hover:border-primary transition-colors"
          >
            <div className="w-11 h-11 bg-secondary text-primary rounded-md flex items-center justify-center mb-5 border border-secondary">
              <Zap size={22} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Economic Growth
            </h3>
            <p className="text-secondary-foreground leading-relaxed text-sm">
              Empower local bakeries, tour operators, creators, and Caribbean
              artisans to turn viral video reach directly into local foot
              traffic, orders, and sustainable revenue.
            </p>
          </motion.div>
        </div>

        {/* Interactive Island Network Grid */}
        <div className="bg-background rounded-lg p-6 sm:p-8 border border-border shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-primary flex items-center space-x-2">
                <Compass className="text-primary" size={20} />
                <span>28+ Island Nations Connected</span>
              </h3>
              <p className="text-secondary-foreground text-xs sm:text-sm mt-0.5">
                Select an island to preview active cultural hubs and creator
                density.
              </p>
            </div>

            {/* Selected Island Highlight Box */}
            <div className="bg-muted px-4 py-2 rounded-md border border-secondary flex items-center space-x-3">
              <span className="text-xl">
                {ISLANDS_LIST.find((i) => i.code === activeIsland)?.flag ||
                  "🌴"}
              </span>
              <div>
                <p className="text-xs font-bold text-primary">
                  {selectedData.tag}
                </p>
                <p className="text-[11px] text-secondary-foreground">
                  {selectedData.creators}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {ISLANDS_LIST.map((island) => {
              const isSelected = activeIsland === island.code;
              return (
                <button
                  key={island.code}
                  onClick={() => setActiveIsland(island.code)}
                  className={`p-3 rounded-md text-center transition-all cursor-pointer group flex flex-col items-center justify-center border text-xs font-semibold ${
                    isSelected
                      ? "bg-primary text-background border-primary shadow-xs"
                      : "bg-background hover:bg-muted text-secondary-foreground border-border hover:border-border/30"
                  }`}
                >
                  <span className="text-xl block mb-1 transform group-hover:scale-105 transition-transform">
                    {island.flag}
                  </span>
                  <span className="truncate max-w-full">{island.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
