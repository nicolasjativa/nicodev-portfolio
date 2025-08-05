"use client";
//React
import React from "react";
//Components
import Container from "../shared/Container";
import SectionText from "../shared/SectionText";
import ProjectCard from "../ui/ProjectCard";
import ProjectsCarousel from "../ui/ProjectsCarousel";
//Content
import { MainProjectCardContent, SectionsTextContent } from "@/constants";

//Component Content
const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20">
      {/* Main Project Content + Other Projects Title */}
      <Container>
        {/* Section Text */}
        <SectionText
          title={SectionsTextContent.projects.title}
          description={SectionsTextContent.projects.description}
        />
        {/* Main Project Title */}
        <h4 className="text-sm md:text-base lg:text-lg font-bold mb-2">
          My Top Build
        </h4>
        {/* Main Project Card */}
        <ProjectCard
          title={MainProjectCardContent.title}
          description={MainProjectCardContent.description}
          stack={MainProjectCardContent.stack}
          variant={MainProjectCardContent.variant}
          cover={MainProjectCardContent.cover}
          coverAlt={MainProjectCardContent.coverAlt}
          projectState={MainProjectCardContent.projectState}
          stateBadgeColor={MainProjectCardContent.stateBadgeColor}
          siteLink={MainProjectCardContent.siteLink}
        />
        {/* Other Projects Title */}
        <h4 className="text-sm md:text-base lg:text-lg font-bold mb-2 mt-9">
        Recent Work I’ve Done
        </h4>
      </Container>
      {/* Other Projects Carousel */}
      <ProjectsCarousel />      
    </section>
  );
};

export default Projects;
