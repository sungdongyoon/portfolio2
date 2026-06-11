import React from "react";

const SecitonTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-4xl font-bold mb-15 text-orange-400">{children}</h3>
  );
};

export default SecitonTitle;
