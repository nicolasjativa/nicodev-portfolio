import { CompanyKey } from "./companyLogos";
import { TechKey } from "./techIcons";

export interface MetadataContent {
  title: string;
  description: string;
}

export const MetadataContent: MetadataContent = {
  title: "NicoDev | Full Stack Developer Portfolio",
  description:
    "Explore the work, experience, and top projects of Nicolás Játiva — a passionate Full Stack Developer from Ecuador. Clean, modern, and crafted to showcase his skills in web development.",
};

//Navigation Interface
export interface NavItem {
  href: string;
  label: string;
  icon?: string;
}

//Navigation Content
export const NavContent: NavItem[] = [
  {
    href: "#home",
    label: "Home",
    icon: "fi fi-br-house-chimney-blank",
  },
  {
    href: "#experience",
    label: "Experience",
    icon: "fi fi-br-briefcase",
  },
  {
    href: "#education",
    label: "Education",
    icon: "fi fi-br-graduation-cap",
  },
  {
    href: "#projects",
    label: "Projects",
    icon: "fi fi-br-square-terminal",
  },
  {
    href: "#stack",
    label: "Stack",
    icon: "fi fi-br-microchip",
  },
  {
    href: "#contact",
    label: "Contact me",
    icon: "fi fi-br-comment-alt",
  },
];

//Sections Keys
type SectionKeys = "experience" | "education" | "projects" | "stack" | "about";

//Section Text Interface
export interface SectionTextProps {
  title: string;
  description: string;
}

//Section Text Content
export const SectionsTextContent: Record<SectionKeys, SectionTextProps> = {
  experience: {
    title: "How Did I End Up Here?",
    description:
      "It all started with WordPress, Elementor, and a pandemic. One project led to another, and before I knew it, I was deep into code—learning, building, and turning ideas into real things.",
  },
  education: {
    title: "Where did I learn all of these?",
    description:
      "I was mostly formated by self-taught—with the help of online courses, countless projects, and a fair share of headaches. Real learning happened by building, breaking, and building again.. Oh—and coffee. Lots of coffee.",
  },
  projects: {
    title: "Things I’ve Built (and Broken First)",
    description:
      "Here’s a mix of everything—from learning and hobby projects to the top-tier work that took serious time and effort. Each one helped me grow and push my skills further.",
  },
  stack: {
    title: "Tech That Feels Like Home",
    description:
      "I love using tools that give me the confidence to build fast, fluid, and reliable apps. These are the technologies I trust most—but I’m always up for learning something new.",
  },
  about: {
    title: "Behind the Build",
    description:
      "Crafted with passion using Next.js 15, Typescript & Tailwind CSS, this portfolio brings together smooth UI, dark mode, animated modals, and more. Want to see how it all comes together? Dive into the GitHub repo or explore the Figma design.",
  },
};

export interface ExperienceCardProps {
  company: string;
  icon: CompanyKey;
  position: string;
  period: string;
  description: string;
  variant: "dark" | "light" | "color";
}

