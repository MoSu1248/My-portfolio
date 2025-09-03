import React, { useEffect, useRef, useState } from "react";
import Hero from "../../sections/hero/HeroSection";
import About from "../../sections/about/About";
import "./Home.scss";
import LightWrapper from "../../components/LightWrapper/LightWrapper";
import { useInView } from "framer-motion";
import Project from "../../sections/projects/projects";
import Contact from "../../sections/contact/Contact";
import Skills from "../../sections/skills/skills";

export default function MainPage() {

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  const [currentSection, setCurrentSection] = useState("hero");

  const isHomeInView = useInView(heroRef, { margin: "-50% 0px -50% 0px" });
  const isAboutInView = useInView(aboutRef, { margin: "-50% 0px -50% 0px" });
  const isSkillsInView = useInView(skillsRef, { margin: "-50% 0px -50% 0px" });
  const isProjectInView = useInView(projectRef, {
    margin: "-50% 0px -50% 0px",
  });
  const isContactInView = useInView(contactRef, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (isHomeInView) setCurrentSection("hero");
  }, [isHomeInView]);

  useEffect(() => {
    if (isAboutInView) setCurrentSection("about");
  }, [isAboutInView]);

  useEffect(() => {
    if (isSkillsInView) setCurrentSection("skills");
  }, [isSkillsInView]);

  useEffect(() => {
    if (isProjectInView) setCurrentSection("project");
  }, [isProjectInView]);
  useEffect(() => {
    if (isContactInView) setCurrentSection("contact");
  }, [isContactInView]);

  return (
    <div className="home">
      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0">
        {/* <LightWrapper currentSection={currentSection} /> */}
      </div>
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Project ref={projectRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}
