import React from "react";
//Components
import Modal from "../ui/Modal";
//Next Component
import Image from "next/image";
//Content
import { ProjectModalContent } from "@/constants";
import { techIcons } from "@/constants/techIcons";

//Interface
interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: ProjectModalContent;
}

//Modal Content
const ProjectModal = ({ isOpen, setIsOpen, content }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {/* Content Wrapper */}
      <div className="flex flex-col gap-8">
        {/* Project Cover */}
        <Image
          src={"/projects-covers/manycars-banner.png"}
          className=" w-full h-auto lg:h-auto rounded-xl sm:rounded-2xl md:rounded-3xl object-cover"
          objectFit="cover"
          width={1920}
          height={1080}
          alt="manycars-cover"
        />

        {/* Project Main Content */}
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
          {/* Logo, Title & Time */}
          <div className="flex gap-2">
            {/* Project Logo */}
            <Image
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl"
              width={50}
              height={50}
              alt="manycars-logo"
              src={"/manycars-logo.jpg"}
            />
            {/* Project Title + Time Wrapper */}
            <div className="flex flex-col justify-between">
              <h5 className="font-bold text-sm md:text-base">
                {content.title}
              </h5>
              <span className="text-medium text-sm md:text-base">
                {content.time}
              </span>
            </div>
          </div>
          {/* Visit Project Site Btn */}
          <div>
            <button onClick={() => window.open(content.btnLink, "_blank", "noopener,noreferrer")} className="font-semibold text-xs md:text-sm border-2 border-black lg:hover:bg-black lg:hover:text-white dark:border-primary-dark lg:dark:hover:bg-primary-dark transition w-full md:w-auto px-6 py-2.5 rounded-lg">
              {content.btn}
            </button>
          </div>
        </div>

        {/* About Project Content */}
        <div className="flex flex-col gap-1.5 md:gap-2">
          {/* Title */}
          <h4 className="text-sm md:text-base font-bold">
            {content.aboutTitle}
          </h4>
          {/* Description */}
          <p className="text-xs md:text-sm">{content.aboutDesc}</p>
        </div>

        {/* Fronted Stack */}
        <div className="flex flex-col gap-2">
          {/* Title */}
          <h4 className="text-sm md:text-base font-bold">
            {content.frontendTitle}
          </h4>
          {/* Mini Cards */}
          <div className="flex flex-wrap gap-x-3 gap-y-4">
            {content.frontendTech.map((tech) => {
              const { icon: Icon, label } = techIcons[tech]; //Extract Icon & Label
              return ( //Render Mini Card
                <div key={tech} title={label} className="shadow-[0px_5px_0px_0px_#000] px-4 md:px-5 py-[9px] border border-black dark:bg-zinc-800 rounded-[10px] md:rounded-xl flex items-center gap-2">
                  {/* Icon */}
                  <Icon className="w-auto h-4 lg:h-5 text-sm dark:fill-white" />
                  {/* Label */}
                  <span className="font-semibold text-xs md:text-sm">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Backend Stack */}
        <div className="flex flex-col gap-2">
          {/* Title */}
          <h4 className="text-sm md:text-base font-bold">
            {content.backendTitle}
          </h4>
          {/* Stack Mini Cards */}
          <div className="flex gap-3">
            {content.backendTech.map((tech) => {
              const { icon: Icon, label } = techIcons[tech]; //Extract Icon & Label
              return ( //Render Mini Card
                <div key={tech} title={label} className="shadow-[0px_5px_0px_0px_#000] px-4 md:px-5 py-[9px] border border-black dark:bg-zinc-800 rounded-[10px] md:rounded-xl flex items-center gap-2">
                  {/* Icon */}
                  <Icon className="w-auto h-4 lg:h-5 text-sm dark:fill-white" />
                  {/* Label */}
                  <span className="font-semibold text-xs md:text-sm">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Content */}
        <div className="flex flex-col gap-3.5">
          {/* Title */}
          <h4 className="text-sm md:text-base font-bold">
            {content.featuresTitle}
          </h4>
          {/* Features */}
          <div className="flex flex-col gap-4">
            {content.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5 md:gap-3">
                {/* Feature Icon */}
                <i className={`${feature.icon} text-base md:text-lg leading-none dark:text-primary-dark`}></i>
                {/* Feature Label */}
                <span className="font-medium text-xs md:text-sm">
                  {feature.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Card */}
        <div className="shadow-[0px_5p_0px_0px_#000] bg-primary dark:bg-primary-dark border border-black rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col gap-2 md:gap-3">
          {/* Card Title + Icon */}
          <div className="flex items-center gap-2">
            {/* Icon */}
            <i className="fi fi-br-bulb text-xl md:text-2xl leading-none dark:text-black"></i>
            {/* Title */}
            <h4 className="text-sm md:text-base font-bold text-black">
              {content.challengesTitle}
            </h4>
          </div>
          {/* Card Description */}
          <p className="text-xs md:text-sm font-medium dark:text-black">
            {content.challengesDesc}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
