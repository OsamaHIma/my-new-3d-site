import React, { useState, useRef } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [Form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...Form, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_5fpbwl8",
        "template_9rfs3ie",
        {
          from_name: Form.name,
          to_name: "Osama",
          from_email: Form.email,
          to_email: "osamaworkemail@gmail.com",
          message: Form.message,
        },
        "6vrrdolbRvNzcJ0Xp"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            <p>
              Thank you <span className="text-[#52ee4d] font-extrabold">{Form.name}</span>!, 
             I've got your message and I'll reach out to you soon.
            </p>,
            {
              position: "top-right",
              autoClose: 5000,
            }
          );
          setForm({ name: "", email: "", message: "" });
        },
        (err) => {
          setLoading(false);
          toast.error(
            <p>
              Sorry <span className="text-[#ee524d] font-extrabold">{Form.name}</span>{" "}
              something went wrong.
            </p>
          );
          console.error(err);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex gap-10 flex-col overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          className="flex flex-col gap-8 mt-12"
          onSubmit={handelSubmit}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name:</span>
            <input
              type="text"
              name="name"
              required
              minLength={4}
              onChange={handelChange}
              placeholder="relax and try to remember"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email:</span>
            <input
              type="text"
              name="email"
              required
              onChange={handelChange}
              placeholder="Whats's your email? Hard one isn't it?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message:</span>
            <textarea
              rows="7"
              name="message"
              required
              onChange={handelChange}
              minLength={6}
              placeholder="Finally What do you wanna say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="py-3 bg-tertiary px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
