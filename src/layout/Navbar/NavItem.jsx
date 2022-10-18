import React from "react";

const NavItem = ({ id, item, path }) => {
  return (
    <React.Fragment key={id}>
      <li className="navbar__item">
        <a href={path} className="link">
          {item}
        </a>
      </li>
    </React.Fragment>
  );
};

export default NavItem;
