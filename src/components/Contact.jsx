import React, { useRef, useState,useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  return (  
    <>
    <div className="xl:mt-12  rounded-3xl  flex xl:flex-col-reverse flex-col-reverse items-center justify-center overflow-hidden w-full mb-[60px]">
    {/* <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[1.5] bg-black-100 p-2 sm:p-8 rounded-2xl w-full flex items-center justify-center"
    >
      
      <button className="bg-[#712cfe] w-[80%] text-white rounded-lg px-[40px] py-[10px]">
        <a href="https://calendly.com/rmoosa276" target="_blank">
          Book A meeting
        </a>
      </button>
    </motion.div> */}
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[700px] h-[300px] w-full"
    >
      <EarthCanvas />
    </motion.div>
  </div>
  </>
  );
};

export default SectionWrapper(Contact, "contact");