export const ExperienceContent: ExperienceCardProps[] = [
  {
    company: "Loop Ecuador Online Supermarket",
    icon: "loop",
    position: "Creative & Data Specialist",
    period: "Feb 2020 - Jan 2021",
    description:
      "It all kicked off with Loop, one of the first online supermarkets in the country, built using WordPress and Elementor. It came together during the pandemic, when the need for online stores was huge. I was in charge of managing and structuring the product catalog—an experience that sparked my interest in web development and ultimately set everything in motion.",
    variant: "dark",
  },
  {
    company: "Cava Drinks",
    icon: "cava",
    position: "Web Designer & Developer",
    period: "Jan 2021 - Sep 2021",
    description:
      "After Loop, I joined the development of Cava Ecuador, an online store focused on selling liquors and beverages. Built with WordPress and Elementor, I was responsible for creating and structuring the entire site—pages, products, and content—ensuring everything looked sharp and worked smoothly. It was a clean, well-scoped project that helped me sharpen my execution and attention to detail.",
    variant: "dark",
  },
  {
    company: "Patio Smart Ecuador",
    icon: "patiosmart",
    position: "Web Designer & Developer",
    period: "Oct 2021 - Jan 2023",
    description:
      "With some courses and real-world experience behind me, I built an online marketplace for used cars—Patio Smart Ecuador also in WordPress. The goal was to create a strong, competitive alternative to existing local platforms.",
    variant: "dark",
  },
  {
    company: "Self Learning & Formation",
    icon: "autonomous",
    position: "Autonomous Developer",
    period: "Sep 2021 - Dec 2022",
    description:
      "Web development quickly became more than just a job, it became a passion. I committed to learning everything I could, from frontend to backend, using online resources and self-built projects to grow my skillset and start using code instead of just WordPress.",
    variant: "dark",
  },
  {
    company: "Many Cars Ecuador",
    icon: "manycars",
    position: "Full-Stack Developer",
    period: "March 2023 - Now",
    description:
      "Patio Smart evolved into Many Cars, an ambitious rebrand with a future-focused vision. I rebuilt the entire platform from the ground up  using Next.js, MongoDB, and other modern technologies. It was a complex challenge that pushed my full stack skills to the next level. Currently maintaining the platform and developing a mobile app to extend its reach and functionality.",
    variant: "color",
  },
  {
    company: "Freelance Web Developer",
    icon: "freelance",
    position: "Autonomous Developer",
    period: "Jun 2025 - Now",
    description:
      "While looking for a full-time remote position, I also work with clients on freelance projects. I design and develop modern, fast, SEO-friendly websites using tools like Next.js, Tailwind CSS, TypeScript and WordPress. I care about clean code, great UX, and helping businesses go online with confidence and style.",
    variant: "light",
  },

];

export interface EducationCardsProps {
  title: string;
  image: string;
  imageAlt: string;
  ariaLabel: string;
  btn: string;
  variant: "light" | "color";
}

export const EducationCardsContent: EducationCardsProps[] = [
  {
    title: "Peek Into My Learning Journey",
    image: "/education-card-illustration-01.png",
    imageAlt: "Education Card Illustration",
    ariaLabel: "Open Education Modal",
    btn: "I'm courious",
    variant: "light",
  },
  {
    title: "Cool Stuff I've Made",
    image: "/education-card-illustration-02.png",
    imageAlt: "Projects Card Illustration",
    ariaLabel: "Scroll to Projects Section",
    btn: "Show me",
    variant: "color",
  },
];

export interface ProjectCardsProps {
  title: string;
  description: string;
  variant: "main" | "regular";
  stack: TechKey[];
  cover: string;
  cover2?: string;
  coverAlt: string;
  coverAlt2?: string;
  projectState: string;
  stateBadgeColor: string;
  siteLink: string;
}

export const MainProjectCardContent: ProjectCardsProps = {
  title: "Many Cars Ecuador",
  description: "A Full Stack Marketplace for Used and New Cars in Ecuador",
  variant: "main",
  stack: ["nextjs", "mongodb", "nodejs", "bootstrap"],
  cover: "/projects-covers/ssac.png",
  cover2: "/projects-covers/manycars-single-car-ss.png",
  coverAlt: "Many Cars Homepage Screenshot",
  coverAlt2: "Many Cars Carousel Screenshot",
  projectState: "Production Ready • Pre-Launch",
  stateBadgeColor: "bg-green-400",
  siteLink: "https://manycars.vercel.app",
};

export const OtherProjectsCardsContent: ProjectCardsProps[] = [
  {
    title: "Framed Dreams Ecuador",
    description: "Fully Functional E-Commerce Site for Art Prints and Posters",
    variant: "regular",
    stack: ["wordpress", "elementor"],
    cover: "/projects-covers/framed-dreams-ss.png",
    coverAlt: "Framed Dreams Homepage Screenshot",
    projectState: "In Production",
    stateBadgeColor: "bg-green-400",
  siteLink: "https://framedreams.com",
},
  {
    title: "Personal Portfolio Practice",
    description: "A Modern Portfolio to practice new Technologies",
    variant: "regular",
    stack: ["nextjs", "typescript", "tailwind"],
    cover: "/projects-covers/personal-portfolio-ss.png",
    coverAlt: "Personal Portfolio Homepage Screenshot",
    projectState: "Practice Project",
    stateBadgeColor: "bg-blue-500",
  siteLink: "https://nj-aceternity-portfolio.vercel.app/",
},
];

