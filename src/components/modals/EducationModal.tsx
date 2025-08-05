import React from "react";
//Components
import Modal from "../ui/Modal";
import CourseCard from "../ui/CourseCard";
//Content Interface
import { EducationModalContent } from "@/constants";

//Modal Interface
interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: EducationModalContent;
}

//Render Modal
const EducationModal = ({ isOpen, setIsOpen, content }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello!">
      <div className="text-start mb-7 md:mb-10 lg:mb-10">
        {/* Title */}
        <h3 className="font-bold text-base md:text-lg lg:text-xl mb-2 lg:mb-3">
          {content.title}
        </h3>
        {/* Description */}
        <p className="font-medium text-[13px] md:text-base lg:text-lg mb-5">
          {content.description}
        </p>
        {/* Courses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.courses.map((course, i) => (
            <CourseCard
              key={i}
              variant={i % 2 === 1 ? "color" : "light"}
              provider={course.provider}
              course={course.course}
              time={course.time}
              updated={course?.updated}
              skills={course.skills}
              description={course.description}
              certificateLink={course.certificateLink}
              courseLink={course.courseLink}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default EducationModal;
