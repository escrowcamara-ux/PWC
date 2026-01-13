

import { UserProfile, UserRank, NetworkNode, CourseModule, CompensationTier, AscensionPhase, MinistryDetails, PassportStamp, Certificate } from './types';

export const CURRENT_USER: UserProfile = {
  id: 'u1',
  name: 'Alexander Sterling',
  rank: UserRank.DIRECTOR,
  joinDate: '2023-11-15',
  totalEarnings: 45250.00,
  volume: 150000,
  avatarUrl: 'https://picsum.photos/200/200?random=1',
  uplineId: 'u0'
};

export const USER_MINISTRY: MinistryDetails = {
  name: 'House of Sterling Private Ministry',
  title: 'First Trustee & Beneficiary',
  establishedDate: 'NOV 2023',
  einSuffix: '98-XX21'
};

export const PASSPORT_STAMPS: PassportStamp[] = [
  {
    id: 's1',
    label: 'Seal of Release', // Phase 1
    dateAcquired: '12 DEC 2023',
    icon: '🦅',
    color: 'blue',
    isLocked: false
  },
  {
    id: 's2',
    label: 'Seal of Access', // Phase 2
    dateAcquired: '15 JAN 2024',
    icon: '💰',
    color: 'green',
    isLocked: false
  },
  {
    id: 's3',
    label: 'Seal of Redemption', // Phase 3
    dateAcquired: undefined,
    icon: '⚖️',
    color: 'gold',
    isLocked: true
  },
  {
    id: 's4',
    label: 'Seal of Trust', // Phase 4
    dateAcquired: undefined,
    icon: '🏛️',
    color: 'red',
    isLocked: true
  },
  {
    id: 's5',
    label: 'Seal of Ecclesia', // Phase 5
    dateAcquired: undefined,
    icon: '⛪',
    color: 'gold',
    isLocked: true
  },
  {
    id: 's6',
    label: 'Seal of Legacy', // Phase 6
    dateAcquired: undefined,
    icon: '👑',
    color: 'gold',
    isLocked: true
  }
];

export const USER_CERTIFICATES: Certificate[] = [
  {
    id: 'cert-001',
    title: 'Certificate of Membership',
    type: 'Membership',
    issueDate: '15 NOV 2023',
    serialNumber: 'PWC-MEM-8821-001',
    verificationHash: '0x7f49b1a2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8',
    issuerSignature: 'Victoria Rothschild',
    recipientName: 'Alexander Sterling',
    description: 'Official acknowledgement of induction into the Private Wealth Club as a sovereign member.',
    status: 'active'
  },
  {
    id: 'cert-002',
    title: 'Declaration of Status',
    type: 'Ecclesiastical',
    issueDate: '12 DEC 2023',
    serialNumber: 'PWC-LAW-9921-X4',
    verificationHash: '0x8e12d3c4b5a6978123456789abcdef0123456789',
    issuerSignature: 'House of Rama',
    recipientName: 'Alexander Sterling',
    description: 'Formal recognition of standing as a private national outside of territorial jurisdiction.',
    status: 'active'
  },
  {
    id: 'cert-003',
    title: 'Trustee Appointment',
    type: 'Trust',
    issueDate: '15 JAN 2024',
    serialNumber: 'PWC-TRT-5541-B2',
    verificationHash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b',
    issuerSignature: 'Board of Regents',
    recipientName: 'Alexander Sterling',
    description: 'Confirmed appointment as First Trustee of the House of Sterling Private Ministry.',
    status: 'active'
  }
];

export const UPLINE_USER: UserProfile = {
  id: 'u0',
  name: 'Victoria Rothschild',
  rank: UserRank.CHAIRMAN,
  joinDate: '2022-05-20',
  totalEarnings: 2500000,
  volume: 5000000,
  avatarUrl: 'https://picsum.photos/200/200?random=2',
  uplineId: null
};