export const FavStackIcons: TechKey[] = [
  "nextjs",
  "react",
  "mongodb",
  "nodejs",
  "tailwind",
];

export const OtherStackIcons: TechKey[] = [
  "wordpress",
  "elementor",
  "express",
  "typescript",
  "mysql",
  "postgresql",
  "sass",
  "bootstrap",
  "vue",
];

export interface ContactCardProps {
  title: string;
  description: string;
  btn1: string;
  separator: string;
  socials: TechKey[];
}

export const ContactCardContent: ContactCardProps = {
  title: "Let’s Work Together",
  description:
    "Remote-friendly, globally available, and always open to something cool. Projects, partnerships, or potential roles, let’s talk! I work comfortably in Spanish, English, and German.",
  btn1: "Open Contact Form",
  separator: "or use my socials",
  socials: ["github", "linkedin"],
};

export type Skills =
  | "HTML"
  | "CSS"
  | "JS"
  | "Git"
  | "Bootstrap"
  | "API's"
  | "React"
  | "Databases"
  | "Express"
  | "Node"
  | "React"
  | "Typescript"
  | "Hooks"
  | "State"
  | "Next.js"
  | "MERN"
  | "PERN"
  | "React Query"
  | "Onpage SEO"
  | "Offpage SEO"
  | "Technical SEO"
  | "Keywords Research"
  | "Negative SEO"
  | "Brands Basics"
  | "Videos"
  | "Emails"
  | "Social Networks"
  | "ChatGPT"
  | "Content Creation"
  | "MySQL"
  | "SASS"
  | "Workflows"
  | "PHP"
  | "Fetch (AJAX)";

export interface EducationModalContent {
  title: string;
  description: string;
  courses: {
    variant?: string;
    provider: string;
    course: string;
    time: string;
    updated?: string;
    skills: Skills[];
    description: string;
    certificateLink: string;
    courseLink: string;
  }[];
}

export const EducationModalContent: EducationModalContent = {
  title: "Courses & Certificates",
  description: "I’ve taken several courses to strengthen my development skills and expand my tech stack. These programs gave me the knowledge I needed to confidently tackle more ambitious projects and grow as a developer.",
  courses: [
    {
      provider: "Udemy",
      course: "Complete Full-Stack Web Development Bootcamp",
      time: "62 Hours",
      updated: "(Updated May 2025)",
      skills: [
        "HTML",
        "CSS",
        "JS",
        "Git",
        "Bootstrap",
        "API's",
        "React",
        "Databases",
        "Express",
        "Node",
      ],
      description:
        "A complete full stack course that mixes theory with hands-on projects. Covered both frontend and backend using modern technologies to build real, working apps.",
        certificateLink: "/certificates/Full-Stack-Course-UC-088c7bfa-b7e8-4728-b3be-e5f9d7d6dfe8.pdf",
        courseLink: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    },
    {
      provider: "Udemy",
      course: "Complete Web Development Course in Spanish",
      time: "82.5 Hours",
      updated: "(Updated May 2025)",
      skills: [
        "HTML",
        "SASS",
        "JS",
        "MySQL",
        "API's",
        "Fetch (AJAX)",
        "Databases",
        "Workflows",
        "PHP",
      ],
      description:
        "A beginner-friendly full stack course in Spanish covering HTML, CSS, JS, PHP, MySQL, and more. Learn by building real projects with user auth, payments, and your own mini framework.",
        certificateLink: "/certificates/Full-Stack-Spanish-Course-UC-cbd5b95e-393f-42f7-a38d-99f7adbda165.pdf",
        courseLink: "https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/",
    },
    {
      provider: "Udemy",
      course: "React & TypeScript Complete Guide +10 Projects",
      time: "58 Hours",
      updated: "(Updated May 2025)",
      skills: [
        "React",
        "Typescript",
        "Hooks",
        "State",
        "Next.js",
        "MERN",
        "PERN",
        "React Query",
      ],
      description:
        "A deep dive into building modern React apps from scratch—learning components, state management, hooks, and TypeScript to create clean, scalable UIs.",
        certificateLink: "/certificates/React-Typescript-Course-UC-d9bd969a-b722-48ca-8712-b3279cada069.pdf",
        courseLink: "https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/",
    },
    {
      provider: "Udemy",
      course: "The Ultimate SEO Training 2025 + SEO for Wordpress",
      time: "14 Hours",
      updated: "(Updated May 2025)",
      skills: [
        "Onpage SEO",
        "Offpage SEO",
        "Technical SEO",
        "Keywords Research",
        "Negative SEO",
      ],
      description:
        "Learned how search engines work and how to optimize websites for higher rankings—covering on-page SEO, keyword research, and WordPress-specific techniques.",
        certificateLink: "/certificates/SEO-Course-Certificate-UC-98715ecf-08c5-470a-b249-177fd1b0af1d.pdf",
        courseLink: "https://www.udemy.com/course/ultimate-seo-training-course/",
    },
    {
      provider: "Udemy",
      course: "Complete Course for Digital Marketing + ChatGPT Marketing",
      time: "34 Hours",
      updated: "(Updated May 2025)",
      skills: [
        "Brands Basics",
        "Videos",
        "Emails",
        "Social Networks",
        "ChatGPT",
        "Content Creation",
      ],
      description:
        "Covered essential strategies to grow an online presence through digital marketing—email, SEO, social media, and how to leverage AI tools like ChatGPT to boost results.",
        certificateLink: "/certificates/Mkt-Course-UC-27519bde-176b-4eec-844b-3bef7bbc84bc.pdf",
        courseLink: "https://www.udemy.com/course/curso-de-marketing-digital/",
    },
  ],
};

