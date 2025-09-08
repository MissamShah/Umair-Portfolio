import React, { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projectsDetails } from "../constants";

const ProjectDetailsBlock = ({ index, number, text }) => {
  const ref = useRef();
  const isInView = useInView(ref);
  const targetNumber = parseInt(number.replace('+', ''), 10);
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(
        `${Math.floor(latest)}${number.includes('+') ? '+' : ''}`
      );
    });

    return () => unsubscribe();
  }, [count, number]);

  useEffect(() => {
    if (isInView) {
      animate(count, targetNumber, {
        type: "spring",
        stiffness: 100,
        damping: 20,
      });
    } else {
      animate(count, 0, {
        type: "spring",
        stiffness: 100,
        damping: 20,
      });
    }
  }, [isInView, count, targetNumber]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-[#212428] p-14 md:p-8 rounded-3xl w-full flex flex-col items-center justify-center text-center shadow-card"
    >
      <span className="text-white tracking-wider text-2xl md:text-4xl lg:text-[42px] font-bold">
        {displayValue}
      </span>
      <span className="text-[#fff] tracking-wider text-base md:text-lg mt-2">
        {text}
      </span>
    </motion.div>
  );
};

const ProjectDetails = () => {
  return (
<div className="mt-12 bg-[#212428] shadow-card min-h-[400px] py-12 relative rounded-[5px] flex flex-wrap lg:flex-nowrap items-stretch"
  style={{boxShadow: "10px 10px 19px #181b1e, -10px -10px 19px #2a2d32"}}
>
      <div className="lg:w-[65%] w-full flex-shrink-0 p-2 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
      {projectsDetails.map((item, index) => (
          <ProjectDetailsBlock key={index} index={index} {...item} />
        ))}
      </div>  
      <div className="lg:w-[35%] w-full flex-shrink-0 p-2 md:p-6 lg:p-8 flex items-center justify-center ">
        <motion.div
          className="bg-[#212428] shadow-card w-full p-4 md:p-10 rounded-3xl flex flex-col items-center justify-center gap-1 text-center"
          variants={fadeIn("", "spring", 1, 0.75)}
        >
          <div className="w-full flex justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 292" preserveAspectRatio="xMidYMid"><path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="#95BF46"/><path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E"/><path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338" fill="#FFF"/></svg>
          </div>
          <div className=" w-full flex justify-start flex-col mt-2">
            <span className="text-white text-[9px] md:text-xl lg:text-[9px] text-left">Let's Build Some-Things </span>
            <span className="text-yellow-400 text-5xl text-left">special</span>
          </div>
          <div className="w-full flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none"><path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#bd9b7c" stroke="#bd9b7c"></path><rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#bd9b7c"></rect><path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#bd9b7c" stroke-width="1.5" stroke-linecap="round"></path></svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectDetails, "");
