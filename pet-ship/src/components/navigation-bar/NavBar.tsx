import React from "react";
import { NavLink } from "react-router-dom";
import LinkItem from "./NavItem";

import "./styles.scss";
import styled from "styled-components";

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
  {
    path: "/login",
    label: "Log in",
  },
];

const NavContainer = styled.ul`
  width: 100%;
  height: 50px;
  border: solid 1px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  justify-content: left;
  align-items: center;
`
export const NavBar = () => {
  return (
    <NavContainer className="navigation-bar">
      {NavItems.map((link: INavItem) => {
        return (
          <LinkItem>
            <NavLink to={link.path}>{link.label}</NavLink>
          </LinkItem>
        );
      })}
    </NavContainer>
  );
};
