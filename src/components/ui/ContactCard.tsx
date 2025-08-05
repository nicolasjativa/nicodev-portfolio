"use client";
//React
import React from "react";
//Card Content
import { ContactCardProps } from "@/constants";
import { techIcons } from "@/constants/techIcons";
//Components
import CopyEmailButton from "./CopyEmailBtn";

//Component Content
const ContactCard = ({
  title,
  description,
  btn1,
  separator,
  socials,
}: ContactCardProps) => {
  //Card Component
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="shadow-[0px_5px_0px_0px_#000] flex flex-col gap-5 md:gap-6 lg:gap-8 items-center border border-black px-7 py-9 sm:px-9 md:px-12 lg:px-15 lg:py-12 bg-primary dark:bg-primary-dark rounded-3xl">
        {/* Title & Description */}
        <div className="text-center">
          <h3 className="font-bold text-[15px] md:text-lg lg:text-xl mb-2 lg:mb-3 dark:text-black">
            {title}
          </h3>
          <p className="font-medium text-[13px] md:text-base lg:text-lg lg:w-10/12 mx-auto dark:text-black">
            {description}
          </p>
        </div>
        {/* Action Btns */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Open Contact Form Btn */}
          <div className="hidden">
            <button
              aria-label={btn1}
              className="w-full border-2 border-black dark:text-black text-xs font-semibold py-2.5 px-7 rounded-lg lg:text-sm lg:hover:bg-black lg:hover:text-white transition"
            >
              {btn1}
            </button>
          </div>
          {/* Copy Email Btn */}
          <div>
            <CopyEmailButton />
          </div>
        </div>
        {/* Separator */}
        <span className="font-medium text-sm text-center lg:text-base dark:text-black">
          {separator}
        </span>
        {/* Socials Icons */}
        <div className="flex justify-between items-center gap-6 md:gap-8 lg:gap-10">
          {socials.map((icon) => {
            const { icon: Icon, label, link } = techIcons[icon]; // Extract Icon Component & Label
            //Render Social Icon
            return (
              <a
              href={link ? link : "#"}
              target="_blank"
                key={icon}
                title={label}
                className="group h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 flex items-center justify-center"
              >
                <Icon className="w-auto h-auto lg:group-hover:fill-white transition" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
