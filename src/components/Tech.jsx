import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // const [rotate, setRotate] = useState(true);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 cursor-grab active:cursor-grabbing" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      {/* <button
        type="submit"
        className="py-3 bg-tertiary px-8 outline-none w-[60%] text-white font-bold shadow-md shadow-primary rounded-xl"
        onClick={() => setRotate(!rotate)}
      >
        {rotate ? "Pause Rotation" : "Rotate"}
      </button> */}
    </div>
  );
};

export default SectionWrapper(Tech, "");
