import React from "react";
import Container from "../shared/Container";
import SectionText from "../shared/SectionText";
import { SectionsTextContent } from "@/constants";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <Container>
        <SectionText
          title={SectionsTextContent.about.title}
          description={SectionsTextContent.about.description}
        />
        {/* Hero Action Btns */}
        <div className="flex flex-col sm:flex-row gap-3.5 mt-7 w-full sm:w-auto justify-center">
          {/* View Github Repo Btn */}
          <button className="text-[13px] md:text-[15px] lg:text-base font-medium border-2 border-black dark:border-white lg:hover:border-primary lg:dark:hover:border-primary-dark transition py-2 px-4 rounded-lg">
            <a
              href="https://github.com/nicolasjativa/nicodev-portfolio"
               target="_blank"
              className="flex items-center justify-center gap-2"
            >
              Browse the GitHub Repo
              <i className="fi fi-brands-github leading-none"></i>
            </a>
          </button>
          {/* View Figma File Btn */}
          <a
            href="https://www.figma.com/design/nXAafDnt5pjoXq8ghprGt1/Nicolas-Portfolio?t=rp03FVSLDlzwhFUP-1f"
            target="_blank"
            className="text-[13px] md:text-[15px] lg:text-base font-medium border-2 border-black dark:border-primary-dark lg:hover:border-primary bg-black dark:bg-primary-dark lg:hover:bg-primary lg:dark:hover:bg-white lg:dark:hover:text-black lg:dark:hover:border-white transition text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
          >
            Explore the Figma File
            <i className="fi fi-brands-figma leading-none"></i>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default About;
