"use client";
//React
import React from "react";
//Components & Content
import { OtherProjectsCardsContent } from "@/constants";
import ProjectCard from "./ProjectCard";
//Swiper Components & Modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
//Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Component Content
const ProjectsCarousel = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-14 xl:px-20">
      {/* Carousel Wrapper */}
      <div className="relative">
        {/* Swipe Left Btn */}
        <div className="shadow-[0px_3px_0px_0px_#000] swiper-button-prev-custom hidden lg:flex absolute -left-12 top-1/2 z-10 cursor-pointer h-8 w-8 items-center justify-center rounded-full bg-white border border-black text-black  hover:text-primary transition">
          <i className="fi fi-br-angle-left text-sm leading-none"></i>
        </div>
        {/* Swipe Right Btn */}
        <div className="shadow-[0px_3px_0px_0px_#000] swiper-button-next-custom hidden lg:flex absolute -right-12 top-1/2 z-10 cursor-pointer h-8 w-8 items-center justify-center rounded-full bg-white border border-black text-black  hover:text-primary transition">
          <i className="fi fi-br-angle-right text-sm leading-none"></i>
        </div>
        {/* Slides */}
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom", //Custom Swiper Next Btn
            prevEl: ".swiper-button-prev-custom", //Custom Swiper Previous Btn
          }}
          className="!px-6 md:!px-12 lg:!px-1 "
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.2} //For Mobile & Tablet
          pagination={{ clickable: true }}
          breakpoints={{1024: { slidesPerView: 2 }}} //For Desktop
        >
          {OtherProjectsCardsContent.map((cardContent, i) => (
            //Render a Project Card per Slide
            <SwiperSlide key={i}>
              <ProjectCard
                title={cardContent.title}
                description={cardContent.description}
                stack={cardContent.stack}
                variant={cardContent.variant}
                cover={cardContent.cover}
                cover2={cardContent?.cover2}
                coverAlt={cardContent.coverAlt}
                coverAlt2={cardContent?.coverAlt2}
                projectState={cardContent.projectState}
                stateBadgeColor={cardContent.stateBadgeColor}
                siteLink={cardContent.siteLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
