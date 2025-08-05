import React from "react";
//Logo Icon
import LogoIcon from "@/assets/logo.svg";
//Utils
import { cn } from "@/lib/utils";

//Props Interface
interface LogoProps {
  onlyIconOnMobile?: boolean;
  size?: string;
}

//Logo Content
const NicoDevLogo = ({onlyIconOnMobile, size} : LogoProps) => {
  return (
    <div className="flex items-center gap-2 ">
      {/* NicoDev Icon */}
      <LogoIcon className={cn(
        "md:h-[1.15rem] w-auto fill-primary dark:fill-primary-dark",
        onlyIconOnMobile && size ? `h-[${size}]` : "h-4")}
      />
      {/* NicoDev Text */}
      <h1 className={cn(
        "font-lexend font-extrabold text-base md:text-[1.1rem] tracking-[0.03em] leading-none",
        onlyIconOnMobile && "hidden md:block")}
      >
        Nico<span className="text-primary dark:text-primary-dark">Dev</span>
      </h1>
    </div>
  );
};

export default NicoDevLogo;
