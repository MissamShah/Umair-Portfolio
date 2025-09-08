import { BrowserRouter } from "react-router-dom";
import { scrolltext } from "./constants";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  ProjectDetails,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Links,
  PriceBlock,
  Footer,
  Tools,
  Skills,
  ParallaxText,
  Abouttwo
  // Priceings
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#212428]">
        <div className="w-full bg-no-repeat bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="hr bg-[#212428] hr-line my-5"></div>
        <Abouttwo />
        <div className="hr bg-[#212428] hr-line -my-0 w-full"></div>
        <div className="w-full my-16 space-y-8">
          {scrolltext.map((item, index) => (
            <ParallaxText
              key={index}
              text={item.text}
              velocity={item.velocity}
              isCenter={item.isCenter}
            />
          ))}
        </div>
        {/* <About /> */}
        {/* <Experience /> */}
        {/* <Tech /> */}
        <div className="hr bg-[#212428] hr-line my-5"></div>
        <ProjectDetails />
        {/* <Tools /> */}
        {/* <Skills /> */}

        <Works />
        {/* <StarsCanvas /> */}
        <div className="hr bg-[#212428] hr-line my-5"></div>
        <Feedbacks />
        <div className="hr bg-[#212428] hr-line my-5"></div>
        <PriceBlock />
        {/* <Priceings /> */}
        <div className="relative z-0">
        <div className="hr bg-[#212428] hr-line my-5"></div>
          <Contact />
          {/* <StarsCanvas /> */}
          <Footer />
        </div>
       
        <div className="w-[auto] sm:w-[60px] h-[300px] overflow-hidden rounded-full fixed top-[60%] smtop-[70%] right-1 sm:right-[3%]  flex flex-col  justify-around items-center gap-2">
          <Links />
          <div className='w-[1px] sm:h-80 h-10 bg-[#fff]' />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
