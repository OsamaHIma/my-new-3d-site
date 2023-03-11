import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <header className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi!, I'm <span className="text-[#915eff]">Osama</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I'm a Front-end developer
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute flex justify-center w-full xs:bottom-10 bottom-32 items-center">
        <a href="#about">
          <div className="rounded-3xl border-4 border-secondary w-[37px] h-[64px] flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 17, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="rounded-full w-3 h-3 bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Hero;
