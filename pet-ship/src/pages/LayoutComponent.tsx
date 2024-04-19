import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navigation-bar/NavBar";

export const Layout = () => {
  return (
    <div>
      <header>Header Content</header>
      <main>
        <NavBar />
        <Outlet /> {/* Nested routes render here */}
      </main>
      <footer>Footer Content</footer>
    </div>
  );
};
