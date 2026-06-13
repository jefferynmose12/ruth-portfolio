import React from "react";

const Connect = () => {
  return (
    <div className="mt-32 lg:mt-60">
      <h6 className="font-baskervville text-3xl md:text-5xl lg:text-6xl mb-6 font-medium lg:max-w-[90%] leading-[1.25] md:leading-[1.3] lg:leading-[1.35]">
        Let's connect if you're looking for a designer who can think
        strategically, execute meticulously, and maybe crack a bad joke or two
        along the way.
      </h6>

      <div className="flex flex-col md:flex-row items-center gap-8 pt-5 lg:pt-10">
        <a
          href="https://www.linkedin.com/in/doris-paulruth-7053891aa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[384px] h-[107px] flex justify-center items-center rounded-full border-2 border-[#FF8D28] font-semibold text-xl lg:text-2xl hover:bg-[#FF8D28] hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:Pauldoris917@gmail.com"
          className="w-[384px] h-[107px] flex justify-center items-center rounded-full border-2 border-[#FF8D28] font-semibold text-xl lg:text-2xl hover:bg-[#FF8D28] hover:text-white transition"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default Connect;
