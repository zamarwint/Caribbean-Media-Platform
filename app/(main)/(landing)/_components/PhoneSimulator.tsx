import React, { useState } from "react";
import { MOCK_FEED_ITEMS, ISLANDS_LIST } from "@/lib/data/mockData";
import { IslandFeedItem } from "@/types/types";
import {
  Heart,
  MessageCircle,
  Share2,
  CheckCircle2,
  Zap,
  Flame,
  Volume2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export const PhoneSimulator: React.FC = () => {
  const [selectedIsland, setSelectedIsland] = useState<string>("ALL");
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    MOCK_FEED_ITEMS.forEach((item) => {
      counts[item.id] = item.likes;
    });
    return counts;
  });
  const [boosted, setBoosted] = useState<boolean>(false);
  const [boostValue, setBoostValue] = useState<number>(1);

  const filteredItems =
    selectedIsland === "ALL"
      ? MOCK_FEED_ITEMS
      : MOCK_FEED_ITEMS.filter(
          (item) =>
            item.island.toLowerCase().includes(selectedIsland.toLowerCase()) ||
            selectedIsland === "ALL",
        );

  const currentItem: IslandFeedItem =
    filteredItems[activeItemIndex % filteredItems.length] || MOCK_FEED_ITEMS[0];

  const toggleLike = (id: string) => {
    setLikedItems((prev) => {
      const isLiked = !prev[id];
      setLikeCounts((c) => ({
        ...c,
        [id]: (c[id] || 0) + (isLiked ? 1 : -1),
      }));
      return { ...prev, [id]: isLiked };
    });
  };

  const handleBoost = () => {
    setBoosted(true);
    setBoostValue((prev) => (prev >= 5 ? 1 : prev + 1));
    setTimeout(() => setBoosted(false), 2000);
  };

  const nextFeedItem = () => {
    setActiveItemIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const isLiked = likedItems[currentItem.id] || false;
  const currentLikes =
    (likeCounts[currentItem.id] || currentItem.likes) * boostValue;

  return (
    <div className="w-full max-w-sm mx-auto relative">
      {/* Smartphone Hardware Frame */}
      <div className="relative bg-background border-2 border-border rounded-xl shadow-sm overflow-hidden text-secondary-foreground min-h-155 flex flex-col justify-between select-none">
        {/* Status Bar */}
        <div className="pt-2 px-4 flex justify-between items-center text-xs font-semibold text-secondary-foreground bg-background border-b border-border z-30">
          <span className="font-mono text-[11px]">9:41</span>
          {/* Speaker / Camera Notch */}
          <div className="w-16 h-2.5 bg-background rounded-full mx-auto flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-primary font-bold text-[10px]">5G</span>
            <div className="w-3.5 h-2 border border-secondary-foreground rounded-xs p-0.5">
              <div className="w-full h-full bg-primary"></div>
            </div>
          </div>
        </div>

        {/* Island Category Tabs */}
        <div className="px-2.5 py-2 z-20 flex space-x-1.5 overflow-x-auto no-scrollbar border-b border-border bg-background">
          {ISLANDS_LIST.slice(0, 6).map((is) => (
            <button
              key={is.code}
              onClick={() => {
                setSelectedIsland(is.code);
                setActiveItemIndex(0);
              }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-all flex items-center space-x-1 cursor-pointer ${
                selectedIsland === is.code
                  ? "bg-primary text-background"
                  : "bg-muted/60 text-secondary-foreground hover:bg-secondary"
              }`}
            >
              <span>{is.flag}</span>
              <span>{is.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Main Feed Reel Content Area */}
        <div className="relative flex-1 flex flex-col justify-end p-4 overflow-hidden bg-neutral-900">
          {/* Background Media Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={currentItem.thumbnailUrl}
                alt={currentItem.caption}
                width={100}
                height={100}
                loading="eager"
                className="w-full h-full object-cover"
              />
              {/* Clean Dark Overlay for text legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          {/* Floating Top Viral Badge */}
          <div className="absolute top-3 left-3 z-20 flex items-center space-x-2">
            <span className="bg-primary text-background text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center shadow-xs">
              <Zap size={11} className="mr-1 text-secondary fill-current" />
              {currentItem.viralMultiplier}
            </span>
            {boostValue > 1 && (
              <span className="bg-secondary text-primary text-[10px] font-bold px-2 py-1 rounded-md shadow-xs">
                {boostValue}x Boost
              </span>
            )}
          </div>

          {/* Right Action Bar */}
          <div className="absolute right-3 bottom-12 z-20 flex flex-col items-center space-y-3">
            {/* Creator Avatar */}
            <div className="relative">
              <Image
                src={currentItem.avatar}
                alt={currentItem.creatorName}
                width={100}
                height={100}
                loading="eager"
                className="size-8 rounded-full border border-background object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 bg-primary text-white rounded-full p-0.5">
                <CheckCircle2 size={8} />
              </span>
            </div>

            {/* Like Button */}
            <button
              onClick={() => toggleLike(currentItem.id)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                  isLiked
                    ? "bg-rose-600 text-white"
                    : "bg-black/40 text-white hover:bg-black/60"
                }`}
              >
                <Heart
                  size={16}
                  className={isLiked ? "fill-current text-white" : ""}
                />
              </div>
              <span className="text-[10px] font-semibold mt-0.5 text-white">
                {(currentLikes / 1000).toFixed(1)}k
              </span>
            </button>

            {/* Comment Button */}
            <div className="flex flex-col items-center cursor-pointer">
              <div className="p-2 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60">
                <MessageCircle size={16} />
              </div>
              <span className="text-[10px] font-semibold mt-0.5 text-white">
                {(currentItem.comments / 1000).toFixed(1)}k
              </span>
            </div>

            {/* Share Button */}
            <div className="flex flex-col items-center cursor-pointer">
              <div className="p-2 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60">
                <Share2 size={16} />
              </div>
              <span className="text-[10px] font-semibold mt-0.5 text-white">
                {(currentItem.shares / 1000).toFixed(1)}k
              </span>
            </div>

            {/* Virality Boost Trigger */}
            <button
              onClick={handleBoost}
              title="Test Caribbean Viral Boost"
              className="p-2 rounded-full bg-secondary dark:bg-secondary-foreground text-primary shadow-xs cursor-pointer"
            >
              <Flame size={16} className="fill-current text-primary" />
            </button>
          </div>

          {/* Bottom Video Meta Information */}
          <div className="relative z-20 pr-14 text-left text-white">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs font-bold flex items-center">
                {currentItem.creatorName}
                {currentItem.verified && (
                  <CheckCircle2
                    size={12}
                    className="ml-1 text-secondary dark:text-secondary-foreground inline fill-current"
                  />
                )}
              </span>
              <span className="text-[10px] text-secondary dark:text-secondary-foreground font-medium">
                {currentItem.flag} {currentItem.island}
              </span>
            </div>

            <p className="text-xs text-white/90 line-clamp-2 leading-snug font-normal mb-2">
              {currentItem.caption}
            </p>

            {/* Audio Track Badge */}
            <div className="flex items-center space-x-1.5 text-[10px] text-white/90 font-medium bg-foregroubd/40 px-2 py-0.5 rounded-md w-fit max-w-[85%] border border-border">
              <Volume2
                size={10}
                className="text-secondary dark:text-secondary-foreground"
              />
              <span className="truncate">{currentItem.audioTrack}</span>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Phone Navigation */}
        <div className="bg-background px-3.5 py-2.5 border-t border-border z-30">
          <button
            onClick={nextFeedItem}
            className="w-full py-2 bg-primary hover:bg-primary/90 text-background font-bold text-xs rounded-md flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer"
          >
            <Sparkles size={13} className="text-secondary" />
            <span>Next Island Reel</span>
          </button>
        </div>
      </div>
    </div>
  );
};
