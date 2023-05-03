import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";
import { github, link } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";

const Work = () => {
  const ProjectCard = ({
    index,
    name,
    description,
    image,
    tags,
    source_code_link,
    live_preview,
  }) => (
    <motion.div variants={fadeIn("up", "spring", 0.3 * index, 0.75)}>
      <Tilt
        scale={1}
        glareEnable={true}
        glareBorderRadius="16px"
        glareColor="#4d58eea8"
        tiltAxis="x"
        className="rounded-2xl bg-tertiary p-5 sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 cursor-pointer rounded-full flex justify-center items-center"
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
            >
              <img
                src={github}
                alt="github"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
            <div
              className="black-gradient w-10 h-10 cursor-pointer rounded-full flex justify-center items-center"
              onClick={() => {
                window.open(live_preview, "_blank");
              }}
            >
              <img
                src={link}
                alt="link"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[24px] text-white font-bold">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">
            {description ? description : null}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={index} className={`text-[14px] ${tag.color} leading-6 `}>
              #{tag.name}
            </p>
          ))}
        </div>
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
          and manage projects effectively, for more projects please checkout my
          GitHub profile.
        </motion.p>
      </div>
      <div className="mt-20 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "projects");
