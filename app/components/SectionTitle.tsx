import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-15 text-main-text">
      {children}
    </h3>
  );
};

export default SectionTitle;
