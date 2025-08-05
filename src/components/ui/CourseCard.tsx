import React from "react";
//Card Content
import { Skills } from "@/constants";
import { techIcons } from "@/constants/techIcons";
//Utils
import { cn } from "@/lib/utils";

//Extract Udemy Icon
const Icon = techIcons["udemy"].icon;

interface CourseContent {
  variant?: string;
  provider: string;
  course: string;
  time: string;
  updated?: string;
  skills: Skills[];
  description: string;
  certificateLink: string;
  courseLink: string;
}
//Component Content
const CourseCard = ({
  provider,
  course,
  time,
  updated,
  skills,
  description,
  variant,
  certificateLink,
  courseLink,
}: CourseContent) => {
  //Render Component
  return (
    //Card Wrapper
    <div
      className={cn(
        "shadow-[0px_5px_0px_0px_#000 flex flex-col gap-4 lg:gap-5 p-5 lg:p-6 border border-black rounded-3xl",
        variant === "light"
          ? "bg-white dark:bg-zinc-800"
          : "bg-primary dark:bg-primary-dark"
      )}
    >
      {/* Card Header */}
      <div className="flex items-start gap-3">
        {/* Provider Icon */}
        <div>
          <div
            className={cn(
              "flex-shink-0 rounded-full flex items-center justify-center h-12 w-12 lg:w-14 lg:h-14",
              variant === "light" ? "bg-gray-300 dark:bg-white" : "bg-white"
            )}
          >
            <Icon className="w-10 lg:w-12 h-auto" />
          </div>
        </div>
        {/* Course Provider, Title & Time */}
        <div>
          {/* Provider */}
          <span
            className={cn(
              "text-[13px] lg:text-sm font-bold text-black dark:text-white",
              variant === "color" && "dark:text-black"
            )}
          >
            {provider}
          </span>
          {/* Course Title */}
          <h5
            className={cn(
              "text-[13px] lg:text-sm font-bold",
              variant === "light"
                ? "text-primary dark:text-primary-dark"
                : "text-white dark:text-gray-200"
            )}
          >
            {course}
          </h5>
          {/* Course Time */}
          <span
            className={cn(
              "text-[13px] lg:text-sm font-bold text-black dark:text-white",
              variant === "color" && "dark:text-black"
            )}
          >
            {time} {updated && <span className="font-medium">{updated}</span>}
          </span>
        </div>
      </div>
      {/* Skills Learned Badges */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className={cn(
              "text-[11px] lg:text-xs font-semibold px-2 lg:px-3 lg:py-[4px] py-[3px] rounded",
              variant === "light"
                ? "bg-gray-300 dark:bg-white text-black"
                : "bg-black text-white"
            )}
          >
            {skill}
          </span>
        ))}
      </div>
      {/* Course Description */}
      <p
        className={cn(
          "text-[13px] lg:text-sm font-medium text-black dark:text-white",
          variant === "color" && "dark:text-black"
        )}
      >
        {description}
      </p>
      {/* Card Footer Btns */}
      <div className="flex items-center justify-between w-full">
        {/* View Certificate Btn */}
        <a href={certificateLink} target="_blank" rel="noopener noreferrer">
          <button
            className={cn(
              "px-4 py-[10px] text-white text-xs lg-text-sm font-semibold flex items-center gap-2 rounded-lg",
              variant === "light"
                ? "bg-primary lg:hover:bg-primary-dark dark:bg-primary-dark lg:dark:hover:bg-white lg:dark:hover:text-black transition"
                : "bg-black lg:hover:bg-white lg:hover:text-black transition"
            )}
          >
            View Certificate <i className="fi fi-br-crown leading-none"></i>
          </button>
        </a>

        {/* Visit Course Btn */}
        <a href={courseLink} target="_blank" rel="noopener noreferrer">
        <button
          className={cn(
            "text-xs lg:text-sm font-semibold flex items-center gap-2 lg:hover:text-primary lg:dark:hover:text-primary-dark transition",
            variant === "color" &&
              "text-white lg:dark:hover:text-black transition"
          )}
        >
          Visit Course{" "}
          <i className="fi fi-br-arrow-up-right-from-square leading-none"></i>
        </button>
        </a>
        </div>
    </div>
  );
};

export default CourseCard;
