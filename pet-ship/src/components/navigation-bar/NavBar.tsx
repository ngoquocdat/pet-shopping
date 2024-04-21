import React from "react";
import { NavLink } from "react-router-dom";
import LinkItem from "./NavItem";
import styled from "styled-components";
import { Logo } from "./LogoComponent/Logo";

import "./styles.scss";

interface INavItem {
  path: string;
  label: string;
}

const NavItems: INavItem[] = [
  {
    path: "/",
    label: "Vehicles",
  },
  {
    path: "/type/sport",
    label: "Sport",
  },
  {
    path: "/type/classic",
    label: "Classic",
  },
  // {
  //   path: "/login",
  //   label: "Log in",
  // },
];

const NavContainer = styled.ul`
  height: 50px;
  border-radius: 30px;
  display: flex;
  gap: 20px;
  justify-content: left;
  align-items: center;
  margin-top: 35px;
  background-color: rgb(236, 236, 236)
`

export const NavBar = () => {
  return (
    <>
      <NavContainer className="navigation-bar">
        <Logo />
        {NavItems.map((link: INavItem) => {
          return (
            <LinkItem className="blob-btn">
              <NavLink to={link.path}>{link.label}</NavLink>
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </LinkItem>
          );
        })}
      </NavContainer>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  );
};
