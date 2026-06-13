import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import { useLocation, useParams } from "react-router-dom";
import data from "../../assets/data.json";
import Connect from "../../components/connect";

const ProjectsDetails = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const findItem = data.find((item) => item.id === Number(id));
    setProject(findItem);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const renderHeder = () => {
    const textId = Number(id);

    if (textId === 2)
      return (
        <h2 className="leading-tight">
          From a disconnected data tool to a unified platform. How I diagnosed a
          fragmented platform and turned into a comprehensive platform that
          provides intuitive solution for field data collection.
        </h2>
      );

    if (textId === 3)
      return (
        <h2 className="leading-tight">
          A smart app designed to help users take control of their money through
          budget tracking, investment visibility and a rewards system that turns
          good financial habits into tangible benefits.
        </h2>
      );

    if (textId === 4)
      return (
        <h2 className="leading-tight">
          An interactive and accessible e-learning experience that empowers
          learners.
        </h2>
      );

    return (
      <h2 className="leading-tight">
        An innovation solution that integrates key CRM features into a system
        platform.
      </h2>
    );
  };

  return (
    <div className="w-full overflow-hidden">
      <NavBar />
      <div className="px-4 md:px-10 mb-20">
        <div
          data-aos="fade-up"
          className="lg:px-28 w-[95%] md:w-[85%] 2xl:w-[75%] mt-16 md:mt-20 xl:mt-32 2xl:mt-48 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-normal md:leading-tight text-fade-grey"
        >
          {renderHeder()}
        </div>

        {project && (
          <div className="my-7 md:my-10 lg:my-16 w-full">
            <div
              data-aos="zoom-in"
              style={{
                backgroundImage:
                  "linear-gradient(147.85deg, #CDF9D1 0%, #F9D889 47.34%, #F89180 100%)",
              }}
              className="flex justify-center items-center p-5 md:p-14 lg:p-24 rounded-xl lg:rounded-[30px]"
            >
              <img
                src={require(`../../assets/${project?.image}.png`)}
                alt="img"
                className={`${
                  project?.adjust ? "w-[35%] lg:w-auto" : "w-auto"
                }`}
              />
            </div>
          </div>
        )}

        <div className="lg:px-32 mt-8 mb-2 lg:my-12 text-fade-grey">
          <h5
            data-aos="fade-right"
            className="text-black-text font-baskervville italic font-normal text-2xl md:text-3xl"
          >
            {project?.name}
          </h5>
          <div className="mt-5 border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey md:text-lg lg:text-xl font-normal">
            <div
              data-aos="fade-right"
              className="md:flex-1 w-[30%] md:w-auto font-semibold font-baskervville"
            >
              <h6>
                {project?.id === 4
                  ? "Research Findings"
                  : "The Problem (Research Findings)"}
              </h6>
            </div>

            <div data-aos="fade-left" className="md:flex-1 w-[65%] md:w-auto">
              <h6>{project?.research}</h6>
            </div>
          </div>

          <div className="border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey md:text-lg lg:text-xl font-normal">
            <div
              data-aos="fade-right"
              className="md:flex-1 w-[30%] md:w-auto font-semibold font-baskervville"
            >
              <h6>{project?.id === 4 ? "Tasks" : "My Role"}</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <ul
                data-aos="fade-left"
                className="list-disc flex flex-col gap-3 md:ml-5"
              >
                {project?.tasks?.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* <div className="border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
            <div
              data-aos="fade-right"
              className="md:flex-1 w-[30%] md:w-auto font-semibold"
            >
              <h6>About Project</h6>
            </div>

            <div
              data-aos="fade-left"
              className="md:flex-1 w-[65%] md:w-auto text-pretty"
            >
              <h6>{project?.about}</h6>
            </div>
          </div> */}
        </div>

        {project && (
          <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10 justify-between">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(147.85deg, #E9C9E8 0%, #E9A3C6 32.08%, #D271A7 47.34%, #6C3AA5 100%)",
              }}
              className="flex-1 w-full p-5 xl:p-10 rounded-xl xl:rounded-[30px] flex items-center justify-center"
              data-aos="fade-right"
            >
              <img
                src={require(`../../assets/${project?.firstimg}.png`)}
                alt="detail"
                className={`${
                  project?.adjust ? "w-[35%] lg:w-auto" : "w-auto"
                }`}
              />
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(147.85deg, #E9C9E8 0%, #E9A3C6 32.08%, #D271A7 47.34%, #6C3AA5 100%)",
              }}
              className="flex-1 w-full p-5 xl:p-10 rounded-xl xl:rounded-[30px] flex items-center justify-center"
              data-aos="fade-left"
            >
              <img
                src={require(`../../assets/${project?.secondimg}.png`)}
                alt="detail"
                className={`${
                  project?.adjust ? "w-[35%] lg:w-auto" : "w-auto"
                }`}
              />
            </div>
          </div>
        )}

        <div className="lg:px-32 mt-5 mb-2 lg:my-12">
          <div className="mt-5 border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey md:text-lg lg:text-xl font-normal">
            <div
              data-aos="fade-right"
              className="md:flex-1 w-[30%] md:w-auto font-semibold font-baskervville"
            >
              <h6>{id === "1" ? "The Goal" : "About Project"}</h6>
            </div>

            <div data-aos="fade-left" className="md:flex-1 w-[65%] md:w-auto">
              <h6>{id === "1" ? project?.goal : project?.about}</h6>
            </div>
          </div>

          {project?.id === 4 && (
            <div className="border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey md:text-lg lg:text-xl font-normal">
              <div
                data-aos="fade-right"
                className="md:flex-1 w-[30%] md:w-auto font-semibold font-baskervville"
              >
                <h6>Final Designs</h6>
              </div>

              <div className="md:flex-1 w-[65%] md:w-auto">
                <ul
                  data-aos="fade-left"
                  className="list-disc flex flex-col gap-3 md:ml-5"
                >
                  {project?.final?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {project?.id === 2 && project?.thirdimg && project?.fourthimg && (
          <div className="md:my-16 p-5 md:p-10 lg:p-20 w-full flex flex-col md:flex-row items-center justify-center gap-5 bg-light-pink rounded-xl md:rounded-3xl">
            <div className="flex flex-col gap-2 md:gap-5">
              <span className="italic font-baskervville text-lg md:text-2xl">
                Current Design
              </span>
              <img
                src={require(`../../assets/${project?.thirdimg}.png`)}
                alt="img-sketch"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-5">
              <span className="italic font-baskervville text-xl md:text-2xl">
                New Design
              </span>
              <img
                src={require(`../../assets/${project?.fourthimg}.png`)}
                alt="img-sketch"
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* {project && project?.mobilefirst && (
          <div className="my-7 md:my-10 lg:my-16 w-full">
            <div className="">
              <img
                src={require(`../../assets/${project?.mobilefirst}.png`)}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
        )} */}

        {/* {project && project?.features && (
          <div className="mb-7 md:mb-0 lg:px-32">
            <div className="lg:py-5 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
              <div className="md:flex-1 w-[30%] md:w-auto font-semibold">
                <h6>Proposed Features</h6>
              </div>

              <div className="md:flex-1 w-[65%] md:w-auto">
                <ul className="list-disc flex flex-col gap-3 md:ml-5">
                  {project?.features?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )} */}

        {project?.id === 3 && project?.mobilesec && (
          <div className="md:mt-10 lg:mt-20 w-full">
            <div className="">
              <img
                src={require(`../../assets/${project?.mobilesec}.png`)}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
        )}

        {project?.id === 3 && project?.mobilethird && (
          <div className="md:mt-10 lg:mt-20 w-full">
            <div className="">
              <img
                src={require(`../../assets/${project?.mobilethird}.png`)}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* {project && project?.middle && (
          <div className="my-4 md:my-10 lg:my-16 w-full">
            <div className="">
              <img
                src={require(`../../assets/${project?.middle}.png`)}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
        )} */}

        {/* {project?.goal && (
          <div className="mt-5 mb-3 lg:px-32">
            <div className="lg:py-5 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
              <div className="md:flex-1 w-[30%] md:w-auto font-semibold">
                <h6>The Goal</h6>
              </div>

              <div className="md:flex-1 w-[65%] md:w-auto">
                <p>{project?.goal}</p>
              </div>
            </div>
          </div>
        )} */}

        {project?.id === 1 && project?.goalImg && (
          <div className="my-4 md:my-10 lg:my-16 w-full">
            <div className="">
              <img
                src={require(`../../assets/${project?.goalImg}.png`)}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
        )}

        {project?.journey && (
          <div className="mt-5 mb-3 lg:px-32">
            <div className="lg:py-5 flex justify-between text-medium-grey md:text-lg lg:text-xl font-normal">
              <div className="md:flex-1 w-[30%] md:w-auto font-semibold font-baskervville">
                <h6>User Journey</h6>
              </div>

              <div className="md:flex-1 w-[65%] md:w-auto">
                <h3>{project.journey}</h3>
                <ul className="mt-1 list-disc flex flex-col gap-3 md:ml-5">
                  {project?.journeys?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* {project?.personnal && (
          <div className="mt-5 mb-3 lg:px-32">
            <div className="lg:py-5 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
              <div className="md:flex-1 w-[30%] md:w-auto font-semibold">
                <h6>User Persona</h6>
              </div>

              <div className="md:flex-1 w-[65%] md:w-auto">
                <p>{project?.personnal}</p>
              </div>
            </div>
          </div>
        )} */}

        {/* {project && project?.lowFiImg && (
          <div className="md:my-16 p-5 md:p-10 lg:p-20 w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 bg-light-pink rounded-xl md:rounded-3xl">
            {project?.lowFiImg.map((img) => (
              <div key={img} className="">
                <img
                  src={require(`../../assets/${img}.png`)}
                  alt={img}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        )} */}

        {/* {project?.lowFi && (
          <div className="mt-5 mb-3 lg:px-32">
            <div className="lg:py-5 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
              <div className="md:flex-1 w-[30%] md:w-auto font-semibold">
                <h6>Low-Fi Wireframes</h6>
              </div>

              <div className="md:flex-1 w-[65%] md:w-auto">
                <p>{project?.lowFi}</p>
              </div>
            </div>
          </div>
        )} */}

        {project?.id === 1 && project?.design && (
          <div className="mt-3 mb-3 lg:px-32">
            <div className="lg:py-5 flex justify-between text-medium-grey md:text-lg lg:text-xl font-normal">
              <div className="md:flex-1 w-[30%] md:w-auto font-semibold font-baskervville">
                <h6>Design System</h6>
              </div>

              <div className="md:flex-1 w-[65%] md:w-auto">
                <p>{project?.design}</p>
              </div>
            </div>
          </div>
        )}

        {/* {project && project?.systemImg && (
          <div className="my-4 md:my-10 lg:my-16 w-full">
            <div className="">
              <img
                src={require(`../../assets/${project?.systemImg}.png`)}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
        )} */}

        {project && project?.designImg && (
          <div className="md:my-16 p-5 md:p-10 lg:p-20 w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 bg-light-pink rounded-xl md:rounded-3xl">
            {project?.designImg.map((img) => (
              <div key={img} className="">
                <img
                  src={require(`../../assets/${img}.png`)}
                  alt={img}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        )}

        {/* {project?.former && (
          <div className="mt-5 mb-3 lg:px-32">
            <div className="lg:py-5 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
              <div className="md:flex-1 w-[30%] md:w-auto font-semibold">
                <h6>Former Design</h6>
              </div>

              <div className="md:flex-1 w-[65%] md:w-auto">
                <p>{project?.former}</p>
              </div>
            </div>
          </div>
        )} */}

        {/* {project && project?.formerImg && (
          <div className="md:my-16 p-5 md:p-10 lg:p-20 w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 bg-light-pink rounded-xl md:rounded-3xl">
            {project?.formerImg.map((img) => (
              <div key={img} className="">
                <img
                  src={require(`../../assets/${img}.png`)}
                  alt={img}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        )} */}

        {project?.id !== 4 && (
          <div className="mt-5 mb-3 lg:px-32">
            <div className="lg:py-5 flex justify-between text-medium-grey gap-5 md:gap-0 md:text-lg lg:text-xl font-normal">
              <div className="md:flex-1 w-[30%] md:w-auto font-semibold font-baskervville">
                <h6>Final Designs</h6>
              </div>

              <div className="md:flex-1 w-[65%] md:w-auto">
                <ul className="list-disc flex flex-col gap-3 md:ml-5">
                  {project?.final?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {project?.sub.length && (
          <div>
            {project?.sub.map((img, i) => (
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(147.85deg, #D9E5EB 0%, #EDBDE9 47.34%, #B189F1 100%)",
                }}
                className="my-5 md:my-16 flex justify-center items-center p-5 md:p-14 lg:p-24 rounded-xl lg:rounded-[30px]"
                key={i}
              >
                <img
                  src={require(`../../assets/${img}.png`)}
                  alt="img"
                  className={`${
                    project?.adjust ? "w-[35%] lg:w-auto" : "w-auto"
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        <div className="lg:px-32">
          <div className="lg:py-5 flex justify-between text-medium-grey md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto font-semibold font-baskervville">
              <h6>Outcome</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <p className="list-disc flex flex-col gap-4">
                {project?.outcome}
              </p>
            </div>
          </div>
        </div>

        {project?.notice && (
          <section className="mt-12 bg-[#FFF6D3] border-l-8 border-rose-500 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {project?.notice?.map(({ quote, tag }) => (
                <div className="space-y-4 font-baskervville flex flex-col justify-between">
                  <p className="text-black text-md lg:text-xl font-semibold">
                    "{quote}"
                  </p>
                  <p className="text-[#FF383C] text-md lg:text-xl font-semibold ">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <Connect />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsDetails;
