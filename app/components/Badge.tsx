import React from "react";

interface BadgeType {
  children: React.ReactNode;
  size: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const sizeClass = {
  xs: "text-[0.5rem] py-1 px-2",
  sm: "text-[0.8rem] py-1 px-3",
  md: "text-[1rem] py-1.5 px-4",
  lg: "text-[1.2rem] py-2 px-5",
};

const Badge = ({ children, size = "md", className }: BadgeType) => {
  return (
    <div
      className={`inline-block bg-black text-main-text rounded-4xl py-1 px-3 ${sizeClass[size]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
