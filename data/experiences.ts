export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Tech Company",
    period: "2023 - Present",
    description: "Developed and maintained multiple client projects using React and Node.js.",
    responsibilities: [
      "Built full-stack applications for enterprise clients",
      "Led code reviews and mentored junior developers",
      "Optimized application performance by 40%",
      "Implemented CI/CD pipelines",
      "Collaborated with design teams on UI/UX improvements",
      "Built 5+ web applications for enterprise clients",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Digital Company",
    period: "2022 - 2023",
    description: "Developed and maintained multiple client projects using React and Node.js.",
    responsibilities: [
      "Built full-stack applications for enterprise clients",
      "Led code reviews and mentored junior developers",
      "Optimized application performance by 40%",
      "Implemented CI/CD pipelines",
      "Collaborated with design teams on UI/UX improvements",
      "Built 5+ web applications for enterprise clients",
    ],
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    company: "Tech Solutions",
    period: "2021 - 2022",
    description: "Developed and maintained multiple client projects using React and Node.js.",
    responsibilities: [
      "Built full-stack applications for enterprise clients",
      "Led code reviews and mentored junior developers",
      "Optimized application performance by 40%",
      "Implemented CI/CD pipelines",
      "Collaborated with design teams on UI/UX improvements",
      "Built 5+ web applications for enterprise clients",
    ],
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    company: "Start-up Inc",
    period: "2020 - 2021",
    description: "Developed and maintained multiple client projects using React and Node.js.",
    responsibilities: [
      "Built full-stack applications for enterprise clients",
      "Led code reviews and mentored junior developers",
      "Optimized application performance by 40%",
      "Implemented CI/CD pipelines",
      "Collaborated with design teams on UI/UX improvements",
      "Built 5+ web applications for enterprise clients",
    ],
  },
];