export interface ContactModalProps {
  title: string;
  description: string;
  btn: string;
}

export const ContactModalContent: ContactModalProps = {
  title: "Contact me",
  description:
    "Let’s connect! Drop your info in the form and I’ll reply as soon as I can.",
  btn: "Let’s get in touch",
};

export interface ProjectModalContent {
  img: string;
  logo: string;
  title: string;
  time: string;
  btn: string;
  btnLink: string;
  aboutTitle: string;
  aboutDesc: string;
  frontendTitle: string;
  frontendTech: TechKey[];
  backendTitle: string;
  backendTech: TechKey[];
  featuresTitle: string;
  features: {
    icon: string;
    desc: string;
  }[];
  challengesTitle: string;
  challengesDesc: string;
}

export const ProjectModalContent: ProjectModalContent = {
  img: "",
  logo: "",
  title: "Many Cars Ecuador",
  time: "300+ Hours Work",
  btn: "Visit Demo Site",
  btnLink: "https://manycars.vercel.app",
  aboutTitle: "About this Project",
  aboutDesc:
    "A full-stack web app for buying and selling new or used vehicles in Ecuador. Designed for both dealerships and private sellers, it offers easy inventory management and a modern, user-friendly interface for buyers—complete with advanced filters and sleek car detail pages that highlight every listing.",
  frontendTitle: "Frontend",
  frontendTech: ["react", "nextjs", "bootstrap", "sass"],
  backendTitle: "Backend",
  backendTech: ["nodejs", "mongodb"],
  featuresTitle: "Key Features",
  features: [
    {
      icon: "fi fi-br-filter",
      desc: "Dynamic vehicle and dealers navigation, filtering and search",
    },
    {
      icon: "fi fi-br-pen-nib",
      desc: "Pixel perfect Responsive and modern design for desktop/tablet/mobile",
    },
    {
      icon: "fi fi-br-dashboard-panel",
      desc: "Admin Dashboard to manage App Content, Accounts and more",
    },
    {
      icon: "fi fi-br-users",
      desc: "Different Account and User Types with customized Options",
    },
    {
      icon: "fi fi-br-bolt",
      desc: "Optimized for performance and SEO using Next.js SSR",
    },
  ],
  challengesTitle: "Challenges & Learnings",
  challengesDesc:
    "Building this platform pushed me to master full-stack patterns and user experience design. I learned how to manage complex state, handle image storage, and structure an app for scalability.",
};
