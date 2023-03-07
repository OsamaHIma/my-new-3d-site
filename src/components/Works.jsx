import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";

const Works = () => {
  const ProjectCard = ({
    index,
    name,
    desecration,
    image,
    tags,
    source_code_link,
  }) => (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        scale={1}
        glareEnable={true}
        glareBorderRadius="16px"
        glareColor="#f0f0f0"
        tiltAxis="x"
        gyroscope={true}
        className="rounded-2xl bg-tertiary p-5 sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px] "></div>
      </Tilt>
    </motion.div>
  );
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects done.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary leading-[30px] max-w-3xl text-[13px] "
          variants={fadeIn("", "", 0.5, 1)}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
