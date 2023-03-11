import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt
        className="xs:w-[250px] w-full transition-all"
        glareEnable={true}
        glareBorderRadius="20px"
        glareColor="#4dee90"
       
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
        >
          <div className="flex justify-evenly items-center flex-col bg-tertiary rounded-[20px] min-h-[280px] py-5  px-12">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center ">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };
  return (
    <div className={`${styles.paddingX}`}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        I'm a skilled Front-end developer with experience in JavaScript and
        expertise in frameworks like React.js, Next,js
      </motion.p>
      <div className="flex justify-evenly flex-wrap gap-10 mt-20 mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
