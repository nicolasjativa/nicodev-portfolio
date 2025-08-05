import React from "react";
//Components
import Container from "../shared/Container";
import ContactCard from "../ui/ContactCard";
//Content
import { ContactCardContent } from "@/constants";

//Destructured Content
const { title, description, btn1, separator, socials } = ContactCardContent;

//Component Content
const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20">
      <Container>
        <ContactCard
          title={title}
          description={description}
          btn1={btn1}
          separator={separator}
          socials={socials}
        />
      </Container>
    </section>
  );
};

export default Contact;
