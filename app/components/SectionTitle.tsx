import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-main-text">
      {children}
    </h3>
  );
};

export default SectionTitle;
