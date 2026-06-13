import React from "react";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import Check from "../check/Check";

const skills = [
  "Interactive Design",
  "Visual Design",
  "User Research",
  "Prototyping",
  "Wireframing",
  "Design Thinking",
  "User Empathy",
  "Project Management",
];

const About = () => {
  return (
    <div className="px-4 md:px-10 mt-10 mb-10 text-black-text font-normal">
      <div className="md:px-0 flex flex-col md:flex-row md:items-center gap-2 lg:gap-5 md:mt-16 mb-8">
        <div data-aos="flip-left" className="flex-1">
          <img src={about1} alt="doris2" className="w-full" />
        </div>
        <div data-aos="flip-right" className="flex-1">
          <img src={about2} alt="doris1" className="w-full" />
        </div>
        <div data-aos="flip-left" className="flex-1">
          <img src={about3} alt="doris1" className="w-full" />
        </div>
      </div>

      <div className="mt-5 md:px-20">
        <h6
          data-aos="zoom-in"
          className="text-lg md:text-xl lg:text-3xl pb-3 w-[90%] leading-6 md:leading-10 font-baskervville italic text-fade-grey"
        >
          Design is more than a craft; it’s the essence that breathes life into
          concepts, it turn visions into reality.
        </h6>

        <div className="border-t border-light-grey-border pt-7 lg:pt-10 flex flex-col md:flex-row gap-5 md:gap-0 text-medium-grey text-sm md:text-lg lg:text-xl font-normal font-sans">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex-1"
          >
            <h6>Skill set</h6>
          </div>

          <div className="flex-1">
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col gap-2 lg:gap-3"
            >
              {skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Check />
    </div>
  );
};

export default About;
