import { useState } from "react";

import { Divider, Heading, TechCard, TechHeading } from "./Common/Common";

import Projects from "./pages/Projects";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import SkillTechStack from "./pages/SkillTechStack";
import ProjectApp from "./pages/ProjectApp";
import Experience from "./pages/Experience";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <Hero />
      <Divider />

      <AboutMe />
      <Divider />

      <SkillTechStack />
      <Divider />

      <ProjectApp />
      <Divider />

      <Experience />
      <Divider />

      <ContactMe />

    </>
  );
}

export default App;
