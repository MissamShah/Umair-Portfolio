import React from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { skills } from "../constants";



const SkillsCard = ({ name, icon, description }) => {
    return(
        <>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-[#fff] bg-opacity-30 backdrop-blur-md shadow-[0px_10px_30px_rgba(0,0,0,0.1)] p-6 rounded-2xl sm:w-[373px] w-full"
    >
      <div className="w-full h-full flex items-center text-center gap-[20px]">
        <div className="bg-white w-[25%] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-md flex items-center justify-center">
        <div dangerouslySetInnerHTML={{ __html: icon }} className="w-16 h-16" />
        </div>
        <div className="w-[75%] h-full flex justify-center items-start flex-col">
        <span className=" text-black text-left  text-[16px] font-[500]">{name}</span>
        <p className="text-[12px] text-left text-black">{description}</p>
        </div>
      </div>
    </Tilt>
        </>
    )
};

const Skills = () => {
    return(
        <>
             <div className="min-h-[400px] relative rounded-[20px] flex flex-col w-full">
                  <div className="w-full flex flex-col justify-center items-center gap-[35px]">
                    <div className="w-[250px] min-w-[200px] text-center rounded-3xl bg-[#fff] bg-opacity-30 backdrop-blur-md shadow-[0px_10px_30px_rgba(0,0,0,0.1)] py-3">
                      <span className="text-black text-[20px] font-semibold">Ways of working</span>
                    </div>
                    <div className="w-[600px] text-center">
                      <span className="text-[40px] font-extrabold text-black">
                      I specialize in building highly converting websites.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center mt-8">
                    {skills.map((skill, index) => (
                      <SkillsCard key={index} name={skill.name} icon={skill.icon} description={skill.description} />
                    ))}
                  </div>
                </div>
        </>
    )
}

export default SectionWrapper(Skills, "");