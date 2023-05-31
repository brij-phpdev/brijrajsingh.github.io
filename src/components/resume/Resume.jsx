import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `PHP Consultant`,
    jobType: `India | Remote`,
    jobDuration: `Apr 2023 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "M B IT Services & Consulting",
    jobDescription: `Starting from April 2023, I have embarked on constructing my own portfolio, and I take great pleasure in collaborating with businesses that are eager to transform their ideas into captivating online experiences.`,
  },
  {
    jobPosition: `Sr Software Engineer`,
    jobType: `Product | Remote`,
    jobDuration: `Nov 2020 - Nov 2022`,
    timeDuraton: `Full Time`,
    compnayName: "AuthBridge",
    jobDescription: `I have hands-on experience in various technical areas. I have successfully implemented a script that facilitates the closure of verification processes based on configurable parameters. Additionally, I have integrated credit history functionality using the Experian service provider. Moreover, I have developed APIs for Robotic Process Automation (RPA) and have extensive expertise in integrating multiple third-party APIs into systems.`,
  },
  {
    jobPosition: `PHP Team Lead`,
    jobType: `Noida | Onsite`,
    jobDuration: `Jan 2009 - Aug 2019`,
    timeDuraton: `Full Time`,
    compnayName: "OpenSUM - Skysoft IT Services Pvt Ltd",
    jobDescription: ` Developing web applications based on customer requirement(s)`,
  },
];

const educatonContent = [
  {
    passingYear: "2005-2009",
    degreeTitle: "B.Tech in Information Technology",
    instituteName: "Dr. A. P. J. Abdul Kalam Technical University, U.P. formerly UPTU",
  },
  {
    passingYear: "2004-2005",
    degreeTitle: "Intermediate",
    instituteName: "Kendriya Vidyalaya, Mathura",
  },
  {
    passingYear: "2002-2003",
    degreeTitle: "High School",
    instituteName: "Kendriya Vidyalaya, Mathura",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
