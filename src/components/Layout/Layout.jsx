import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import LightWrapper from "../LightWrapper/LightWrapper";
import "./Layout.scss";
export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <main className="window-frame">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
