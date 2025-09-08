import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onClick,
  Cetagory
}) => {
  return (
    <motion.div
      // variants={fadeIn("up", "spring", index)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#212428] shadow-card p-5 rounded-[10px] sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [cursorState, setCursorState] = useState({
    isHovering: false,
    x: 0,
    y: 0,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('shopify frontend');

  const categories = ['shopify frontend', 'shopify case-studies', 'mern stack'];

  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
    console.log("Filtered Projects:", projects.filter(project => project.Cetagory === selectedCategory));
  }, [selectedCategory]);

  useEffect(() => {
    if (cursorState.isHovering) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "default";
    }
  }, [cursorState.isHovering]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [selectedProject]);

  return (
    <>
      <motion.div 
      // variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}`}>My work</p>
         <div className="hr bg-[#212428] hr-line my-5"></div>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to code
          repositories and live demos. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <motion.div
        animate={{
          left: cursorState.x,
          top: cursorState.y,
          opacity: cursorState.isHovering ? 0.6 : 0,
        }}
        transition={{ type: "tween", duration: 0.1 }}
        style={{
          position: "fixed",
          transform: "translate(-50%, -50%)",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: "#673bb7",
          filter: "blur(30px)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        Click to view project
      </motion.div>
      <div className="hr bg-[#212428] hr-line my-5"></div>
      <motion.div 
      // variants={textVariant()} 
      className="w-full flex items-center justify-center">
        <div className="flex flex-wrap gap-2 my-6 sm:my-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 rounded-[10px] uppercase text-[8px] sm:text-[10px] w-[100px] sm:w-[140px] font-medium transition-colors bg-[#212428] shadow-card ${
                selectedCategory === category
                  ? 'bg-[#212428] text-[#bd9b7c]'
                  : 'bg-[#212428] text-[#bd9b7c] hover:bg-[#212428] hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>
      <div className="hr bg-[#212428] hr-line my-5"></div>
      <div className="mt-10 flex flex-wrap gap-7">
        {projects
          .filter(project => project.Cetagory === selectedCategory)
          .map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              onMouseEnter={() => setCursorState((prev) => ({ ...prev, isHovering: true }))}
              onMouseLeave={() => setCursorState((prev) => ({ ...prev, isHovering: false }))}
              onMouseMove={(e) =>
                setCursorState((prev) => ({
                  ...prev,
                  x: e.clientX,
                  y: e.clientY,
                }))
              }
              onClick={() => window.open(project.live_link, "_blank")}
            />
          ))}
      </div>

      {selectedProject && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 99999,
            }}
            onClick={() => setSelectedProject(null)}
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              height: '85vh',
              backgroundColor: "#151030",
              zIndex: 9999999,
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            className="project-popup-con p-[10px] sm:p-[35px]"
          >
            <div className="sm:px-4 sm:py-1 py-1 max-w-7xl mx-auto relative z-[-1] ">
              <div className="popup-top-con w-full flex justify-center sm:justify-end mb-4">
                <div className="flex justify-end align-middle gap-4 sm:gap-[40px]">
                  {selectedProject.source_code_link ? <button onClick={() => window.open(selectedProject.source_code_link, "_blank")}> <img src={github} alt='source code' className='w-[30px] sm:w-[50px] object-contain' /></button> : ''}
                  <button
                    onClick={() => window.open(selectedProject.live_link, "_blank")}
                  >
                    <svg className="ico-svg" viewBox="0 0 20 20" width="30">
                      <g xmlns="http://www.w3.org/2000/svg" id="link">
                        <path d="m0.04213,3.19559c0,-1.72494 1.40636,-3.12776 3.13345,-3.12776l1.21915,0l-0.62536,1.95799l-0.5938,0c-0.64663,0 -1.17261,0.5257 -1.17261,1.16977l0,13.60883c0,0.64405 0.52599,1.16974 1.17261,1.16974l13.63582,0c0.64666,0 1.17264,-0.52569 1.17264,-1.16974l0,-0.75998l1.96084,-0.62136l0,1.38135c0,1.72499 -1.40636,3.12776 -3.13348,3.12776l-13.63582,0c-1.72709,0 -3.13345,-1.40277 -3.13345,-3.12776l0,-13.60883zm10.34479,-3.05926l7.50513,0c1.13852,0 2.06582,0.92472 2.06582,2.06233l0,7.68613l-1.96084,0.62136l0,-7.02766l-11.33851,11.31604l-1.38745,-1.38474l11.33802,-11.31548l-6.84751,0l0.62534,-1.95799z" fill="#fff" />
                      </g>
                    </svg>
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "white",
                      fontSize: "4rem",
                      fontWeight: 100,
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="h-full overflow-y-auto flex flex-col gap-4">
                <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-[10px] sm:gap-[20px]">
                  <h3 className="text-white text-3xl font-bold pop-text">{selectedProject.name}</h3>
                  <span>__</span>
                  <h4 className="text-white text-2xl font-bold pop-text">{selectedProject.projecttype}</h4>
                </div>
                <div className="flex rounded-3xl overflow-x-scroll popup-img-con">
                  <img src={selectedProject.slide_imgOne} alt={selectedProject.name} />
                  <img src={selectedProject.slide_imgTwo} alt={selectedProject.name} />
                  <img src={selectedProject.slide_imgThree} alt={selectedProject.name} />
                </div>

                <div>
                  <p className="text-white text-[14px] sm:text-[20px]">{selectedProject.case_study}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag.name} className={`text-sm ${tag.color} font-medium`}>
                      #{tag.name}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => window.open(selectedProject.live_link, "_blank")}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-[#6037af] rounded-lg mt-4 self-start"
                >
                  <svg className="ico-svg" viewBox="0 0 20 20" width="20">
                    <g xmlns="http://www.w3.org/2000/svg" id="link">
                      <path d="m0.04213,3.19559c0,-1.72494 1.40636,-3.12776 3.13345,-3.12776l1.21915,0l-0.62536,1.95799l-0.5938,0c-0.64663,0 -1.17261,0.5257 -1.17261,1.16977l0,13.60883c0,0.64405 0.52599,1.16974 1.17261,1.16974l13.63582,0c0.64666,0 1.17264,-0.52569 1.17264,-1.16974l0,-0.75998l1.96084,-0.62136l0,1.38135c0,1.72499 -1.40636,3.12776 -3.13348,3.12776l-13.63582,0c-1.72709,0 -3.13345,-1.40277 -3.13345,-3.12776l0,-13.60883zm10.34479,-3.05926l7.50513,0c1.13852,0 2.06582,0.92472 2.06582,2.06233l0,7.68613l-1.96084,0.62136l0,-7.02766l-11.33851,11.31604l-1.38745,-1.38474l11.33802,-11.31548l-6.84751,0l0.62534,-1.95799z" fill="#6037af" />
                    </g>
                  </svg>
                  Visit Site
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");