// Recursive structure for the tree view
export const NETWORK_TREE: NetworkNode = {
  id: 'u1',
  name: 'Alexander Sterling',
  rank: UserRank.DIRECTOR,
  volume: 150000,
  recruits: 12,
  avatarUrl: 'https://picsum.photos/200/200?random=1',
  children: [
    {
      id: 'u2',
      name: 'James Carter',
      rank: UserRank.ASSOCIATE,
      volume: 25000,
      recruits: 3,
      avatarUrl: 'https://picsum.photos/200/200?random=3',
      children: [
         { id: 'u5', name: 'Sarah Jenks', rank: UserRank.MEMBER, volume: 5000, recruits: 0, avatarUrl: 'https://picsum.photos/200/200?random=6' },
         { id: 'u6', name: 'Mike Ross', rank: UserRank.MEMBER, volume: 4000, recruits: 0, avatarUrl: 'https://picsum.photos/200/200?random=7' },
      ]
    },
    {
      id: 'u3',
      name: 'Elena Fisher',
      rank: UserRank.ASSOCIATE,
      volume: 32000,
      recruits: 4,
      avatarUrl: 'https://picsum.photos/200/200?random=4',
      children: [
        { id: 'u7', name: 'Tom Holland', rank: UserRank.MEMBER, volume: 2000, recruits: 0, avatarUrl: 'https://picsum.photos/200/200?random=8' },
        { id: 'u8', name: 'Jessica Pearson', rank: UserRank.MEMBER, volume: 2500, recruits: 0, avatarUrl: 'https://picsum.photos/200/200?random=9' }
      ]
    },
    {
      id: 'u4',
      name: 'Marcus Thorne',
      rank: UserRank.MEMBER,
      volume: 8000,
      recruits: 1,
      avatarUrl: 'https://picsum.photos/200/200?random=5',
      children: [
          { id: 'u9', name: 'Harvey S.', rank: UserRank.MEMBER, volume: 1000, recruits: 0, avatarUrl: 'https://picsum.photos/200/200?random=15' }
      ]
    }
  ]
};

