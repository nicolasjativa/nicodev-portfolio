import React, { useState } from "react";
//Interfaces
import { ProjectCardsProps, ProjectModalContent } from "@/constants";
//Tech Icons
import { techIcons } from "@/constants/techIcons";
//Modal
import ProjectModal from "../modals/ProjectModal";
//Utils
import { cn } from "@/lib/utils";
import Image from "next/image";

{
  /* Componet Content */
}
const ProjectCard = ({
  title,
  description,
  stack,
  variant,
  cover,
  coverAlt,
  projectState,
  stateBadgeColor,
  siteLink,
}: ProjectCardsProps) => {
  {
    /* Modal States */
  }
  const [isOpen, setIsOpen] = useState(false);
 
  {
    /* Render Component */
  }
  return (
    <div className="pb-2">
      {/* Project Card */}
      <div
        className={cn(
          "border border-black p-6 md:p-8 lg:p-9 rounded-3xl shadow-[0px_5px_0px_0px_#000]",
          variant === "main"
            ? "bg-slate-900 dark:bg-zinc-950 dark:shadow-[0px_5px_0px_0px_#843ceb] dark:border-primary-dark"
            : "bg-white dark:bg-zinc-900"
        )}
      >
        {/* Project Cover */}
        {variant === "main" ? (
   
            <div className="bg-gray-300 rounded-2xl lg:rounded-xl mb-4 lg:mb-5 relative overflow-hidden">
              <Image width={1580} height={637} src={cover} alt={coverAlt} className="object-cover" />
              <span
                className={cn(
                  "font-medium text-[12px] md:text-[14px] py-1 px-2 rounded-md absolute top-2 left-2 text-white",
                  stateBadgeColor
                )}
              >
                {projectState}
              </span>
            </div>
        
        ) : (
          <div className=" bg-gray-300 rounded-2xl lg:rounded-xl mb-4 lg:mb-5 relative overflow-hidden">
            <Image
              src={cover}
              alt={coverAlt}
              width={1346}
              height={668}
              className="object-cover border dark:border-0 border-slate-700 rounded-2xl lg:rounded-xl h-auto w-full"
            />
            <span
              className={cn(
                "font-medium text-[12px] md:text-[14px] py-1 px-2 rounded-md absolute top-2 left-2 text-white",
                stateBadgeColor
              )}
            >
              {projectState}
            </span>
          </div>
        )}

        {/* Project Title */}
        <h4
          className={cn(
            "font-bold text-sm md:text-base lg:text-lg mb-1 flex gap-3",
            variant === "main" ? "text-white" : "text-black dark:text-white"
          )}
        >
          {title}
        </h4>
        {/* Project Description */}
        <p
          className={cn(
            "text-xs md:text-sm lg:text-base font-medium mb-4 lg:mb-5",
            variant === "main" ? "text-white " : "text-black dark:text-white"
          )}
        >
          {description}
        </p>
        {/* Project Icons & Button */}
        <div className="flex justify-between items-center">
          {/* Project Stack Icons */}
          <div className="flex gap-1">
            {stack.map((tech) => {
              const { icon: Icon, label } = techIcons[tech]; //Extract
              return (
                <div //Icon Wrapper
                  key={label}
                  title={label}
                  className={cn(
                    "h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 rounded-full bg-gray-300 dark:bg-white flex items-center justify-center",
                    variant === "main" ? "dark:bg-white" : "dark:bg-white"
                  )}
                >
                  {/* Icon */}
                  <Icon
                    className={cn(
                      "w-auto h-4 lg:h-5 text-sm",
                      variant === "main" ? "!dark:-white" : "dark:fill-black"
                    )}
                  />
                </div>
              );
            })}
          </div>
          {/* Action Btn */}
          <button
            onClick={
              variant === "main"
                ? () => setIsOpen(true)
                : () => window.open(siteLink, "_blank", "noopener,noreferrer")
            }
            className={cn(
              "text-white px-4 py-2  transition border-2 text-xs lg:text-sm rounded-lg font-semibold",
              "bg-black border-black dark:bg-zinc-900 lg:hover:bg-primary lg:hover:border-primary dark:border-primary-dark lg:dark:hover:bg-primary-dark lg:dark:hover:border-primary-dark",
              variant === "main" &&
                "bg-slate-900 dark:bg-zinc-950 border-primary dark:border-primary-dark dark:text-white lg:dark:hover:border-primary-dark lg:dark:hover:bg-primary-dark"
            )}
          >
            {variant === "main" ? "Show me more" : "Visit Site"}
          </button>
        </div>
      </div>
      {/* Render Main Project Modal */}
      {variant === "main" && (
        <ProjectModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          content={ProjectModalContent}
        />
      )}
    </div>
  );
};

export default ProjectCard;
