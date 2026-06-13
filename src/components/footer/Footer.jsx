import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import doris from "../../assets/about1.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToCaseStudies = () => {
    // If already on home → just scroll
    if (location.pathname === "/") {
      document
        .getElementById("case-studies")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Navigate first, then scroll
      navigate("/", { state: { scrollTo: "case-studies" } });
    }
  };

  const goToAboutSection = () => {
    // If already on home → just scroll
    if (location.pathname === "/") {
      document
        .getElementById("about-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Navigate first, then scroll
      navigate("/", { state: { scrollTo: "about-section" } });
    }
  };

  return (
    <footer className="w-full relative z-50">
      {/* TOP BAR */}
      <div className="w-full flex items-center justify-between pt-5 md:pt-2 min-h-16 px-4 md:px-10 text-black-text">
        {/* LOGO */}
        <Link
          to="/"
          className="items-center gap-2 font-medium text-lg hidden md:flex"
        >
          <img src={doris} alt="doris" className="h-8 w-8 rounded-full" />
          <span>Doris Paul</span>
        </Link>

        <Link to="/" className="md:hidden">
          <img src={doris} alt="doris" className="h-8 w-8 rounded-full" />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="flex items-center gap-4 md:gap-7 font-normal md:text-md lg:text-lg">
          <span
            onClick={goToCaseStudies}
            className="hover:text-dark-orange cursor-pointer"
          >
            Case study
          </span>
          <span
            onClick={goToAboutSection}
            className="hover:text-dark-orange cursor-pointer"
          >
            About
          </span>
          <a
            href="https://www.linkedin.com/in/doris-paulruth-7053891aa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dark-orange"
          >
            LinkedIn
          </a>

          <a
            href="mailto:Pauldoris917@gmail.com?subject=Let’s%20Connect"
            target="_self"
            className="hover:text-dark-orange"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
