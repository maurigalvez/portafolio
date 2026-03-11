export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "instagram";
}

export const siteConfig = {
  name: "John Doe",
  title: "Software Engineer",
  bio: "Passionate software engineer with experience building modern web and mobile applications. I love turning ideas into elegant, performant solutions that make a difference.",
  email: "john@example.com",
  profileImage: "/profile.jpg",
};

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Unity",
  "Flutter",
  "Firebase",
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and an admin dashboard.",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with drag-and-drop boards, real-time updates, and team workspaces.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Fitness Tracker",
    description:
      "A cross-platform mobile app for tracking workouts, nutrition, and health metrics with data visualization.",
    techStack: ["Flutter", "Dart", "Firebase", "Charts"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];
