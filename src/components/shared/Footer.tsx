import React from "react";
//Components
import Container from "./Container";
import NicoDevLogo from "./NicoDevLogo";

//Footer Content
const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-col justify-center items-center gap-3 md:gap-4 py-5 md:py-6 mt-7 lg:mt-14">
          {/* Logo */}
          <NicoDevLogo onlyIconOnMobile size="1.15rem" />
          {/* Copyright */}
          <p className="font-semibold text-sm md:text-base text-center w-64 md:w-full">
            © {new Date().getFullYear()} Copyright{" "} <span className="text-primary dark:text-primary-dark">Nicolas Jativa</span>. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
