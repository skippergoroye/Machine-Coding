import React from "react";

const OnboardingLayout = ({ children, imageUrl }) => {
  return (
    <section className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full lg:flex flex-col hidden">
        <img src={imageUrl} className="w-full h-full object-cover " />
      </div>
      <div className="w-full lg:w-1/2 h-full bg-[#f5f5f5]">
        {children}
      </div>
    </section>
  );
};

export default OnboardingLayout;
