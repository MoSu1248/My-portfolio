import React, { useRef, useEffect, useContext } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { AppState } from "../AppStateProvider/AppStateProvider";
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

  return (
    <div className="layout">
      <Header />
      <Navbar scrollTo={scrollTo} />
      <main className="window-frame" ref={containerRef}>
        <div className="scroll-wrapper">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
