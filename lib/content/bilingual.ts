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

export type ProjectCategory =
  | "Community"
  | "Consultancy"
  | "Global Science"
  | "Innovation";

export type Project = {
  category: ProjectCategory;
  /** Nature of the work, shown as a label above the title. */
  kind?: string;
  title: string;
  detail?: string;
  timeframe?: string;
  /** Rendered as "Funded by ...". */
  funder?: string;
  /** Partner or commissioning body, rendered plain. */
  organisation?: string;
  points?: string[];
  links?: { label: string; href: string }[];
};

/** Display order for the category groupings. */
export const projectCategories: ProjectCategory[] = [
  "Innovation",
  "Global Science",
  "Consultancy",
  "Community",
];

export const projects: Project[] = [
  {
    category: "Innovation",
    kind: "Research Project",
    title:
      "Improving environmental nucleic acid (eNA) detection validation within a more integrated surveillance framework",
    timeframe: "2026–28",
    funder: "Covered Cropping NZ",
  },
  {
    category: "Innovation",
    kind: "Publication",
    title:
      "Development and Validation of a Passive Surveillance System for Early Detection of Pepino Mosaic Virus in Commercial Greenhouse Facilities",
    points: [
      "Optimised passive sampling method.",
      "Developed a test to differentiate between intact and denatured (non-viable) virus particles during PCR testing.",
      "Initiated molecular survey of ubiquitous microorganisms in covered crop systems.",
    ],
  },
  {
    category: "Innovation",
    kind: "Publication",
    title:
      "An Integrated Nucleic Acid Sequence-Based Amplification (NASBA) and CRISPR-Cas13a-Based Platform for Accurate and Sensitive Detection of Cucumber Mosaic Virus",
    points: [
      "Coupled nucleic acid sequence-based amplification (NASBA) with clustered regularly interspaced short palindromic repeats (CRISPR)-Cas13a to selectively amplify and detect a crop pathogen.",
      "Optimised method for lyophilisation and long-term storage for point-of-use settings.",
    ],
  },
  {
    category: "Global Science",
    kind: "Taxonomy",
    title:
      "Drafting of annual Taxonomic Proposals for the International Committee on Taxonomy of Viruses",
    links: [{ label: "ictv.global", href: "https://ictv.global/" }],
  },
  {
    category: "Global Science",
    kind: "Peer-Review",
    title: "Journal editorial appointments",
    points: [
      "Section Editor — Frontiers in Virology",
      "Review Editor — Frontiers in Microbiology",
      "Editor — PhytoFrontiers",
      "Editor — Viruses",
    ],
  },
  {
    category: "Consultancy",
    kind: "Expert Scientific Adviser",
    title:
      "Independent review of the virus management program of investments and future research and development directions",
    organisation: "Grains Research & Development Corporation (Australia)",
    timeframe: "Jun–Aug 2026",
  },
  {
    category: "Consultancy",
    kind: "Expert Scientific Adviser",
    title: "Adviser to an Australian legal company",
    timeframe: "Started Apr 2026, ongoing",
  },
  {
    category: "Community",
    kind: "Senior Judge",
    title: "Senior Judge at ScienceFair",
    timeframe: "28 August 2026",
    links: [{ label: "scifair.org.nz", href: "https://www.scifair.org.nz/" }],
  },
];
