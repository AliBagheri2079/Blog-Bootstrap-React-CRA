import React from "react";
import PropTypes from "prop-types";

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

NavItem.propTypes = {
  id: PropTypes.number,
  item: PropTypes.string,
  path: PropTypes.string,
};

export default NavItem;
