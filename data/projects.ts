export interface Project {
  id: number;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "E-Commerce Platform Dashboard",
    category: "Full-Stack",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    technologies: ["Next.js", "Node.js"],
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Design System Components",
    category: "Full-Stack",
    title: "Design System Components",
    description: "Comprehensive UI component library with design tokens, documentation, and interactive examples.",
    technologies: ["React", "TypeScript"],
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Analytics Dashboard",
    category: "Full-Stack",
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with interactive charts, reports, and customizable widgets.",
    technologies: ["Next.js", "Node.js"],
  },
];