export const COURSES: CourseModule[] = [
  // --- PHASE 1: LIABILITY RELEASE (L.A.W. PROTOCOLS) ---
  {
    id: 'phase1-mod1',
    title: 'Status Correction Protocol',
    category: 'L.A.W.',
    description: 'The AIR components — declaring WHO you are. This module establishes your political status, your standing, and your governing capacity. These are the forms that literally "break the presumption" that you are a public U.S. person.',
    duration: '4h 30m',
    thumbnail: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600',
    locked: false,
    forms: [
        { title: 'Declaration of Status', definition: 'A sworn affidavit placed on the public record.', purpose: 'Declares you are Private / Non-citizen National / Man or Woman under God. It rebuts the presumption of corporate citizenship.' },
        { title: 'Declaration of Political Status', definition: 'A formal notice of political allegiance.', purpose: 'Separates you from federal jurisdiction & restores your political identity to your state of the Union.' },
        { title: 'Declaration of Proper Name', definition: 'A correction of the orthography of your name.', purpose: 'Re-establishes your name on the land and soil jurisdiction (Upper Lower Case) and corrects the ALL CAPS entity problem.' },
        { title: 'Durable Power of Attorney', definition: 'A legal instrument granting authority.', purpose: 'You reclaim power over the NAME. You become its executor, taking control from the State.' },
        { title: 'Declaration & Disclaim of Surety', definition: 'A denial of liability for the debt of another.', purpose: 'CRUCIAL: Removes you as the surety for the corporate entity (the STRAWMAN). You are no longer liable for its debts.' },
        { title: 'Rescission of Signatures', definition: 'A revocation of past consent.', purpose: 'Used to cancel any presumed adhesion contracts (DMV, Voter Reg) that bound you to the public.' },
        { title: 'Notice of General Executor', definition: 'Appointment of the highest authority.', purpose: 'This is the "I control the ESTATE" document. Appointing yourself as executor = sovereign administration.' },
        { title: 'Oath / Testimony Under God', definition: 'A spiritual claim of right.', purpose: 'This is the spiritual jurisdiction. Your word becomes your bond under Ecclesiastical Law.' },
        { title: 'Non-Taxpayer Affidavit', definition: 'Status determination regarding Title 26.', purpose: 'Removes presumed taxpayer status by declaring you do not engage in taxable excise activities.' }
    ],
    lessons: [
        {
            title: 'Who The System Thinks You Are',
            duration: '45:00',
            videoUrl: 'https://www.youtube.com/embed/-PakWT5qTwk?si=1', // Placeholder
            topics: [
                'The ALL CAPS Name',
                'The corporate fiction',
                'How "subjects" are created',
                'Why status is everything in commerce',
                'Scriptural foundation: Hosea 4:6'
            ]
        },
        {
            title: 'Separation from Public Liability',
            duration: '55:20',
            videoUrl: 'https://www.youtube.com/embed/placeholder2',
            topics: [
                'Suretyship explained',
                'Executor vs trustee roles',
                'Why the NAME was placed into public trust',
                'Legal history of persona ficta'
            ]
        },
        {
            title: 'Reclaiming the Estate',
            duration: '1:10:00',
            videoUrl: 'https://www.youtube.com/embed/placeholder3',
            topics: [
                'Why the Executor position matters',
                'Biblical foundation: "You are the head and not the tail"',
                'Estate = inheritance = dominion'
            ]
        }
    ]
  },
  {
    id: 'phase1-mod2',
    title: 'Identity & Nationality Pack',
    category: 'L.A.W.',
    description: 'The LAND components — anchoring WHOSE you are. This module restores your connection to the land, bloodline, heritage, and ecclesiastical position.',
    duration: '3h 45m',
    thumbnail: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=600',
    locked: false,
    forms: [
        { title: 'Live Life Claim', definition: 'Proof of Life affidavit.', purpose: 'Your declaration of being a living, breathing man/woman on the land, not lost at sea.' },
        { title: 'Patent of Nativity', definition: 'An ancient witness of birth.', purpose: 'A method for witnessing one’s birth under God, bypassing the State birth certificate.' },
        { title: 'Family Bible Record', definition: 'Common Law birth record.', purpose: 'The highest form of evidence for birth and lineage in a court of law. Predates state certificates.' },
        { title: 'Medical Notice', definition: 'Notice of private rights.', purpose: 'For jurisdictional & policy protections regarding your body and health freedom.' },
        { title: 'Will & Testament', definition: 'Testamentary intent.', purpose: 'Begins the private trust line and succession. Dictates where your property goes, not the State.' },
        { title: 'Baptismal Certificate', definition: 'Ecclesiastical Record.', purpose: 'Establishes Spiritual identity over commercial identity. The Church record stands higher than the State.' }
    ],
    lessons: [
        {
            title: 'Identity Is Jurisdiction',
            duration: '40:00',
            videoUrl: 'https://www.youtube.com/embed/placeholder4',
            topics: [
                'Land vs Air vs Water',
                'Why nationality = standing',
                'Biblical foundation: God formed man from the dust (Land)',
                'God gives inheritance through bloodline not citizenship'
            ]
        },
        {
            title: 'The Hidden Power of Ecclesiastical Identity',
            duration: '1:05:00',
            videoUrl: 'https://www.youtube.com/embed/placeholder5',
            topics: [
                'Church + bloodline + private law',
                'Why ministries operate outside IRS corporate jurisdiction',
                'The original biblical authority structure'
            ]
        },
        {
            title: 'Rebuilding Your House in Order',
            duration: '50:00',
            videoUrl: 'https://www.youtube.com/embed/placeholder6',
            topics: [
                'Why wealth follows identity',
                'Nation-building through trust and family records'
            ]
        }
    ]
  },
  {
    id: 'phase1-mod3',
    title: 'Affidavit of Foreign Status',
    category: 'L.A.W.',
    description: 'The WATER components — removing yourself from U.S. corporate jurisdiction. This module teaches why the U.S. system classifies people as "U.S. PERSONS" and how you exit that presumption.',
    duration: '5h 15m',
    thumbnail: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=600',
    locked: false,
    forms: [
        { title: 'W-8BEN', definition: 'Certificate of Foreign Status.', purpose: 'Declares foreign status to the IRS (non-taxpayer, non-U.S. person). Used to open banks as a foreign national.' },
        { title: 'FORM 56 / 56F', definition: 'Notice of Fiduciary Relationship.', purpose: 'Appoints YOU as trustee/executor of the all-caps NAME — removing the State from that position.' },
        { title: 'FORM 4029', definition: 'Application for Exemption.', purpose: 'Religious exemption from Social Security and Medicare taxes based on conscientious objection.' },
        { title: 'FORM 4361', definition: 'Ministerial Exemption.', purpose: 'Exemption for ministers & religious workers from self-employment tax. Aligns with Rama Ministries.' },
        { title: 'FORM SS-4', definition: 'Application for EIN.', purpose: 'Used to obtain an Employer Identification Number for your Trust, Ministry, or Estate for banking.' }
    ],
    lessons: [
        {
            title: 'Understanding Water Jurisdiction (Commerce)',
            duration: '1:15:00',
            videoUrl: 'https://www.youtube.com/embed/placeholder7',
            topics: [
                'Maritime law basics',
                'Why all U.S. citizens are treated as commercial vessels',
                'Why corporations need consent to govern you'
            ]
        },
        {
            title: 'How to Become a Foreign National',
            duration: '55:00',
            videoUrl: 'https://www.youtube.com/embed/placeholder8',
            topics: [
                'Not foreign to America — foreign to U.S. INC',
                'Returning to the land-jurisdiction nation (your bloodline)'
            ]
        },
        {
            title: 'Reclaiming Your Treasury Position',
            duration: '1:20:00',
            videoUrl: 'https://www.youtube.com/embed/placeholder9',
            topics: [
                'Treasury routing explained',
                'Your estate account',
                'Why all debts are settled but not discharged',
                'Biblical foundation: Jubilee & Redemption'
            ]
        }
    ]
  },

  // --- PHASE 2: Funding (Existing) ---
  {
    id: 'c5',
    title: 'What is the Federal Reserve?',
    description: 'Money Animation & Breakdown: How money, banks, and the Fed actually operate. Linked to the 0-100k strategy.',
    duration: '3h 15m',
    category: 'Money',
    thumbnail: 'https://images.unsplash.com/photo-1565514020176-892265b8b1a8?auto=format&fit=crop&q=80&w=600',
    locked: false,
    lessons: [
        { title: 'The Creature from Jekyll Island', topics: ['History of the Fed'], videoUrl: 'https://www.youtube.com/embed/-PakWT5qTwk?si=1' }
    ]
  },
  {
    id: 'c6',
    title: '0 to $100k in 30 Days',
    description: 'The practical execution: Structuring offers, leveraging credit, trust, and creating your first serious capital run.',
    duration: '4h 45m',
    category: 'Money',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600',
    locked: true,
  },

  // --- PHASE 4: Asset Protection (Existing) ---
  {
    id: 'c8',
    title: 'Asset Protection Module',
    description: 'Let’s get your trust set up. Family, ministry, business, holding types. Which fits you?',
    duration: '5h 00m',
    category: 'Asset Protection',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600',
    locked: true,
  },
  {
    id: 'c9',
    title: 'Banking on Your Trust',
    description: 'How to bank on your trust: Using the trust in commerce, positioning for funding, pledges, and capital.',
    duration: '3h 30m',
    category: 'Asset Protection',
    thumbnail: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=600',
    locked: true,
  },

  // --- PHASE 6: Corporate (Existing) ---
  {
    id: 'c10',
    title: 'Corporate Development Roadmap',
    description: 'Structuring your LLC/Corp under Trust or Ministry. Positioning to move from 0 to a structured entity for funding.',
    duration: '4h 15m',
    category: 'Corporate',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600',
    locked: false,
  },
];

