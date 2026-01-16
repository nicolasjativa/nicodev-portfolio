import React from "react";
//Interfaces
import { ExperienceCardProps } from "@/constants";
//Utils & Content
import { cn } from "@/lib/utils";
import { companyLogos } from "@/constants/companyLogos";

const ExperienceCard = ({
  company,
  icon,
  position,
  period,
  description,
  variant,
}: ExperienceCardProps) => {

  //Extract Company Icon & Lavel
  const { icon: Icon, label } = companyLogos[icon];

  return (
    //Card Wrapper
    <div className={cn("shadow-[0px_5px_0px_0px_#000] border-[1px] border-black px-9 md:px-8 py-6 md:py-7 rounded-3xl flex",
          variant === "dark" ? "bg-slate-900 dark:bg-zinc-900"
          : variant === "light" ? "bg-white dark:bg-zinc-800"
          : variant === "color" && "bg-primary dark:bg-primary-dark"
      )}
    >
      {/* Company Logo (Tablet & Desktop) */}
      <div title={label} className={cn("hidden md:flex justify-center items-center h-10 w-10 md:h-12 md:w-12 lg:h-13 lg:w-13 rounded-full me-2.5 md:me-4 flex-shrink-0",
          variant === "light" ? "bg-black dark:bg-white"
          : variant === "color" ? "bg-white dark:bg-gray-200"
          : "bg-white"
        )}
      >
         <Icon className={cn("w-8 h-8 text-sm",
          icon === "patiosmart" && "w-7 h-7",
          (icon === "manycars" || icon === "patiosmart") && "-mt-0.5",
          (icon === "manycars" || icon === "autonomous" || icon === "freelance") && "w-6 h-6",
          variant === "light" && "fill-white dark:fill-black"
         )}/>
      </div>
      {/* Experience Content */}
      <div>
        {/* Main Content */}
        <div className="flex items-start mb-2.5 md:mb-2">
          {/* Company Logo (Mobile) */}
          <div className={cn("flex justify-center items-center md:hidden h-10 w-10 rounded-full me-2.5",
                  variant === "light" ? "bg-black dark:bg-white" : "bg-white"
          )}>
            <Icon className={cn("w-7 h-7 text-sm",
              icon === "patiosmart" && "w-6 h-6",
              (icon === "manycars" || icon === "patiosmart") && "-mt-0.5",
              (icon === "manycars" || icon === "autonomous" || icon === "freelance") && "w-5 h-5",
              variant === "light" && "fill-white dark:fill-black"
            )}/>
          </div>
          {/* Company & Position Wrapper */}
          <div className="flex flex-col text-[12px] md:text-sm lg:text-base font-bold">
            {/* Company */}
            <h4 className={variant === "light" ? "text-black dark:text-white"
                  : variant === "color" ? "text-black"
                  : "text-white"
            }>
              {company}
            </h4>
            {/* Position */}
            <h5 className={variant === "color" ? "text-white dark:text-gray-200"
                  : "text-primary dark:text-primary-dark"
            }>
              {position}
            </h5>
          </div>
          {/* Period Badge (Mobile) */}
          <div className={cn("sm:hidden font-bold text-[11px] py-0.5 px-1.5 rounded-md ms-auto",
                  variant === "dark" ? "bg-white text-black"
                  : variant === "light" ? "dark:bg-white dark:text-black"
                  : "bg-black text-white"
          )}>
            {period}
          </div>
        </div>
        {/* Description */}
        <p className={cn("font-regular whitespace-pre-line text-muted-foreground text-xs md:text-sm lg:text-[15px]",
                variant === "light" ? "text-black dark:text-white"
                : variant === "color" ? "text-black dark:text-black dark:font-medium"
                : "text-white"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
