export interface Article {
  id: number;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  fullContent?: string;
  date: string;
  author?: string;
  readTime?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Building Scalable Applications',
    category: 'Next.js',
    title: 'Building Scalable Applications with Next.js',
    subtitle:
      'A comprehensive guide to architecting applications that can handle millions of users.',
    description:
      'Building scalable applications is one of the most important challenges in modern web development.',
    fullContent:
      'Building scalable applications is one of the most important challenges in modern web development. Next.js provides excellent tools and patterns to help you create applications that can grow with your user base.\n\n## Architecture Principles\nThe foundation of scalability is good architecture. Next.js encourages separation of concerns with its file-based routing system and server/client component split. This makes it easier to organize and scale your codebase as it grows.\n\n## Database Optimization\nAs your application scales, database performance becomes critical. Consider implementing caching strategies, using read replicas, and optimizing your queries. Next.js makes it easy to implement these patterns through API routes and middleware.\n\n## Deployment Strategies\nModern deployment platforms like Vercel offer automatic scaling and edge computing capabilities. Understanding how to leverage these features is crucial for building scalable applications.',
    date: 'January 10, 2025',
    author: 'Odilo Murindahabi',
    readTime: '10 min read',
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'E-Commerce Platform Article',
    category: 'Full-Stack',
    title: 'E-Commerce Platform',
    subtitle: 'Full-stack e-commerce solution with payment integration and modern architecture.',
    description:
      'Full-stack e-commerce solution with payment integration, inventory management, and modern architecture.',
    fullContent:
      'This article describes a full-stack e-commerce solution implemented with modern tooling, covering payment integration, inventory management, and admin dashboards.',
    date: 'January 15, 2025',
    author: 'Odilo Murindahabi',
    readTime: '8 min read',
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Analytics Dashboard',
    category: 'Full-Stack',
    title: 'Analytics Dashboard',
    subtitle: 'Real-time data visualization platform with interactive charts.',
    description:
      'Real-time data visualization platform with interactive charts, reports, and customizable widgets.',
    fullContent:
      'A powerful analytics dashboard that provides real-time insights into business metrics. Features interactive visualizations, customizable reports, and data export capabilities.',
    date: 'January 15, 2025',
    author: 'Odilo Murindahabi',
    readTime: '6 min read',
  },
];

