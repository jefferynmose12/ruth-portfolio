import React from "react";
import doris1 from "../../assets/doris1.png";
import doris2 from "../../assets/doris2.png";

const textArr = [
  "I'm a product designer who loves turning complex problems into clean, elegant, user-friendly solutions. My approach blends creativity with strategic thinking - I don't just make things look pretty, I make them work better for people.",
  "With 4+ years of experience, I've had the chance to work on everything from mobile apps to enterprise software. I get a kick out of diving deep into user research, sketching out ideas, and collaborating with developers to bring designs to life.",
  "My portfolio showcases a mix of projects where I've worn different hats - from research and wireframing to prototyping and user testing. I love collaborating with diverse teams and believe that the best products come from a mash-up of different perspectives.",
  "What really drives me is my hunger to grow. I'm always eager to develop and learn, constantly pushing myself to advance my skills. This field moves fast, and I'm here for it – always ready to dive into new techniques, tools, or approaches that can level up my design game.",
  "When I'm not designing, you might find me tinkering with new design tools and documenting countries which I’d like to visit. I bring that same curiosity and passion to my work, always looking for fresh perspectives and innovative solutions.",
  "Let's chat if you're looking for a designer who can think strategically, execute meticulously, and maybe crack a bad joke or two along the way.",
];

const Hero = () => {
  return (
    <div className="w-full px-4 md:px-10 mb-10">
      <div
        data-aos="fade-up"
        className="md:pl-20 lg:pl-32 mt-12 md:mt-24 lg:mt-48 text-2xl md:text-5xl font-normal md:leading-tight font-baskervville text-fade-grey"
      >
        <h2>Hi there,</h2>
        <h2>
          I’m <span className="text-black-text italic">Doris,</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-5 mt-10 mb-8 w-full">
        <div data-aos="fade-right" className="flex-1">
          <img src={doris2} alt="doris2" className="w-full" />
        </div>

        <div data-aos="fade-left" className="flex-1">
          <img src={doris1} alt="doris1" className="w-full" />
        </div>
      </div>

      <div
        data-aos="fade-out"
        className="flex flex-col gap-5 md:gap-7 mt-8 md:mt-14 md:px-20 lg:px-32 text-black text-lg md:text-xl font-medium leading-6 md:leading-7"
      >
        {textArr.map((text, i) => (
          <h6 key={i}>{text}</h6>
        ))}
      </div>
    </div>
  );
};

export default Hero;
