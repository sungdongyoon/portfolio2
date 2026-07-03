import React from "react";
import * as motion from "motion/react-client";
import { sectionAnimation } from "../../constants/animations";

const Section = ({
  children,
  id,
  isAnimation,
}: {
  children: React.ReactNode;
  id: string;
  isAnimation: boolean;
}) => {
  return (
    <motion.section
      id={id}
      className="px-5 sm:px-7 lg:px-10"
      {...(isAnimation && { ...sectionAnimation })}
    >
      {children}
    </motion.section>
  );
};

export default Section;
