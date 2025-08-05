//Logos
import CavaLogo from "@/assets/cava_logo.svg";
import PatioSmartLogo from "@/assets/patio-smart-logo.svg";
import LoopLogo from "@/assets/loop_logo.svg";
import ManyCarsLogo from "@/assets/manycars_icon.svg";
import AutonomousDevLogo from "@/assets/lesson.svg";
import FreelanceLogo from "@/assets/development.svg";

import { ComponentType } from "react";

//Company Keys
export type CompanyKey =
  | "cava"
  | "loop"
  | "patiosmart"
  | "manycars"
  | "freelance"
  | "autonomous";

//Interface
export interface CompanyLogo {
  label: string;
  icon: ComponentType<{ className?: string }>;
}

//Content
export const companyLogos: Record<CompanyKey, CompanyLogo> = {
  cava: { label: "Cava", icon: CavaLogo },
  patiosmart: { label: "Patio Smart", icon: PatioSmartLogo },
  loop: { label: "Loop", icon: LoopLogo },
  manycars: { label: "Many Cars", icon: ManyCarsLogo },
  freelance: { label: "Freelance Web Developer", icon: FreelanceLogo },
  autonomous: { label: "Autonomous Developer", icon: AutonomousDevLogo },
};
