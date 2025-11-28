export interface Project {
  id: number;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  highlights?: string[];
  demoUrl?: string;
  githubUrl?: string;
  year?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "E-Commerce Platform Dashboard",
    category: "Full-Stack",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    fullDescription: "A comprehensive e-commerce platform built with modern technologies. This project showcases full-stack development capabilities with a robust backend API, scalable database architecture, and an intuitive user interface.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    highlights: [
      "Implemented payment processing with Stripe integration",
      "Built responsive user interface for seamless shopping experience",
      "Created admin dashboard for inventory management",
      "Developed RESTful APIs for product and order management",
      "Integrated real-time notifications for order updates",
    ],
    year: "2023",
    role: "Full-Stack Developer",
    demoUrl: "https://insightedge-one.vercel.app/",
    githubUrl: "https://github.com/muodilo/insightedge.git",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Design System Components",
    category: "Full-Stack",
    title: "Design System Components",
    description: "Comprehensive UI component library with design tokens, documentation, and interactive examples.",
    fullDescription: "A reusable component library designed to streamline development across projects. This design system includes comprehensive documentation, interactive examples, and consistent styling across all components.",
    technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    highlights: [
      "Built 50+ reusable UI components",
      "Created comprehensive documentation with Storybook",
      "Implemented design tokens for consistent branding",
      "Developed interactive examples for each component",
      "Established CSS-in-JS architecture for scalability",
    ],
    year: "2023",
    role: "Frontend Developer",
    demoUrl: "https://github.com/muodilo/movie-app",
    githubUrl: "https://movie-app-coral-sigma.vercel.app/",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Analytics Dashboard",
    category: "Full-Stack",
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with interactive charts, reports, and customizable widgets.",
    fullDescription: "A powerful analytics dashboard that provides real-time insights into business metrics. Features interactive visualizations, customizable reports, and data export capabilities.",
    technologies: ["React", "Next.js", "Chart.js", "PostgreSQL", "Node.js"],
    highlights: [
      "Implemented real-time data visualization with Chart.js",
      "Built customizable dashboard widgets",
      "Created comprehensive reporting system",
      "Developed data filtering and export functionality",
      "Optimized performance for large datasets",
    ],
    year: "2023",
    role: "Full-Stack Developer",
    demoUrl: "https://github.com/muodilo/audiophile",
    githubUrl: "https://audiophile-eosin-chi.vercel.app/",
  },
];

