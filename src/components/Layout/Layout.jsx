import React, { useRef, useEffect, useContext } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { AppState } from "../AppStateProvider/AppStateProvider";
import { motion } from "framer-motion";
import ParticleLayer from "../Particles/ParticleLayer";
import "./Layout.scss";

export default function Layout() {
  const containerRef = useRef(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const { lightboxOpen } = useContext(AppState);

  const lerp = 0.04;
  const wheelMultiplier = 1.5;

  const lightboxOpenRef = useRef(lightboxOpen);
  useEffect(() => {
    lightboxOpenRef.current = lightboxOpen;
  }, [lightboxOpen]);

  const scrollTo = (y) => {
    if (!containerRef.current) return;
    const max =
      containerRef.current.scrollHeight - containerRef.current.clientHeight;
    targetRef.current = Math.max(0, Math.min(y, max));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    targetRef.current = container.scrollTop;
    currentRef.current = container.scrollTop;

    const clamp = (value) =>
      Math.max(
        0,
        Math.min(value, container.scrollHeight - container.clientHeight)
      );

    const onWheel = (e) => {
      if (lightboxOpenRef.current) return;
      targetRef.current += e.deltaY * wheelMultiplier;
      targetRef.current = clamp(targetRef.current);
      e.preventDefault();
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    const animate = () => {
      currentRef.current += (targetRef.current - currentRef.current) * lerp;
      container.scrollTo(0, currentRef.current);
      requestAnimationFrame(animate);
    };

    animate();

    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const windowFrame = document.querySelector(".window-frame");
      if (windowFrame) {
        windowFrame.classList.add("show-scrollbar");
      }
    }, 5000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <motion.div className="layout">
      <ParticleLayer />
      <Header />
      <Navbar scrollTo={scrollTo} />
      <motion.main className="window-frame" ref={containerRef}>
        <div className="scroll-wrapper">
          <Outlet />
        </div>
      </motion.main>
      <div className="right-border" />
      <Footer scrollTo={scrollTo} />
    </motion.div>
  );
}
