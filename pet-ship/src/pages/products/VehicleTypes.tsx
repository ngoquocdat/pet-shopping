import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { randomIntFromInterval } from "../../utils";
import LinkItem from "../../components/navigation-bar/NavItem";

interface IItem {
  id: number;
  name: string;
}

export const VehicleTypes = () => {

  const {type} = useParams();
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

  useEffect(() => {
    console.log('vehicle types: ', type)
  }, [type])

  return (
    <div>
      <ul>
        {items.map((i: IItem) => {
          return (
            <LinkItem className={`${i.name}-${i.id}`}>
              <NavLink to={`/vehicle/${i.id}`}>{i.name}</NavLink>
            </LinkItem>
          );
        })}
      </ul>
    </div>
  );
};
