import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            className="w-[60%] h-[60%] object-contain "
          />
        </div>
      }
    >
      <div>
        <h3 className="font-bold text-white text-[24px] ">
          {experience.title}
        </h3>
        <p
          className="text-secondary font-semibold text-[16px] "
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      {/* <ul className="list-disc mt-5 ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={index} className="text-white-100 text-[14px] tracking-wider pl-1">
            {point}
          </li>
        ))}
      </ul> */}
      <div className="mt-5 ml-5 space-y-2">
        <a href={experience.certification_link} target="_blank">
          <img
            src={experience.img}
            alt="certification"
            className="object-contain rounded-xl"
          />
        </a>
      </div>
    </VerticalTimelineElement>
  );
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have learned so far</p>
        <h2 className={`${styles.sectionHeadText}`}>My Certifications.</h2>
      </motion.div>
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "");
