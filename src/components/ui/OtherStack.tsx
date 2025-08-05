import React from "react";
//Content & Interfaces
import { OtherStackIcons } from "@/constants";
import { techIcons } from "@/constants/techIcons";

//Component Content
const OtherStack = () => {
  return (
    <div className="flex justify-between items-center mt-7 md:mt-9 lg:mt-9 xl:mt-10">
      {/* Other Stack Icons */}
      {OtherStackIcons.map((icon) => {
        const { icon: Icon, label } = techIcons[icon]; //Extract Icon & Label
        return ( //Render Icon Group
          <div
            key={icon}
            title={label}
            className="group relative h-5 w-5 sm:w-7 sm:h-7 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 flex items-center justify-center"
          >
            {/* Tooltip */}
            <span className="absolute text-[10px] -top-7 font-semibold text-white bg-black dark:bg-zinc-800 py-[2px] px-2 rounded opacity-0 translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-out">{label}</span>
            {/* Icon */}
            <Icon className="w-auto h-auto lg:group-hover:fill-primary lg:dark:group-hover:fill-primary-dark transition-colors duration-200 dark:fill-gray-200" />
          </div>
        );
      })}
    </div>
  );
};

export default OtherStack;
