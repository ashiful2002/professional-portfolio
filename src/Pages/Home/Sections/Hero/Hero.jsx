import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import resume from "../../../../assets/Ashiful_Islam_Mukto_Resume.pdf";
const Hero = () => {
  return (
    <div className="" id="home">
      <div className="hero dark:bg-gray-800 py-16 bg-gray-100 rounded-2xl my-2 shadow-2xl">
        <div className="hero-content flex-col md:flex-row">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <img
              src="https://i.ibb.co/d06bgKdr/Chat-GPT-Image-Jun-30-2025-01-07-46-PM.png"
              className="w-full h-auto rounded-lg shadow-2xl"
              alt="Profile"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Ashiful Aslam Mukto
            </h1>
            <h2 className="text-3xl font-semibold ">
              Web Developer (Front End)
            </h2>
            <a href={resume} download className="btn btn- ">
              Download Resume
            </a>
            <p className="py-6">
              Hello! I am ashiful islam mukto, front end web developer with
              expertise in building responsive, user-friendly, and visually
              appealing web interfaces. Proficient in modern technologies like
              Tailwind CSS, React Bootstrap, JavaScript (JS), and ReactJS, I
              specialize in crafting seamless user experiences and dynamic web
              applications.With a passion for clean, efficient code and a deep
              understanding of design principles, I thrive in translating
              complex ideas into functional, engaging digital products. Whether
              it's optimizing performance, enhancing accessibility, or
              delivering pixel-perfect designs, I am committed to creating web
              solutions that stand out.
            </p>
            {/* social links */}
            <div className="flex gap-4 text-2xl items-center justify-center">
              <a
                href="https://github.com/ashiful2002"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ashiful-mukto-b2b1a9258/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
