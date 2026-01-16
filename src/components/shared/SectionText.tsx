import React from "react";
// Interfaces
import { SectionTextProps } from "@/constants";


//Component Content
const SectionText = ({ title, description }: SectionTextProps) => {
  return (
    <div className={`text-center ${title != "A Bit About Me" && "mb-7 md:mb-10 lg:mb-10"} lg:w-10/12 mx-auto whitespace-pre-line text-muted-foreground`}>
      {/* Title */}
      <h3 className="font-bold text-base md:text-lg lg:text-xl mb-2 lg:mb-3">
        {title}
      </h3>
      {/* Description */}
      <p className="font-medium text-[13px] md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
};

export default SectionText;
