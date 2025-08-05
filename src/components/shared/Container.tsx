import React from "react";

//Container Interface
interface ContainerProps {
  children: React.ReactNode;
}

//Container Content
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-14 xl:px-20 w-full">
      {children}
    </div>
  );
};

export default Container;
