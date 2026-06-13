import React, { useEffect, useRef } from "react";
import NavBar from "../../components/navBar/NavBar";
import { Link, useLocation } from "react-router-dom";
import data from "../../assets/data.json";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import quoteIcon from "../../assets/quote.png";
import { RxChevronRight } from "react-icons/rx";
import Footer from "../../components/footer/Footer";
import useTypewriter from "../../hooks/useTypewriter";
import Connect from "../../components/connect";

const textArr1 = [
  "As a dedicated product designer who loves turning complex problems into clean, elegant, user-friendly solutions. My approach blends creativity with strategic thinking; I don't just make things look pretty, I make them work better for people.",
  "With 5 years of experience, I've had the chance to work on everything from early startups to global platforms. I get a kick out of diving deep into user research, sketching out ideas, and collaborating with developers & QAs to bring designs to life. I love collaborating with diverse teams and believe that the best products come from a mash-up of different perspectives.",
];

const textArr2 = [
  "As a curious person, I like digging into topics like growth hacking and behavioural psychology, and in the recent years I've been using LLMs and AI to expand my toolset.",
  "When I'm not designing, you might find me tinkering with new design tools and documenting countries which I’d like to visit. I bring that same curiosity and passion to my work, always looking for fresh perspectives and innovative solutions.",
];

