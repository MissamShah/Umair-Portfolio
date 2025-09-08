import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { priceList } from "../constants";

import Tilt from "react-tilt";
import { github } from "../assets";



const PriceCard = ({
    index,
    Name,
    Description,
    Svg,
    Price,
    Type,
    Timing,
    Cetagory
  }) => {
    return (
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#090325] p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className='relative w-full h-[100%]'>
            <div className="flex items-center gap-4 bg-[#100d25] shadow-[0px_10px_30px_rgba(0,0,0,0.3)] py-[20px] px-[10px] h-[119px] rounded-xl">
                <div>
                    <div dangerouslySetInnerHTML={{ __html: Svg }} />
                </div>
                <div>
                    <h2 className="text-white text-[21px]">{Name}</h2>
                    <span className="text-[#8682a0] text-[10px]">{Description}</span>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full mt-[30px]">
                <div className="flex items-center gap-4 bg-[#100d25] shadow-[0px_10px_30px_rgba(0,0,0,0.3)] py-[20px] px-[10px] rounded-xl">
                    <div>
                    <div dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="#fff" style="user-select: none; width: 20px; height: 20px; display: inline-block; fill: #fff; color: #fff; flex-shrink: 0;"><g color="#fff" weight="regular"><path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"></path></g></svg>' }} />
                    </div>
                    <div>
                        <span>{Price}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-[#100d25] shadow-[0px_10px_30px_rgba(0,0,0,0.3)] py-[20px] px-[10px] rounded-xl">
                    <div>
                    <div dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="#fff" style="user-select: none; width: 20px; height: 20px; display: inline-block; fill: #fff; color: #fff; flex-shrink: 0;"><g color="#fff" weight="regular"><path d="M215.12,123.64a8,8,0,1,0-14.24-7.28,79.58,79.58,0,0,1-33.08,33.5l-16.58-37.32A40,40,0,0,0,136,40.8V24a8,8,0,0,0-16,0V40.8a40,40,0,0,0-15.22,71.74L56.69,220.75a8,8,0,1,0,14.62,6.5l25.14-56.56A95.48,95.48,0,0,0,128,176a99.13,99.13,0,0,0,31.6-5.21l25.09,56.46a8,8,0,0,0,14.62-6.5l-25-56.25A95.81,95.81,0,0,0,215.12,123.64ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56Zm0,104a79.52,79.52,0,0,1-25-4l16.42-36.94a39.81,39.81,0,0,0,17.2,0l16.48,37.06A83.21,83.21,0,0,1,128,160Z"></path></g></svg>' }} />
                    </div>
                    <div>
                        <span>{Type}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-[#100d25] shadow-[0px_10px_30px_rgba(0,0,0,0.3)] py-[20px] px-[10px] rounded-xl">
                    <div>
                    <div dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="#fff" style="user-select: none; width: 20px; height: 20px; display: inline-block; fill: #fff; color: #fff; flex-shrink: 0;"><g color="#fff" weight="regular"><path d="M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25ZM89.11,207.57a28.77,28.77,0,0,1-40.68-40.68l28.8-28.8c8.47-2.9,21.75-4,39.07,5,10.6,5.54,20.18,8,28.56,8.73ZM205.47,92.41a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z"></path></g></svg>' }} />
                    </div>
                    <div>
                        <span>{Timing}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-[#100d25] shadow-[0px_10px_30px_rgba(0,0,0,0.3)] py-[20px] px-[10px] rounded-xl">
                    <div>
                    <div dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="#fff" style="user-select: none; width: 20px; height: 20px; display: inline-block; fill: #fff; color: #fff; flex-shrink: 0;"><g color="#fff" weight="regular"><path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path></g></svg>' }} />
                    </div>
                    <div>
                        <span>{Cetagory}</span>
                    </div>
                </div>
            </div>

          </div>
        </Tilt>
      </motion.div>
    );
  };

const Priceings = () => {
    return(
        <>
            <div className={`mt-12 bg-black-100 rounded-[20px]`}>
                  <div
                    className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
                  >
                    
                    <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Pricing 💰</p>
                    <h2 className='text-white text-2xl sm:text-4xl'>Here are my most common expertises - contact me to build something great</h2>
                    </motion.div>
                    </div>
                    <div className={`-mt-20 pb-14 px-2 flex flex-wrap gap-7`}>
                        {priceList.map((List, index) => (
                                  <PriceCard
                                    key={`List-${index}`}
                                    index={index}
                                    {...List}
                                   
                                  />
                                ))}
                    </div>
                </div>
           
            
        </>
    )
}

export default SectionWrapper(Priceings, "");