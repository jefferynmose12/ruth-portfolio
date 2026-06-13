import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import doris from "../../assets/about1.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [open, setOpen] = useState(false);
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

    setOpen(false);
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

    setOpen(false);
  };

  return (
    <header className="w-full relative z-50">
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
        <div className="hidden md:flex items-center gap-7 font-normal text-md lg:text-lg">
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
            onClick={() => setOpen(false)}
            className="hover:text-dark-orange"
          >
            LinkedIn
          </a>

          <a
            href="mailto:Pauldoris917@gmail.com"
            onClick={() => setOpen(false)}
            className="hover:text-dark-orange"
          >
            Email
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden absolute top-full left-0 w-full bg-white
          border-t border-gray-200
          transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
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
            onClick={() => setOpen(false)}
            className="hover:text-dark-orange"
          >
            LinkedIn
          </a>

          <a
            href="mailto:Pauldoris917@gmail.com"
            onClick={() => setOpen(false)}
            className="hover:text-dark-orange"
          >
            Email
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
