import React from "react";
import { NavLink } from "react-router-dom";
import LinkItem from "./NavItem";

import "./styles.scss";

interface INavItem {
  path: string;
  label: string;
}

const NavItems: INavItem[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/products",
    label: "Products",
  },
  {
    path: "/login",
    label: "Log in",
  },
];

export const NavBar = () => {
  return (
    <ul className="navigation-bar">
      {NavItems.map((link: INavItem) => {
        return (
          <LinkItem>
            <NavLink to={link.path}>{link.label}</NavLink>
          </LinkItem>
        );
      })}
    </ul>
  );
};