export const TEAM_MEMBERS = [
    {
        name: "Victoria Rothschild",
        role: "Chairman & Founder",
        bio: "A visionary in asset protection and private equity, guiding members to reclaim their sovereignty.",
        image: "https://picsum.photos/200/200?random=2"
    },
    {
        name: "Marcus Thorne",
        role: "Head of Corporate Credit",
        bio: "Expert in funding strategies, helping members secure over $50M in combined business credit.",
        image: "https://picsum.photos/200/200?random=5"
    },
    {
        name: "Elena Fisher",
        role: "Trust Architect",
        bio: "Specializing in 98-21 structures and estate planning for generational wealth transfer.",
        image: "https://picsum.photos/200/200?random=4"
    }
];

export const COMPENSATION_PLAN: any[] = [
  { rank: 'P 100', gv: '6', subscribers: '6', weekly: '$45', monthly: '$180' },
  { rank: 'P 500', gv: '12', subscribers: '12', weekly: '$168', monthly: '$672' },
  { rank: 'P 1000', gv: '24', subscribers: '24', weekly: '$330', monthly: '$1,320' },
  { rank: 'P 2000', gv: '48', subscribers: '48', weekly: '$660', monthly: '$2,640' },
  { rank: 'P 5000', gv: '96', subscribers: '96', weekly: '$1,500', monthly: '$6,000' },
  { rank: 'EXECUTIVE', gv: '192', subscribers: '192', weekly: '$5,000', monthly: '$20,000' },
  { rank: 'DIRECTOR', gv: '360', subscribers: '360', weekly: '$10,000', monthly: '$40,000' },
  { rank: 'CHAIRMAN', gv: '720', subscribers: '720', weekly: '$25,000', monthly: '$100,000' },
  { rank: 'CEO', gv: '1,440', subscribers: '1,440', weekly: '$50,000', monthly: '$200,000' },
];

