"use client";
//React
import React, { useState } from "react";
//Next Components
import Image from "next/image";
//Modal Component
import EducationModal from "../modals/EducationModal";
//Content and Utils
import { EducationCardsProps, EducationModalContent } from "@/constants";
import { cn } from "@/lib/utils";

//Component Content
const EducationCard = ({
  title,
  image,
  imageAlt,
  ariaLabel,
  btn,
  variant,
}: EducationCardsProps) => {

  //Modal States
  const [isOpen, setIsOpen] = useState(false);

  //Render Component
  return (
    <div>
      {/* Card Content as Button */}
      <button 
        aria-label={ariaLabel}
        onClick={
         variant === "light"
          ? () => setIsOpen(true)
          : () => {
            const section = document.getElementById("projects");
            if (section) section.scrollIntoView({ behavior: "smooth" });   
            }
        }
        className={cn("shadow-[0px_5px_0px_0px_#000] flex flex-wrap  border border-black rounded-3xl px-6 md:px-7 md:py-8 lg:px-8 lg:py-9 py-7 w-full h-full",
          variant === "light"
          ? "bg-white dark:bg-zinc-900"
          : "bg-primary dark:bg-primary-dark"
        )}
      >
        {/* Card Title */}
        <h4 className={cn(
            "text-sm md:text-lg lg:text-xl xl:text-[22px] font-bold w-4/6 sm:w-3/6 lg:w-6/12 xl:w-[45%] md:leading-5 lg:leading-7 text-start",
            variant === "color" && "text-white dark:text-black"
        )}>
          {title}
        </h4>
        {/* Card Illustration */}
        <Image
          src={image}
          alt={imageAlt}
          width={180}
          height={140}
          className="ms-auto h-[75px] md:h-[90px] lg:h-[100px] xl:h-[110px] w-auto"
        />
        {/* Card Action Btn */}
        <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5 w-full -mt-6 sm:mt-0">
          {/* Btn Icon */}
          <i className={cn(variant === "light"
                ? "fi fi-br-arrow-small-right bg-primary text-black"
                : "fi fi-br-arrow-small-down bg-black text-white",
                "rounded-full text-base lg:text-lg flex items-center justify-center h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
          )}/>
          {/* Btn Label */}
          <span className={cn(
             "text-sm md:text-base lg:text-lg font-medium",
             variant === "color" && "text-white dark:text-black"
          )}>
            {btn}
          </span>
        </div>
      </button>
      {/* Education Modal */}
      <EducationModal isOpen={isOpen} setIsOpen={setIsOpen} content={EducationModalContent} />
    </div>
  );
};

export default EducationCard;
