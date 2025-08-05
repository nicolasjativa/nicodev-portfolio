import React from "react";
//Next Components
import Image from "next/image";
//Content & Interfaces
import { FavStackIcons } from "@/constants";
import { techIcons } from "@/constants/techIcons";
import TriangleIcon from "@/assets/triangle.svg";

//Card Content
const FavStackCard = () => {
  return (
    <div>
      {/* Card Wrapper */}
      <div className="shadow-[0px_5px_0px_0px_#000] dark:shadow-[0px_5px_0px_0px_#843ceb] relative mx-auto border dark:border-0 border-black rounded-3xl flex justify-between items-center px-8 py-6 md:px-8 md:py-7 lg:px-9 xl:px-10 xl:py-9 w-11/12 sm:w-8/12 lg:w-6/12 dark:bg-zinc-900">
        {/* Heart Icon */}
        <Image
          src={"/heart-icon.png"}
          alt="Heart Icon"
          width={100}
          height={100}
          className="w-14 sm:w-[3.75rem] md:w-16 lg:w-[4rem] xl:w-[4.25rem] h-auto absolute -top-6 -start-6 md:-top-7 md:-start-7 lg:-top-8 lg:-start-8"
        />
        {/* Fav Stack Icons */}
        {FavStackIcons.map((icon) => {
          const { icon: Icon, label } = techIcons[icon]; //Extract Icon Componente & Label
          return ( // Render Icon Group with Label
            <div
              key={icon}
              title={label}
              className="group relative h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 flex items-center justify-center"
            >
              {/* Tooltip */}
              <span className="absolute text-[10px] -top-7 font-semibold text-white bg-black dark:bg-zinc-700 py-[2px] px-2 rounded opacity-0 translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-out">
                {label}
              </span>
              {/* Icon */}
              <Icon className="w-auto h-auto  lg:group-hover:fill-primary lg:dark:group-hover:fill-primary-dark transition-colors duration-200 dark:fill-gray-200" />
            </div>
          );
        })}
      </div>
      {/* Card Bottom Triangle */}
      <TriangleIcon className="w-3 h-3 md:w-4 md:h-4 mx-auto rotate-180 dark:fill-primary-dark" />
      {/* Card Bottom Label */}
      <h5 className="text-xs md:text-sm lg:text-base font-semibold mt-0.5 text-center">
        My Dev Happy Place
      </h5>
    </div>
  );
};

export default FavStackCard;
