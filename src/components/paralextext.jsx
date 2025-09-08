import Marquee from "react-fast-marquee";

const ParallaxText = ({ text, velocity, isCenter }) => {
  return (
    <Marquee
      speed={Math.abs(velocity) * 0.5}
      direction={velocity < 0 ? "left" : "right"}
      gradient={false}
      className={`${isCenter ? "text-white text-7xl font-semibold" : "text-[#1b8497] text-5xl font-bold"}`}
    >
      {[...Array(8)].map((_, i) => (
        <span key={i} className="mr-8">
          {text}
        </span>
      ))}
    </Marquee>
  );
};

export default ParallaxText;