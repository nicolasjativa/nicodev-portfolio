import React from "react";
//Components
import Container from "../shared/Container";
import SectionText from "../shared/SectionText";
import FavStackCard from "../ui/FavStackCard";
import OtherStack from "../ui/OtherStack";
//Content
import { SectionsTextContent } from "@/constants";

//Stack Section Content
const Stack = () => {
  return (
    <section id="stack" className="scroll-mt-20">
      <Container>
        <SectionText
          title={SectionsTextContent.stack.title}
          description={SectionsTextContent.stack.description}
        />
        <FavStackCard />
        <OtherStack />
      </Container>
    </section>
  );
};

export default Stack;
