import React from "react";
import { NavLink } from "react-router-dom";
import { randomIntFromInterval } from "../../utils";
import LinkItem from "../../components/navigation-bar/NavItem";

interface IItem {
  id: number;
  name: string;
}

export const Products = () => {
  const items: IItem[] = [
    {
      id: randomIntFromInterval(1, 6),
      name: "Cat food",
    },
    {
      id: randomIntFromInterval(1, 6),
      name: "Dog food",
    },
    {
      id: randomIntFromInterval(1, 6),
      name: "Capybara food",
    },
  ];

  return (
    <div>
      <span>Products</span>
      <ul>
        {items.map((i: IItem) => {
          return (
            <LinkItem className={`${i.name}-${i.id}`}>
              <NavLink to={`/product/${i.id}`}>{i.name}</NavLink>
            </LinkItem>
          );
        })}
      </ul>
    </div>
  );
};
