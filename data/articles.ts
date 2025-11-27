export interface Article {
  id: number;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "The Future of Web Development",
    category: "Web development",
    title: "The Future of Web",
    description: "Exploring emerging trends and technologies that will shape web development in the coming year.",
    date: "January 15, 2025",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "E-Commerce Platform Article",
    category: "Full-Stack",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and modern architecture.",
    date: "January 15, 2025",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Modern Development Practices",
    category: "Full-Stack",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and scalable design.",
    date: "January 15, 2025",
  },
];

