export type ProjectCategory = "Web Development" | "Java Development" | "Other Projects";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshot?: string;
  accent: "blue" | "purple" | "cyan";
  overview: string;
  objectives: string[];
  contributions: string[];
};

export const projects: Project[] = [
  {
    slug: "sporthub",
    title: "SportHub",
    category: "Web Development",
    description:
      "A sports web application with frontend components, category navigation, search functionality, and API error handling.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://sport-hub.vercel.app/",
    screenshot: "/sporthub.jpg",
    accent: "blue",
    overview:
      "SportHub is a sports-focused web application that presents sports content through a responsive and approachable interface.",
    objectives: [
      "Create clear sports category navigation.",
      "Build responsive frontend interfaces.",
      "Present API-driven content with helpful error states.",
    ],
    contributions: [
      "Contributed to reusable frontend components.",
      "Implemented sports category navigation and search functionality.",
      "Helped handle API errors and loading experiences.",
    ],
  },
  {
    slug: "java-space-shooter",
    title: "Java Space Shooter",
    category: "Java Development",
    description:
      "A 2D Space Shooter game focused on game logic, player and enemy interactions, and game asset integration.",
    technologies: ["Java", "Object-Oriented Programming", "2D Game Development"],
    accent: "purple",
    overview:
      "A desktop 2D game developed with Java, emphasizing object-oriented design and classic arcade gameplay.",
    objectives: [
      "Build an interactive game loop.",
      "Model players, enemies, and projectiles as game objects.",
      "Integrate visual assets into the gameplay experience.",
    ],
    contributions: [
      "Implemented game logic and player interactions.",
      "Worked with object-oriented classes and 2D assets.",
      "Structured gameplay states and event handling.",
    ],
  },
  {
    slug: "phum-yeung",
    title: "Phum Yeung Website",
    category: "Web Development",
    screenshot: "/phum-yeung.png",
    liveUrl: "https://sethaomg007-ctrl.github.io/superfinal/",
    description:
      "A frontend project focused on layout, styling, and interface development to improve usability and visual presentation.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    accent: "cyan",
    overview:
      "Phum Yeung is a web interface project created to practice structured layout, polished styling, and responsive presentation.",
    objectives: [
      "Create a clear and usable page structure.",
      "Apply consistent responsive styling.",
      "Improve the presentation of content and interface elements.",
    ],
    contributions: [
      "Built frontend layouts and interface sections.",
      "Applied styling and responsive behavior.",
      "Improved visual hierarchy and usability.",
    ],
  },
];

