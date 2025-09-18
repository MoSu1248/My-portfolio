import React, { useEffect, useRef, useState } from "react";
import Hero from "../../sections/hero/HeroSection";
import About from "../../sections/about/About";
import "./Home.scss";
import Contact from "../../sections/contact/Contact";
import Skills from "../../sections/skills/skills";
import Assignments from "../../sections/assignsments/assignments";

export default function MainPage() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Assignments />
      <Skills />
      <Contact />
    </div>
  );
}