const Projects = () => {
  const { pathname } = useLocation();
  const carouselRef = useRef(null);
  const isHovered = useRef(false);
  const loopData = [...data, ...data, ...data, ...data, ...data, ...data];

  const animatedWord = useTypewriter([
    "ethical",
    "accessible",
    "scalable",
    "intuitive",
    "impactful",
  ]);

  const scrollNext = () => {
    const el = carouselRef.current;
    if (!el) return;

    const card = el.querySelector("a");
    if (!card) return;

    const cardWidth = card.offsetWidth + 24;

    el.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (isHovered.current) return;

      const card = el.querySelector("a");
      if (!card) return;

      const cardWidth = card.offsetWidth + 24;

      el.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full overflow-hidden">
      <NavBar />
      <div className="px-4 md:px-10 mb-32 md:mb-60">
        <div
          data-aos="fade-up"
          className="w-full lg:w-[95%] 2xl:w-[80%] px-4 md:px-20 lg:px-32 mt-20 md:mt-24 lg:mt-48 text-2xl md:text-3xl lg:text-5xl font-normal md:leading-tight font-baskervville text-fade-grey"
        >
          <h1 className="leading-tight">
            Hey! I'm{" "}
            <span className="text-black-text font-semibold italic">Doris</span>,
            a SaaS product designer who turns user insights into{" "}
            <span className="text-dark-orange inline-block min-w-[70px] md:min-w-[100px] lg:min-w-[140px]">
              {animatedWord}
              <span className="animate-pulse">|</span>
            </span>{" "}
            product solutions. I help B2B and B2C startups solve complex
            problems by aligning user needs with business goals and growth. I
            thrive in ambiguity, taking products from 0→1 and beyond.
          </h1>
        </div>

        <div id="case-studies" className="py-10 md:my-16 relative">
          <div
            ref={carouselRef}
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
            className="
              flex gap-4 md:gap-6
              overflow-x-auto pb-6 pl-4
              scrollbar-hide snap-x snap-mandatory scroll-smooth
            "
          >
            {loopData.map(({ preview, id, shortText, previewmb }, i) => (
              <Link
                key={`${id}-${i}`}
                to={`/details/${id}`}
                className="
                  shrink-0 snap-start
                  w-[92%] sm:w-[85%] md:w-[70%] lg:w-[60%]
                  min-h-[380px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[380px] xl:min-h-[480px] 2xl:min-h-[580px]
                  rounded-2xl md:rounded-[30px]
                  overflow-hidden relative
                  border border-gray-200
                  flex flex-col lg:flex-row
                  bg-white
                "
              >
                {/* TEXT SIDE */}
                <div
                  className="
                  bg-[#fffdeb]
                  w-full lg:w-[45%]
                  p-5 sm:p-6 md:p-10 lg:p-10 2xl:p-14 pb-20 lg:pb-0
                  flex 
                "
                >
                  <p
                    className="
                      text-md md:text-lg lg:text-2xl
                      leading-relaxed md:leading-8
                      text-black max-w-[80%] lg:max-w-[95%]
                    "
                  >
                    {shortText}
                  </p>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative w-full lg:w-[55%] aspect-[4/3] lg:aspect-auto">
                  <img
                    src={require(`../../assets/${preview}.png`)}
                    alt="preview-img"
                    className="hidden lg:flex absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    src={require(`../../assets/${previewmb}.png`)}
                    alt="preview-img"
                    className="lg:hidden w-full h-full object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* NEXT BUTTON */}
          <button
            onClick={scrollNext}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 bg-[#FFFDEB]
               hover:bg-white
              w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16
              rounded-full flex items-center justify-center
              shadow-lg z-20
              border-2 border-dark-orange
            "
          >
            <RxChevronRight className="w-7 h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 text-dark-orange" />
          </button>
        </div>
        <div id="about-section">
          <div
            data-aos="fade-out"
            className="flex flex-col gap-5 md:gap-7 pt-8 md:pt-14 px-4 md:px-20 lg:px-32 text-black text-lg md:text-2xl font-medium leading-6 md:leading-7"
          >
            {textArr1.map((text, i) => (
              <h6 key={i}>{text}</h6>
            ))}
          </div>

          <div className="md:px-0 flex flex-col md:flex-row md:items-center gap-2 lg:gap-5 mt-10 md:mt-16 mb-8">
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

          <div
            data-aos="fade-out"
            className="flex flex-col gap-5 md:gap-7 mt-8 md:mt-14 px-4 md:px-20 lg:px-32 text-black text-lg md:text-2xl font-medium leading-6 md:leading-7"
          >
            {textArr2.map((text, i) => (
              <h6 key={i}>{text}</h6>
            ))}
          </div>
        </div>

        {/* Quotes from Peers */}
        <div
          data-aos="fade-up"
          className="mt-10 md:mt-20 px-4 md:px-20 lg:px-32"
        >
          {/* Section Title */}
          <h2 className="font-baskervville font-medium text-2xl md:text-4xl text-black mb-10">
            Quotes from Peers
          </h2>

          {/* Quotes Grid */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="flex flex-col gap-6"
            >
              {[
                {
                  text: `Doris sets a pace that genuinely raises the bar for everyone around her. She picks up briefs quickly, asks the right questions upfront and delivers work that is polished and implementation-ready in timeframes that would take most designers significantly longer.`,
                  author: "Joe",
                  company: "StartupOs",
                },
                {
                  text: `Such a rare combination of skills: she asks smart questions, thinks deeply about the problem, and builds prototypes thorough enough to significantly reduce implementation time. Her feedback is always balanced and constructive.`,
                  author: "Lucy",
                  company: "Commandlink",
                },
              ].map((quote, i) => (
                <div
                  key={i}
                  className="bg-[#FFF3E6] rounded-2xl p-6 md:p-8 flex flex-col gap-4 flex-1"
                >
                  {/* Quote mark */}
                  <div className="w-8">
                    <img src={quoteIcon} alt="quote mark" className="" />
                  </div>

                  {/* Quote text */}
                  <p className="text-base md:text-lg xl:text-xl font-semibold leading-relaxed text-black max-w-[90%]">
                    {quote.text}
                  </p>

                  {/* Author */}
                  <span className="text-sm text-black/70 md:text-lg mt-auto">
                    <span className="text-black font-medium">
                      {quote.author},
                    </span>{" "}
                    {quote.company}
                  </span>
                </div>
              ))}
            </div>

            <div
              data-aos="fade-down"
              data-aos-delay="150"
              className="flex flex-col gap-6"
            >
              {[
                {
                  text: `Doris was one of those teammates who made the whole team better. She delivered strong design and UX work consistently, managed her time exceptionally well, and had a real gift for keeping people calm and productive when deadlines got tight.`,
                  author: "Paul",
                  company: "PayPower",
                },
                {
                  text: "Colleagues across the team have consistently praised the quality of her designs, her communication, reliability and the trustworthiness she brings to every delivery.",
                  author: "Ore",
                  company: "WeCollect",
                },
                {
                  text: `We were fortunate to have her on the team and I look forward to working with her again.`,
                  author: "Abdullah",
                  company: "Sygma.io",
                },
              ].map((quote, i) => (
                <div
                  key={i}
                  className="bg-[#FFF3E6] rounded-2xl p-6 md:p-8 flex flex-col gap-4"
                >
                  {/* Quote mark */}
                  <div className="w-8">
                    <img src={quoteIcon} alt="quote mark" className="" />
                  </div>

                  {/* Quote text */}
                  <p className="text-base md:text-lg xl:text-xl font-semibold leading-relaxed text-black max-w-[90%]">
                    {quote.text}
                  </p>

                  {/* Author */}
                  <span className="text-sm text-black/70 md:text-lg mt-auto">
                    <span className="text-black font-medium">
                      {quote.author},
                    </span>{" "}
                    {quote.company}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Connect />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
