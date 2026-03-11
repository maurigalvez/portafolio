export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  company: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "instagram";
}

export const siteConfig = {
  name: "Mauricio Galvez",
  title: "Senior Software Engineer",
  bio: "With 10+ years of experience designing and building games and interactive systems, I specialize in multiplayer networking, client-server architectures, AWS cloud integration, and performance optimization. I've contributed to multiple commercially shipped titles across PC, PlayStation, VR, and Mobile platforms, while also mentoring teams and fostering technical excellence.",
  bio2: "Passionate about solving complex challenges, I thrive at the intersection of scalable systems, real-time gameplay, and team leadership\u2014bringing both technical depth and collaborative spirit to every project.",
  email: "mauri.galvez91@gmail.com",
  profileImage: "/profile.jpg",
};

export const techStack = [
  "Unity",
  "C#",
  "AWS",
  "TypeScript",
  "React",
  "Next.js",
  "Flutter",
  "Firebase",
  "Multiplayer",
  "VR",
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/maurigalvez/", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/magalvez/", icon: "linkedin" },
  { name: "Instagram", url: "https://www.instagram.com/maurimgalvez/", icon: "instagram" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "Vegas Infinite",
    description:
      "Leading production of new slot games targeting Android, iOS, Quest, and Steam. Built server and client slot systems and implemented third-party slot integration.",
    techStack: ["Unity", "C#", "JavaScript", "AWS", "Photon PUN", "Photon Server"],
    image: "/vegasinfinite.jpg",
    liveUrl: "https://www.vegasinfinite.com/",
    company: "Lucky Logic",
  },
  {
    title: "Mech League: Boxing",
    description:
      "A VR game where you pilot a robot suit and battle other fighters. Developed player mechanics, fighter AI, and VR UI interaction.",
    techStack: ["Unity", "C#", "VR", "AI"],
    image: "/mechleague_boxing.jpg",
    liveUrl: "https://store.steampowered.com/app/609010/Mech_League_Boxing/",
    company: "Gamepill / VRGEN",
  },
  {
    title: "Mech League: Hunting",
    description:
      "A couch co-op FPS with VR support. Implemented multiple weapon types, enemy AI including bosses, and cross-platform input.",
    techStack: ["Unity", "C#", "VR", "Multiplayer"],
    image: "/mechleague_hunting.jpg",
    liveUrl: "https://store.steampowered.com/app/806230/Mech_League_Hunting/",
    company: "Gamepill / VRGEN",
  },
  {
    title: "Mech League: Smash Ball",
    description:
      "Led development as lead developer, managing tasks and implementing core game mechanics, UI, and Photon Bolt multiplayer networking.",
    techStack: ["Unity", "C#", "Photon Bolt", "Multiplayer"],
    image: "/mechleague_smashball.jpg",
    liveUrl: "https://store.steampowered.com/app/905360/Smash_Ball/",
    company: "Gamepill / VRGEN",
  },
  {
    title: "Mayan Stacker",
    description:
      "A stacking game inspired by Mayan ruins across Central America. Players learn about real archeological sites while enjoying the gameplay.",
    techStack: ["Unity", "C#", "Android"],
    image: "/MayanStacker.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.TorogozGames.MayanStacker&pcampaignid=web_share",
    company: "Personal Project",
  },
  {
    title: "TorogozLingua",
    description:
      "A language learning app supporting 20+ languages with vocabulary building from podcasts and image scanning features.",
    techStack: ["Flutter", "Dart", "Android"],
    image: "/Torogoz_Lingua.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.torogozgames.language_learning_app&hl=en_CA",
    company: "Personal Project",
  },
];
