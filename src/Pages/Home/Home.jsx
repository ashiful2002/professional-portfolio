import React from "react";
import Hero from "./Sections/Hero/Hero";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Sections/Projects/Projects/Projects";
import Contact from "./Sections/Contact/Contact";
import About from "./Sections/About/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
