export interface TimelineMilestone {
  id: string;
  period: string;
  role: string;
  hotel: string;
  group?: string;
  location: string;
  isCurrent?: boolean;
  isMilestone?: boolean;
  responsibilities: string[];
}

export const careerTimeline: TimelineMilestone[] = [
  {
    id: "quartier",
    period: "From 21 October 2025 to Present",
    role: "Executive Chef",
    hotel: "The Quartier Hotel Bangkok",
    location: "Bangkok, Thailand",
    isCurrent: true,
    responsibilities: [
      "Top culinary leader overseeing all multi-outlet kitchen operations, staff scheduling, budget allocation, and culinary innovation.",
      "Strategic focus on quality control, culinary vision, food cost management, and financial performance.",
      "Directs workflows from raw ingredient sourcing to final luxury plate execution.",
      "Maintains non-negotiable HACCP hygiene and fosters an inspired, disciplined kitchen culture."
    ]
  },
  {
    id: "amari",
    period: "April 1 to 20 October 2025",
    role: "Chef De Cuisine",
    hotel: "Amari Watergate Bangkok",
    group: "ONYX Hospitality Group",
    location: "Bangkok, Thailand",
    responsibilities: [
      "Spearheaded Indian Cuisine and Grand Banquet operations delivering authentic flavor profiles and 5-star presentation.",
      "Conducted daily briefings, team mentorship, and innovative menu development.",
      "Supervised direct food purchasing, inventory controls, and strict hygiene protocols.",
      "Enhanced guest satisfaction with customized dietary adjustments and iconic new creations."
    ]
  },
  {
    id: "maiora",
    period: "December 2024 to February 2025",
    role: "Indian Chef / Head Chef",
    hotel: "Maiora Restaurant",
    group: "NH Collection Dubai The Palm",
    location: "Dubai, United Arab Emirates",
    responsibilities: [
      "Managed day-to-day specialized culinary operations in a premier Palm Jumeirah luxury resort.",
      "Substantial mastery in clay-oven tandoor, delicate curries, and Southern Indian regional specialties.",
      "Controlled budgets, minimized food waste, managed stock procurement, and trained staff for maximum productivity."
    ]
  },
  {
    id: "lebua",
    period: "December 2014 to February 2024 (10 Years)",
    role: "Outlet Chef (10 Years of Distinction)",
    hotel: "Lebua Hotels & Resorts Bangkok",
    location: "State Tower, Silom Bangrak, Bangkok",
    isMilestone: true,
    responsibilities: [
      "A decade of culinary leadership at Asia's premier luxury landmark tower, orchestrating high-end outlet and grand banquet operations.",
      "Mastered tandoor and curry preparations, authentic plating styles, and ambient dining experiences.",
      "Supervised kitchen staff, controlled portion sizes, minimized waste, and managed VIP guest feedback directly."
    ]
  },
  {
    id: "hyatt-cdp",
    period: "October 2011 to November 2014",
    role: "Chef De Partie (Indian & Continental)",
    hotel: "Hyatt Regency Delhi",
    location: "New Delhi, India",
    responsibilities: [
      "Led Indian and Continental sections in banquet and coffee shop operations.",
      "Trained junior colleagues and apprentices, leading by positive example.",
      "Maintained strict hygiene standards specified by hotel and municipal guidelines."
    ]
  },
  {
    id: "hyatt-early",
    period: "October 2005 to September 2011",
    role: "Demi Chef De Partie & Commis (1st & 2nd)",
    hotel: "Hyatt Regency Delhi",
    location: "New Delhi, India",
    responsibilities: [
      "Banquet kitchen execution across grand ballrooms and large-scale outdoor luxury caterings.",
      "Specialized in Indian Curry and Tandoor sections, mastering bulk production and high-pressure execution.",
      "Awarded Hystar Gold and Diamond honors for standout performance."
    ]
  },
  {
    id: "indus-evergreen",
    period: "2002 to 2005",
    role: "Indian Curry Chef / Chef De Partie",
    hotel: "Indus Valley (Kyrgyzstan) & Evergreen (Noida)",
    location: "Bishkek, Kyrgyz Republic & Noida, India",
    responsibilities: [
      "Introduced traditional North Indian curry and tandoor heritage to international diners in Central Asia (2004–2006).",
      "Three foundational years of rigorous curry mastery with Evergreen Restaurant (Balaji Associates, Noida)."
    ]
  }
];
