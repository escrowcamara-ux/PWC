

export enum UserRank {
  MEMBER = 'Member',
  ASSOCIATE = 'Associate',
  DIRECTOR = 'Director',
  EXECUTIVE = 'Executive',
  CHAIRMAN = 'Chairman'
}

export interface UserProfile {
  id: string;
  name: string;
  rank: UserRank;
  joinDate: string;
  totalEarnings: number;
  volume: number;
  avatarUrl: string;
  uplineId: string | null;
}

export interface MinistryDetails {
  name: string;
  title: string;
  establishedDate: string;
  einSuffix: string; // Showing last 4 for realism
}

export interface PassportStamp {
  id: string;
  label: string;
  dateAcquired?: string;
  icon: string;
  color: string; // 'red', 'blue', 'green', 'gold'
  isLocked: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  type: 'Membership' | 'Trust' | 'Ecclesiastical' | 'Financial' | 'Legacy';
  issueDate: string;
  serialNumber: string;
  verificationHash: string;
  issuerSignature: string;
  recipientName: string;
  description: string;
  status: 'active' | 'revoked';
}

export interface NetworkNode {
  id: string;
  name: string;
  rank: UserRank;
  volume: number;
  recruits: number;
  avatarUrl: string;
  children?: NetworkNode[];
}

export interface Lesson {
  title: string;
  topics: string[];
  videoUrl?: string; // YouTube embed URL or internal
  duration?: string;
}

export interface CourseForm {
  title: string;
  purpose: string; // "The Briefing"
  definition: string; // "The Definition"
  downloadUrl?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'Corporate' | 'Asset Protection' | 'Estate Planning' | 'Financial Literacy' | 'Initiation' | 'Identity' | 'Money' | 'Law' | 'L.A.W.';
  thumbnail: string;
  locked: boolean;
  forms?: CourseForm[];
  lessons?: Lesson[];
}

export interface CompensationTier {
  rank: UserRank;
  commission: string;
  bonus: string;
  requirement: string;
}

export interface AscensionPhase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  sealName: string;
  status: 'locked' | 'active' | 'completed';
  modules: string[];
}