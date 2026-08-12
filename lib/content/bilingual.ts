export type BilingualText = {
  en: string;
  mi: string;
};

export const hero = {
  title: {
    en: "Innovation in Diagnostics and Surveillance.",
    mi: "He Aronga Hou kei ngā Tātaritanga me te Tūtei.",
  },
  subtitle: {
    en: "An independent service providing consultative global-to-local expertise in biosecurity, molecular diagnostics and innovation.",
    mi: "He ratonga tūhake e whakarato ana i te mākohakoha ā-ao, ā-takiwā i te haumaru koiora, ngā tātaritanga rāpoi ngota me te aronga hou.",
  },
  cta: {
    en: "Who are we?",
    mi: "Ko wai mātou?",
  },
} satisfies Record<string, BilingualText>;

export const about = {
  title: {
    en: "About us.",
    mi: "Mō mātou",
  },
  body: {
    en: "Established in March 2026, Kākano Biosciences is an international team of subject matter experts that supports and enhances scientific communication and innovation across biosecurity, molecular diagnostics, and surveillance.",
    mi: "I whakatūria i Māehe 2026. He rōpū ā-ao a Kākano Biosciences o ngā mātanga tautōhito i ngā marau maha e tautoko ana me te whakarei i ngā whakawhitiwhiti kōrero me ngā aronga hou, taha pūtaiao, mō te rāngai haumaru koiora, ngā tātaritanga rāpoi ngota, me te tūtei.",
  },
  bodySecondary: {
    en: "We provide independent, cutting-edge biotech know-how for every audience.",
    mi: "Ko tā mātou, he whakarato mākohakoha hangarau koiora tino hou rawa me te tūhake ki tēnā kiritaki, ki tēnā kiritaki.",
  },
  imageCaption: {
    en: "View of Rangitoto and Hauraki Gulf from Pigeon Mountain, Half Moon Bay",
    mi: "He tirohanga o Rangitoto me Tīkapa Moana atu i Ōhuiarangi, Te Wai o Tāiki.",
  },
} satisfies Record<string, BilingualText>;

export const team = {
  eyebrow: {
    en: "Who are we",
    mi: "Ko wai mātou",
  },
} satisfies Record<string, BilingualText>;

export type AdvisoryMember = {
  name: string;
  role: string;
  image: string;
  location?: string;
  bio: string[];
  /** Short capability tags, rendered as chips in the card footer. */
  focusAreas: string[];
};

export const advisoryBoard: AdvisoryMember[] = [
  {
    name: "Mark Jones",
    role: "Founder & Managing Director, Azora Biosciences",
    image: "/team/mark-jones.jpg",
    bio: [
      "Mark Jones is a molecular biologist, founder, and Managing Director of Azora Biosciences. He founded Azora in 2020 to challenge the limitations of generic, off-the-shelf laboratory kits and build a more collaborative model for high-throughput genomics laboratories.",
      "Today, Azora supplies leading genomics organisations around the world and has subsidiaries in the US and Australia. Under Mark's leadership, the company develops customized genomics reagents and workflows for plant, animal, livestock, and microbial genomics customers, helping laboratories improve performance, reproducibility, efficiency, and sustainability through fit-for-purpose bioscience solutions.",
    ],
    focusAreas: [
      "Molecular Biology",
      "Genomics Reagents",
      "High-Throughput Workflows",
      "Livestock & Plant Genomics",
    ],
  },
  {
    name: "Nick Hoskins",
    role: "Viticulture & Plant Health Specialist",
    image: "/team/nick-hoskins.jpg",
    location: "Masterton",
    bio: [
      "Nick Hoskins is an experienced viticulture specialist with over four decades of expertise across vineyard systems, plant health, genetics and nursery production in New Zealand's wine industry. His work spans early vineyard establishment, national grapevine improvement initiatives, and leadership of major research programmes focused on virus elimination and vineyard ecosystems.",
      "Nick holds senior advisory roles within the Riversun group and provides strategic input across plant production and biosecurity. He currently serves as Chair of the Viticulture Nursery Association and Board Chair of New Zealand Plant Producers Incorporated.",
      "He also contributes to ag-tech innovation as New Zealand Business Development Manager for BioScout, supporting the application of real-time biological monitoring technologies. Based in Masterton, Nick brings deep practical knowledge and science-led insight to biosecurity, diagnostics, and sustainable plant systems.",
    ],
    focusAreas: [
      "Viticulture",
      "Plant Health",
      "Biosecurity",
      "Nursery Production",
    ],
  },
  {
    name: "Bill Dyck",
    role: "Science & Technology Broker, Forest Biosecurity & Environmental Sciences",
    image: "/team/bill-dyck.jpg",
    bio: [
      "Bill is a science & technology broker specializing in forest biosecurity and environmental sciences. Previously a General Manager in Carter Holt Harvey Forests and before that a forest site productivity scientist and science manager, he has worked with industry, government agencies and science organisations for more than 40 years.",
      "Bill is very interested in biosecurity surveillance and diagnostics and believes the future is more advanced technologies at the border and inside the border for early detection of insect pests and pathogens. He is particularly excited about the opportunities to apply eDNA technology for early detection of unwanted organisms.",
    ],
    focusAreas: [
      "Forest Biosecurity",
      "Environmental Sciences",
      "Surveillance & Diagnostics",
      "eDNA Technology",
    ],
  },
];

/** Placeholder slots shown while further advisory appointments are confirmed. */
export const advisoryBoardPendingCount = 2;

export type Project = {
  title: string;
  detail?: string;
  timeframe?: string;
  funder?: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title:
      "Improving environmental nucleic acid (eNA) detection validation within a more integrated surveillance framework",
    timeframe: "2026–28",
    funder: "Covered Cropping NZ",
  },
  {
    title: "Subject matter expert",
    detail: "Senior consultant for legal group.",
    timeframe: "Began 9 April 2026",
  },
  {
    title: "Subject matter expert",
    detail: "Senior consultant for corporate entity.",
    timeframe: "Began 2 June 2026",
  },
  {
    title:
      "Drafting of annual Taxonomic Proposals for the International Committee on Taxonomy of Viruses",
    link: { label: "ictv.global", href: "https://ictv.global/" },
  },
];
