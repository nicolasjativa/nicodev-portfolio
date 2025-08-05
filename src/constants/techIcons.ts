//Frontend
import ReactIcon from "@/assets/reactjs.svg";
import ElementorIcon from "@/assets/elementor.svg";
//Backend
import NodeIcon from "@/assets/nodejs.svg";
import ExpressIcon from "@/assets/express.svg";
//Frameworks
import VueIcon from "@/assets/vuejs.svg";
import WordPressIcon from "@/assets/wordpress.svg";
import NextIcon from "@/assets/nextjs.svg";
//Databases
import PostgreSQLIcon from "@/assets/postgresql.svg";
import MySQLIcon from "@/assets/mysql.svg";
import MongoDbIcon from "@/assets/mongodb.svg";
//CSS
import SassIcon from "@/assets/sass.svg";
import BootstrapIcon from "@/assets/bootstrap.svg";
import TailwindIcon from "@/assets/tailwind.svg";
//Languages
import TypescriptIcon from "@/assets/typescript.svg";
//Socials
import FiverrIcon from "@/assets/fiverr.svg";
import FreelancerIcon from "@/assets/freelancer.svg";
import GitHubIcon from "@/assets/github.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import UdemyIcon from "@/assets/udemy.svg";

import { ComponentType } from "react";

//Tech Keys
export type TechKey = 
 "react" | "elementor" | //Frontend
 "nodejs" | "express" | //Backend
 "vue" | "wordpress" | "nextjs" | //Frameworks
 "mongodb" | "postgresql" | "mysql" | //Databases
 "bootstrap" | "sass" | "tailwind" | //CSS
 "typescript" | //Languages
 "fiverr" | "freelancer" | "github" | "instagram" | "linkedin" | "udemy"; //Socials

 //Interface
export interface TechIcon {
    label: string;
    link?: string;
    icon: ComponentType<{ className?: string }>
};

//Content
export const techIcons: Record<TechKey, TechIcon> = {
    //Fronted
    react: { label: "React", icon: ReactIcon },
    elementor: { label: "Elementor", icon: ElementorIcon },
    //Backend
    nodejs: { label: "Node.Js", icon: NodeIcon },
    express: { label: "Express", icon: ExpressIcon },
    //Frameworks
    nextjs: { label: "Next.Js", icon: NextIcon },
    wordpress: { label: "WordPress", icon: WordPressIcon },
    vue: { label: "Vue.Js", icon: VueIcon },
    //Databases
    mongodb: { label: "MongoDB", icon: MongoDbIcon },
    postgresql: { label: "PostgreSQL", icon: PostgreSQLIcon },
    mysql: { label: "MySQL", icon: MySQLIcon },
    //CSS
    bootstrap: { label: "Bootstrap", icon: BootstrapIcon },
    sass: { label: "Sass", icon: SassIcon },
    tailwind: { label: "Tailwind", icon: TailwindIcon },
    //Languages
    typescript: { label: "Typescript", icon: TypescriptIcon },
    //Socials
    fiverr: { label: "Fiverr", icon: FiverrIcon },
    freelancer: { label: "Freelancer", icon: FreelancerIcon },
    github: { label: "GitHub", icon: GitHubIcon, link: "https://github.com/nicolasjativa" },
    instagram: { label: "Instagram", icon: InstagramIcon },
    linkedin: { label: "LinkedIn", icon: LinkedInIcon, link: "https://www.linkedin.com/in/nicolas-jativa-dev" },
    udemy: { label: "Udemy", icon: UdemyIcon },
}