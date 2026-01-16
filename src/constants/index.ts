import { CompanyKey } from "./companyLogos";
import { TechKey } from "./techIcons";

export interface MetadataContent {
  title: string;
  description: string;
}

export const MetadataContent: MetadataContent = {
  title: "NicoDev | Full Stack Developer (React, Next.js, Node.js)",
  description:
    "Full Stack Developer with 5+ years of experience building scalable, high-performance web applications. Specialized in React, Next.js, and modern web architectures. Based in Ecuador, open to remote opportunities worldwide.",
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
    href: "#summary",
    label: "Summary",
    icon: " fi fi-br-leaf",
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
type SectionKeys = "summary" | "experience" | "education" | "projects" | "stack" | "about";

//Section Text Interface
export interface SectionTextProps {
  title: string;
  description: string;
}

//Section Text Content
export const SectionsTextContent: Record<SectionKeys, SectionTextProps> = {
  summary: {
    title: "A Bit About Me",
    description:
      `I’m a Full Stack Developer with 5+ years of experience building real-world web products—from early ideas to production-ready platforms.

I focus on creating scalable, high-performance applications with clean architecture, thoughtful UX, and strong attention to detail. My work spans modern frontend development, backend APIs, authentication flows, SEO-focused architectures, and e-commerce systems.

Here’s how that journey unfolded.`,
  },
  experience: {
    title: "Work & Experience",
    description:
      "I’ve worked on real-world digital products, helping take ideas from early concepts to production-ready applications, with a strong focus on scalable interfaces, data-driven features, and solutions that support real business needs.",
  },
  education: {
    title: "Where Did I Learn All This?",
    description:
      "I’m largely self-taught, supported by structured online courses, hands-on projects, and a lot of trial and error. Most of my real learning happened by building real products, solving real problems, and iterating continuously. And yes—coffee definitely helped.",
  },
  projects: {
    title: "Things I’ve Built (and Broken Along the Way)",
    description:
      "A selection of projects ranging from learning experiments to production-ready applications that required real planning, iteration, and problem-solving. Each one pushed my skills forward and shaped how I build today.",
  },
  stack: {
    title: "Tech That Feels Like Home",
    description:
      "I work best with tools that help me build fast, reliable, and scalable applications. These are the technologies I trust most today—while always staying curious and open to learning what’s next.",
  },
  about: {
    title: "Behind the Build",
    description:
      "Built with Next.js 15, TypeScript, and Tailwind CSS, this portfolio focuses on performance, clean architecture, and thoughtful UI details—dark mode, smooth animations, and interactive modals included. Curious about how everything fits together? Explore the codebase or take a look at the design process.",
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
    company: "Many Cars Ecuador",
    icon: "manycars",
    position: "Full-Stack Developer",
    period: "Oct 2021 - Now",
    description:
      `I designed and developed a full-stack marketplace platform for vehicle listings, taking the product from early concept to a production-ready system used in real-world conditions.

The platform was rebuilt using Next.js, Node.js, and MongoDB, with a strong focus on scalability, performance, and SEO. I built a reusable, component-driven frontend with dynamic filtering, infinite scroll, and server-side rendering for high-traffic pages.

On the backend, I implemented secure authentication, role-based access control, and subscription-based listing workflows with automated payments. I also developed internal admin tools and integrated Cloudinary, automated emails, encrypted data handling, and bulk upload utilities. I continue to maintain and evolve the platform, improving performance, UX, and reliability.`,
    variant: "color",
  },
  {
    company: "Framed Dreams EC",
    icon: "freelance",
    position: "Full-Stack Developer",
    period: "Freelance - Jun 2025",
    description:
      `An end-to-end e-commerce build, taking the product from initial setup to a production-ready online store. The focus was on delivering a fast, responsive experience with a clean purchasing flow and solid technical foundations.

The work included payment integration, automated transactional emails, scalable media handling with Cloudinary, and SEO-driven optimizations to improve performance and organic visibility in a real commercial environment.`,
    variant: "light",
  },
  {
    company: "Cava Drinks",
    icon: "cava",
    position: "Full Stack Developer",
    period: "Jan 2021 - Sep 2021",
    description:
      `After Loop, I worked on the development of Cava Drinks, an online store focused on selling liquors and beverages. 
      
      I was responsible for designing and structuring the entire platform—from page layouts and product presentation to content organization—ensuring a smooth, responsive, and visually consistent experience across devices. 
      
      It was a well-defined project that strengthened my execution skills, attention to detail, and ability to deliver polished digital products ready for production.`,
    variant: "dark",
  },
  {
    company: "Loop Online Supermarket",
    icon: "loop",
    position: "Junior Web Developer",
    period: "Feb 2020 - Jan 2021",
    description: `Contributed to the launch of an early-stage online grocery platform during a period of rapid demand growth.

I worked on structuring and managing a large product catalog (700+ items), including variants, pricing, and media assets, while improving visual consistency and product presentation. 

This experience helped establish scalable content workflows and supported the platform’s initial production launch and early operations.
`,
    variant: "dark",
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
    title: "Explore My Learning Path",
    image: "/education-card-illustration-01.png",
    imageAlt: "Education Card Illustration",
    ariaLabel: "Open Education Modal",
    btn: "View Courses",
    variant: "light",
  },
  {
    title: "Projects I’ve Built",
    image: "/education-card-illustration-02.png",
    imageAlt: "Projects Card Illustration",
    ariaLabel: "Scroll to Projects Section",
    btn: "View Projects",
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
  "express",
  "typescript",
  "wordpress",
  "elementor",
  "mysql",
  //"postgresql",
  "sass",
  "bootstrap",
  //"vue",
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
     `Open to remote opportunities, collaborations, and meaningful projects. Whether it’s a product to build, a partnership to explore, or a role within a strong team, I’m always happy to connect.

I work comfortably in Spanish, English, and German. `,
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
  description: "I’ve completed a curated set of courses to strengthen my development fundamentals and expand my technical toolkit. Combined with hands-on projects, these programs helped me confidently take on more complex, production-level challenges.",
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
        "Comprehensive full-stack program combining theory with hands-on projects. Covered modern frontend and backend development, focusing on building real, production-ready web applications end to end.",
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
        "Beginner-to-intermediate full-stack course covering HTML, CSS, JavaScript, PHP, and MySQL. Emphasis on learning by building real projects, including authentication, payments, and custom backend logic.",
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
        "In-depth course focused on building modern React applications with TypeScript. Covered component architecture, hooks, state management, and scalable UI patterns through multiple real-world projects.",
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
        "Practical SEO training covering how search engines work, on-page optimization, keyword research, and SEO strategies specifically applied to WordPress-based websites.",
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
        "Overview of digital marketing fundamentals, including email marketing, social media, SEO, and content strategy, with a practical focus on using AI tools like ChatGPT to support marketing workflows.",
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
  time: "300+ Hours of Work",
  btn: "Visit Demo Site",
  btnLink: "https://manycars.vercel.app",
  aboutTitle: "About this Project",
  aboutDesc:
    "A full-stack web application for buying and selling new and used vehicles in Ecuador. Built for both dealerships and private sellers, it provides intuitive inventory management tools and a modern, user-friendly experience for buyers—featuring advanced filtering and detailed vehicle pages designed to highlight every listing.",
  frontendTitle: "Frontend",
  frontendTech: ["nextjs", "react", "sass", "bootstrap"],
  backendTitle: "Backend",
  backendTech: ["nodejs", "mongodb"],
  featuresTitle: "Key Features",
  features: [
    {
      icon: "fi fi-br-filter",
      desc: "Dynamic vehicle and dealer navigation, filtering, and search",
    },
    {
      icon: "fi fi-br-pen-nib",
      desc: "Pixel-perfect, responsive, modern design across desktop, tablet, and mobile",
    },
    {
      icon: "fi fi-br-dashboard-panel",
      desc: "Admin dashboard for managing app content, users, and listings",
    },
    {
      icon: "fi fi-br-users",
      desc: "Multiple account and user types with customized permissions",
    },
    {
      icon: "fi fi-br-bolt",
      desc: "Performance- and SEO-optimized using Next.js server-side rendering (SSR)",
    },
  ],
  challengesTitle: "Challenges & Learnings",
  challengesDesc:
    "Building this platform pushed me to deepen my understanding of full-stack architecture and user experience design. I gained hands-on experience managing complex state, handling large-scale image storage, and structuring an application for long-term scalability and performance.",
};
