export interface IslandFeedItem {
  id: string;
  island: string;
  flag: string;
  creatorName: string;
  creatorHandle: string;
  avatar: string;
  verified: boolean;
  caption: string;
  hashtag: string;
  audioTrack: string;
  likes: number;
  comments: number;
  shares: number;
  viralMultiplier: string;
  bgGradient: string;
  mediaType: 'dance' | 'food' | 'comedy' | 'music' | 'business';
  thumbnailUrl: string;
}

export interface CreatorTestimonial {
  id: string;
  name: string;
  handle: string;
  island: string;
  flag: string;
  role: 'Content Creator' | 'Local Business' | 'Everyday User' | 'Musician';
  avatar: string;
  quote: string;
  growthStat: string;
  followers: string;
  verified: boolean;
}

export interface TrendingHashtag {
  tag: string;
  views: string;
  posts: string;
  category: string;
  isHot?: boolean;
}

export type AudienceTab = 'creators' | 'users' | 'businesses';
