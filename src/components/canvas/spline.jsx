import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const SplineCanvas = () => (
  <motion.div
    variants={slideIn("left", "tween", 0.2, 1)}
    initial="hidden"
    whileInView="show"
  >
    <Spline
      scene="https://prod.spline.design/Yv5z0fR1xvk-I7sa/scene.splinecode"
      className="relative transform scale-[0.5] -translate-x-40 md:scale-[0.7] lg:transform-none"
    />
  </motion.div>
);

export default SplineCanvas;
