import React, { useEffect, useRef, useState } from "react";
import Hero from "../../sections/hero/HeroSection";
import About from "../../sections/about/About";
import "./Home.scss";
import Project from "../../sections/projects/Project";
import Contact from "../../sections/contact/Contact";
import Skills from "../../sections/skills/skills";

export default function MainPage() {

  return (
    <div className="home">
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}
