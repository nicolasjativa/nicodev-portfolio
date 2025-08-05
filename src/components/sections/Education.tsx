import React from "react";
//Components
import Container from "../shared/Container";
import SectionText from "../shared/SectionText";
import EducationCard from "../ui/EducationCard";
//Content
import { EducationCardsContent, SectionsTextContent } from "@/constants";

//Component Content
const Education = () => {
  return (
    <section id="education" className="scroll-mt-20">
      <Container>
        {/* Section Text */}
        <SectionText
          title={SectionsTextContent.education.title}
          description={SectionsTextContent.education.description}
        />
        {/* Education Cards */}
        <div className="flex flex-col sm:flex-row gap-6">
          {EducationCardsContent.map((cardContent, i) => (
            //Render Education Card
            <div key={i} className="w-full sm:w-1/2">
              <EducationCard
                key={i}
                title={cardContent.title}
                image={cardContent.image}
                imageAlt={cardContent.imageAlt}
                ariaLabel={cardContent.ariaLabel}
                btn={cardContent.btn}
                variant={cardContent.variant}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