export const ASCENSION_PATH: AscensionPhase[] = [
  {
    id: 1,
    title: "Liability Release",
    subtitle: "Status Correction & Identity",
    description: "The foundational separation from public liability into private sovereignty using L.A.W. protocols (Land • Air • Water).",
    sealName: "Seal of Release",
    status: "completed",
    modules: ["Status Correction Protocol", "Identity & Nationality Pack", "Affidavit of Foreign Status"]
  },
  {
    id: 2,
    title: "Funding Power",
    subtitle: "Corporate Credit & Capital",
    description: "Accessing the Vault of Capital. Establishing business entities, building a PAYDEX score, and securing your first $100k.",
    sealName: "Seal of Access",
    status: "completed",
    modules: ["0 to $100k in 30 Days", "Corporate Development Roadmap", "The 30-Day Credit Play"]
  },
  {
    id: 3,
    title: "Mortgage Redemption",
    subtitle: "Equity & Discharge",
    description: "The art of discharging public debt obligations and redeeming the equity in your home and property through private administrative process.",
    sealName: "Seal of Redemption",
    status: "active",
    modules: ["Administrative Process 101", "Mortgage Note Rescission", "Equity Redemption Flow"]
  },
  {
    id: 4,
    title: "Trust Architecture",
    subtitle: "Asset Protection & Governance",
    description: "Constructing the Fortress. Moving assets into Private Irrevocable Trusts (98-21) to remove ownership while retaining control.",
    sealName: "Seal of Trust",
    status: "locked",
    modules: ["Declaration of Trust", "Board of Trustees Governance", "Banking on Your Trust"]
  },
  {
    id: 5,
    title: "Ecclesiastical Standing",
    subtitle: "Spiritual Jurisdiction",
    description: "Operating under the highest form of law. Establishing your Ministry and operating purely in the private domain.",
    sealName: "Seal of Ecclesia",
    status: "locked",
    modules: ["508(c)(1)(a) Formation", "Ecclesiastical Court Structure", "Divine Claim of Right"]
  },
  {
    id: 6,
    title: "Generational Legacy",
    subtitle: "Dynastic Wealth",
    description: "The final ascension. Syndicating trusts, acquiring bonds, and establishing a multi-generational family office system.",
    sealName: "Seal of Legacy",
    status: "locked",
    modules: ["Family Office Structure", "Bond Acquisition", "Legacy Wealth Mathematics"]
  }
];