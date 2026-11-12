/**
 * Fixed Tutors content model.
 * Keep client-approved facts here so pages stay consistent and easy to update.
 * Items not supplied or confirmed by the client are intentionally omitted.
 */
export const BRAND = {
  name: "Fixed Tutors",
  domain: "fixedtutors.com",
  tagline: "One fixed tutor. One fixed price. Until your final exam.",
  email: "fixedtutors@gmail.com",
  linkedin: "https://linkedin.com/in/arvind-suthar-372811214",
  bookingUrl: "https://cal.id/fixedtutors",
  currency: "EUR",
  currencySymbol: "€",
} as const;

export const TUTOR = {
  id: "arvind-suthar",
  name: "Arvind Suthar",
  qualification: "B.Tech + M.Tech (Dual Degree)",
  specialization: "Chemical Engineering and Hydrocarbon Engineering",
  institution: "IIT Roorkee",
  graduationYears: "2010–2015",
  experienceYears: 10,
  profile:
    "Mathematics teacher and academic leader with more than a decade of teaching experience.",
  teachingExperience: [
    { organization: "FIITJEE", role: "Mathematics faculty", period: "2015–2018" },
    {
      organization: "Apeejay Education Society",
      role: "Mathematics professor",
      period: "2018–2019",
    },
    { organization: "Vedantu", role: "Master Teacher & Head – YouTube JEE", period: "2019–2021" },
    { organization: "Unacademy", role: "Mathematics educator", period: "2021" },
    { organization: "PhysicsWallah", role: "Mathematics professor", period: "2021–2024" },
    { organization: "Oda Class", role: "Academic leadership", period: "2024–2025" },
    {
      organization: "Independent practice",
      role: "A/AS Level mathematics coaching in Europe",
      period: "Since May 2025",
    },
  ],
  highlights: [
    { value: "10+ years", label: "teaching mathematics" },
    { value: "550,000+", label: "YouTube channel subscribers gained" },
    { value: "100% NPS", label: "across multiple 500-student live batches" },
    { value: "250+", label: "academic team members led at Oda Class" },
  ],
  awards: ["Best Teacher at Vedantu", "Best Teaching Pedagogy at Vedantu"],
} as const;

export const COURSES = [
  {
    id: "cie-9709-as-p1",
    board: "Cambridge International (CIE)",
    code: "9709",
    level: "AS Level",
    subject: "Pure Mathematics 1",
    label: "Cambridge CIE 9709 · AS Level Pure Mathematics 1",
  },
  {
    id: "edexcel-as",
    board: "Pearson Edexcel",
    code: "",
    level: "AS Level",
    subject: "Mathematics",
    label: "Edexcel · AS Level Mathematics",
  },
  {
    id: "edexcel-a",
    board: "Pearson Edexcel",
    code: "",
    level: "A Level",
    subject: "Mathematics",
    label: "Edexcel · A Level Mathematics",
  },
] as const;

export const TOPICS = [
  "Quadratics",
  "Functions",
  "Coordinate Geometry",
  "Circular Measure",
  "Trigonometry",
  "Series",
  "Differentiation",
  "Further Differentiation",
  "Integration",
] as const;

export const TEACHING_APPROACH = [
  { title: "Build the concept", description: "Start with the why behind each method." },
  {
    title: "Practise exam questions",
    description: "Apply ideas to questions in the relevant exam style.",
  },
  {
    title: "Mix and retrieve",
    description: "Use mixed exercises and active recall to strengthen memory.",
  },
  {
    title: "Revise efficiently",
    description: "Use fast revision solutions to revisit key methods.",
  },
] as const;

export const OFFER = {
  chapterPricing: "A fixed price is agreed for each chapter before you begin. No hourly billing.",
  doubtSupport: "Unlimited doubt solving is included alongside chapter teaching.",
  masterclassMinutes: 45,
  masterclassPrice: 10,
  masterclassCredit: "The €10 masterclass fee is credited toward your first chapter.",
  masterclassIncludes: [
    "A level check",
    "A live mini-lesson",
    "A personal study plan with exact chapter prices",
    "A recording and notes",
  ],
} as const;

export const FORMAT = {
  delivery: "Live online",
  lessonMinutes: 90,
  groupOptions: ["1:1", "Small groups"],
  recorded: true,
  timeZones: ["CET / CEST", "UK time"],
  availability: ["Evenings", "Weekends", "Weekend batch"],
} as const;

export const WAITLIST = {
  courses: ["Cambridge IGCSE Mathematics", "Other boards"],
  emailSubject: "Fixed Tutors waitlist — IGCSE and other boards",
} as const;

export const CONTACT_EMAIL = BRAND.email;

export const HELP: Record<string, string> = {
  booking: `Choose an available time and complete payment through our Cal.id page. The €${OFFER.masterclassPrice} fee is credited toward your first chapter.`,
  masterclass: `The ${OFFER.masterclassMinutes}-minute 1:1 masterclass costs €${OFFER.masterclassPrice}. It includes a level check, live mini-lesson, personal plan with chapter prices, recording and notes. The fee is credited toward your first chapter.`,
  pricing:
    "Each chapter has one fixed price, shared with you before you begin. The price is not based on the number of hours. Get in touch for a plan based on your level and topics.",
  tutor: `${TUTOR.name} is your fixed tutor, from the first chapter through your final exam.`,
  doubts: OFFER.doubtSupport,
  courses: `Current courses: ${COURSES.map((course) => course.label).join("; ")}. Cambridge IGCSE and other boards are planned for a future waitlist.`,
  hum: `Email ${BRAND.email} and we’ll be happy to help.`,
};

export const HELP_TOPICS: Array<[string, string]> = [
  ["Schedule and pay", "booking"],
  ["What’s included in the masterclass?", "masterclass"],
  ["How does chapter pricing work?", "pricing"],
  ["Who will teach me?", "tutor"],
  ["How does doubt solving work?", "doubts"],
  ["Which courses do you teach?", "courses"],
  ["Talk to a person", "hum"],
];

export const initials = (name: string) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("");
