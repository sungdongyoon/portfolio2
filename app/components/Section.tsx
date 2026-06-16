import React from "react";
import * as motion from "motion/react-client";
import { sectionAnimation } from "../constants/animations";

const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <motion.section
      id={id}
      className="px-5 sm:px-7 lg:px-10"
      {...sectionAnimation}
    >
      {children}
    </motion.section>
  );
};

export default Section;
