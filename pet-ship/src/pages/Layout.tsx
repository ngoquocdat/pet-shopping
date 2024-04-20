import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navigation-bar/NavBar";

export const Layout = () => {
  return (
    <div>
      <main>
        <NavBar />
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
};
