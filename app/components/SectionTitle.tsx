import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-15 text-orange-400">
      {children}
    </h3>
  );
};

export default SectionTitle;
