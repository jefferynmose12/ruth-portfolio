import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
//import Home from "../../screen/home/Home";
import Projects from "../../screen/projects/Projects";
import ProjectsDetails from "../../screen/projects/ProjectsDetails";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 2000,
  easing: "ease",
  once: false,
  mirror: false,
});

function Main() {
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-[1800px]">
        <Routes>
          {/* <Route path="/about" element={<Home />} /> */}
          <Route index path="/" element={<Projects />} />
          <Route path="/details/:id" element={<ProjectsDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;
