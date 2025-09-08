import React from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { tools } from "../constants";

const ToolsCard = ({ name, icon, description }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-[#fff] bg-opacity-30 backdrop-blur-md shadow-[0px_10px_30px_rgba(0,0,0,0.1)] p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="flex items-center text-center gap-[20px]">
        <div className="bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-md flex items-center justify-center">
          <img src={icon} alt={name} className="w-[70px] h-[70px]"></img>
        </div>
        <div className="flex justify-start items-start flex-col">
        <span className=" text-black text-lg font-bold mt-3">{name}</span>
        <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </Tilt>
  );
};

const Tools = () => {
  return (
    <div className="mt-12 min-h-[400px] py-12 relative rounded-[20px] flex flex-col w-full">
      <div className="w-full flex flex-col justify-center items-center gap-[35px]">
        <div className="w-[250px] min-w-[200px] text-center rounded-3xl bg-[#fff] bg-opacity-30 backdrop-blur-md shadow-[0px_10px_30px_rgba(0,0,0,0.1)] py-3">
          <span className="text-black text-[20px] font-semibold">Top Picks for Me</span>
        </div>
        <div>
          <span className="text-[40px] font-extrabold text-black">
            These are Tools I Use Daily
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-7 justify-center mt-8">
        {tools.map((tool, index) => (
          <ToolsCard key={index} name={tool.name} icon={tool.icon} description={tool.description} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tools, "");
