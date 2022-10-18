import React from "react";

import LinkedIn from "assets/icons/linkedin.svg";
import Twitter from "assets/icons/twitter.svg";
import Github from "assets/icons/github.svg";
import StackOverflow from "assets/icons/stack-overflow.svg";

const NavIcon = () => {
  const navIconsList = [
    {
      id: Math.random() * (Math.random() + 0.3),
      item: Twitter,
    },
    {
      id: Math.random() * (Math.random() + 0.3),
      item: LinkedIn,
    },
    {
      id: Math.random() * (Math.random() + 0.3),
      item: Github,
    },
    {
      id: Math.random() * (Math.random() + 0.3),
      item: StackOverflow,
    },
  ];

  return (
    <>
      {navIconsList.map(({ id, item }) => (
        <li key={id} className="navbar__icon">
          <img src={item} alt={`${item} SVG Logo`} />
        </li>
      ))}
    </>
  );
};

export default NavIcon;
