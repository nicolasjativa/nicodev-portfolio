import React from "react";
//Components
import Container from "../shared/Container";
import SectionText from "../shared/SectionText";
import ExperienceCard from "../ui/ExperienceCard";
//Content
import { ExperienceContent, SectionsTextContent } from "@/constants";
import { cn } from "@/lib/utils";

//Component Content
const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <Container>
        {/* Section Text */}
        <SectionText
          title={SectionsTextContent.experience.title}
          description={SectionsTextContent.experience.description}
        />
        {/* Section Content */}
        {ExperienceContent.map((experience, i) => (
          <div key={i} className="flex flex-col items-start sm:items-center">
            {/* Card + Period */}
            <div className={cn("flex items-center",
                 i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}>
              {/* Period (Tablet & Desktop) */}
              <span className="hidden sm:block font-bold text-lg md:text-xl lg:text-[1.3rem] w-2/6 lg:w-5/12 text-center">
                {experience.period}
              </span>
              {/* Experience Card */}
              <div className="sm:w-4/6 lg:w-7/12">
                <ExperienceCard
                  company={experience.company}
                  icon={experience.icon}
                  position={experience.position}
                  period={experience.period}
                  description={experience.description}
                  variant={experience.variant}
                />
              </div>
            </div>
            {/* Separator */}
            <div className={cn("sm:ms-0 sm:me-0 w-1 h-8 md:h-10 lg:w-1.2 bg-primary dark:bg-primary-dark my-5",
                ExperienceContent.length - 1 === i && "hidden",
                i % 2 === 0 ? "ms-12" : "ms-auto me-12"
            )}/>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Experience;
