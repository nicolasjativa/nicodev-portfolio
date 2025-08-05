import React from "react";
//Components
import Container from "../shared/Container";
//Next Components
import Image from "next/image";

{/* Component Content */}
const Hero = () => {
  return (
    <section id="home" className="scroll-mt-20 pt-8 sm:pt-11 md:pt-12 lg:pt-20">
      <Container>
        {/* Hero */}
         <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start ">
            {/* Hero Image */}
            <div>
              {/* Nicolas Photo with Bg */}
              <div className="shadow-[0px_5px_0px_0px_#191A23] h-28 w-28 md:h-36 md:w-36 lg:h-44 lg:w-44 xl:h-48 xl:w-48 rounded-full bg-primary dark:bg-primary-dark  mb-7 border-black border relative">
                <Image
                  src="/nicolas-photo.png"
                  alt="Foto de Nicolás"
                  width={150}
                  height={102}
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full w-[102px] md:w-[125px] lg:w-[150px] xl:w-[165px] h-auto"
                />
              </div>
            </div>
            {/* Hero Content */}
            <div className="flex flex-col items-center lg:items-start ">
              {/* Hero Title */}
              <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:w-11/12 text-center lg:text-start  mb-2.5 lg:mb-4 w-10/12 md:w-full leading-7">
                Crafting{" "}
                <span className="text-primary dark:text-primary-dark">Captivating</span>
                {" "}Digital Experiences
              </h1>
              {/* Hero Subtitle */}
              <h2 className="text-primary dark:text-primary-dark font-semibold text-[15px] sm:text-lg md:text-xl lg:text-2xl text-center lg:text-start w-10/12 md:w-full mb-4 leading-4">
                Hi, I’m{" "}
                <span className="text-black dark:text-white">Nico</span>
                , an Ecuador-based{" "}
                <span className="text-black dark:text-white">Full Stack Developer</span>
              </h2>
              {/* Hero Description */}
              <p className="text-[13px] sm:text-base md:text-lg xl:text-xl sm:w-10/12 font-medium text-center lg:text-start">
                Driven by a <span className="font-extrabold">passion{" "}</span> 
                for web and mobile app development, I build
                <span className="font-extrabold">{" "}modern, pixel-perfect</span>{" "}
                websites with cutting-edge technologies to deliver{" "}
                <span className="font-extrabold">exceptional{" "}</span>
                 user experiences.
              </p>
              {/* Hero Action Btns */}
              <div className="flex flex-col sm:flex-row gap-3.5 mt-7 w-full sm:w-auto">
                {/* Scroll to Content Btn */}
                <button className="text-[13px] md:text-[15px] lg:text-lg font-semibold border-2 border-black dark:border-white lg:hover:border-primary lg:dark:hover:border-primary-dark transition py-2 px-4 rounded-lg">
                  <a href="#experience" className="flex items-center justify-center gap-2">
                    Discover my Journey <i className="fi fi-br-mountain leading-none"></i>
                  </a>
                </button>
                {/* Download Resume Btn */}
                <a 
                 href="/resume-nicolas-jativa-full-stack-developer.pdf"
                 download
                 className="text-[13px] md:text-[15px] lg:text-lg font-semibold border-2 border-black dark:border-primary-dark lg:hover:border-primary bg-black dark:bg-primary-dark lg:hover:bg-primary lg:dark:hover:bg-white lg:dark:hover:text-black lg:dark:hover:border-white transition text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2">
                   Grab my Resume<i className="fi fi-br-file-download leading-none"></i>
                </a>
              </div>
            </div>
         </div>
      </Container>
    </section>
  );
};

export default Hero;
