/* Central content for the Fixed Tutor site — edit copy, tutors and prices here. */

export type Tutor = {
  id: string;
  name: string;
  college: string;
  exp: string;
  boards: string[];
  levels: string[];
  focus: string[];
  bio: string;
};

/* ===== EDIT THESE ===== */
export const CONFIG = {
  demoPrice: 10,
  originalPrice: 30,
  slotsLeft: 8,
  holdMinutes: 10,
  // Replace with your real links; buttons stay disabled while they contain REPLACE_ME.
  stripeLink: "https://buy.stripe.com/REPLACE_ME",
  calendlyLink: "https://calendly.com/REPLACE_ME/demo",
  email: "hello@fixedtutor.com",
};

export const isPlaceholder = (url: string) => url.includes("REPLACE_ME");

export const TUTORS: Tutor[] = [
  {
    id: "t1",
    name: "Aarav Mehta",
    college: "IIT Bombay, B.Tech",
    exp: "9 years",
    boards: ["Edexcel", "AQA", "OCR", "IB"],
    levels: ["AS", "A2", "IB"],
    focus: ["Pure", "Mechanics"],
    bio: "Breaks calculus and mechanics into patterns you can reuse in the exam.",
  },
];

export const TESTIMONIALS = [
  {
    text: "My son used to dread maths. His tutor stays on until he gets it, and nobody counts the extra minutes.",
    who: "Parent, Frankfurt",
  },
  {
    text: "We knew the cost of the whole chapter before we started. No surprises, and late-night doubts were answered the same evening.",
    who: "Parent, Dublin",
  },
  {
    text: "After years of changing tutors, having one person for all of A Level has been such a relief.",
    who: "Parent, Amsterdam",
  },
];

export const CHAPTERS = [
  { n: "Algebra & functions, coordinate geometry", lv: "AS", price: 55 },
  { n: "Trigonometry, differentiation, integration (AS)", lv: "AS", price: 65 },
  { n: "Statistics: sampling, probability, distributions", lv: "AS", price: 50 },
  { n: "Mechanics: kinematics, forces, Newton’s laws", lv: "AS", price: 55 },
  { n: "Sequences, binomial, further calculus", lv: "A2", price: 70 },
  { n: "Differential equations, parametric, vectors", lv: "A2", price: 70 },
  { n: "Hypothesis testing, normal distribution", lv: "A2", price: 60 },
  { n: "Moments, projectiles, variable acceleration", lv: "A2", price: 60 },
];

export const BOARDS = ["Edexcel", "AQA", "OCR", "IB"] as const;

export const LEVELS = ["AS Maths", "A2 Maths (A Level)", "IB Maths"] as const;

export const IB_COURSES = [
  "Analysis & Approaches (AA)",
  "Applications & Interpretation (AI)",
  "Not sure yet",
] as const;

export const IB_LEVELS = ["Standard Level (SL)", "Higher Level (HL)", "Not sure yet"] as const;

export const HELP: Record<string, string> = {
  pay: "Totally understandable. The masterclass is the only thing you pay before meeting your tutor, and it is a small one-time launch price. If you would like to talk to us first, message us and we will answer your questions before you pay.",
  inc: "A live one-to-one class with the tutor you choose, on a real topic from your child’s syllabus. Your child sees the teaching style, and you meet the tutor before committing to anything else.",
  cap: "Each chapter has a maximum price. Extra sessions, extra lesson time and doubts inside that chapter do not add to the bill, so there are no surprises.",
  tut: "You choose your tutor after the masterclass and keep them until the final exam, so the masterclass is the right time to check the fit.",
  sec: "Payment is taken on Stripe’s secure checkout page. We never see or store your card details.",
  hum: "Happy to help personally. Reach us here:",
};

export const TOPICS: Array<[string, string]> = [
  ["I don’t want to pay upfront", "pay"],
  ["What do I get in the masterclass?", "inc"],
  ["What is capped pricing?", "cap"],
  ["Can I change my tutor later?", "tut"],
  ["Is payment secure?", "sec"],
  ["Talk to a person", "hum"],
];

export const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");
