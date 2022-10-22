import NavBrand from "./NavBrand";
import NavToggler from "./NavToggler";
import NavItem from "./NavItem";
import NavIcon from "./NavIcon";
import React from "react";

const navItemsList = [
  {
    id: Math.random() * (Math.random() / 0.5),
    item: "home",
    path: "/home",
  },
  {
    id: Math.random() * (Math.random() / 0.5),
    item: "about",
    path: "/about",
  },
  {
    id: Math.random() * (Math.random() / 0.5),
    item: "blog",
    path: "/blog",
  },
  {
    id: Math.random() * (Math.random() / 0.5),
    item: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const handleNavbarToggle = () => setShowNavbar(!showNavbar);

  return (
    <nav className="navbar">
      {/* Navbar Branding */}
      <div className="navbar__brand">
        <NavBrand />
      </div>
      {/* Navbar Toggler Icon */}
      <div className="navbar__toggler" onClick={handleNavbarToggle}>
        <NavToggler />
      </div>
      {/* Navbar Items */}
      <menu
        className="nav-list--wrapper"
        style={{ display: showNavbar && "inherit" }}
      >
        {navItemsList.map(({ id, item, path }) => (
          <NavItem id={id} item={item} path={path} />
        ))}
        {/* Navbar Icons list */}
        <li className="navbar__item">
          <ul className="nav-icon--wrapper">
            <NavIcon />
          </ul>
        </li>
      </menu>
    </nav>
  );
};

export default Navbar;
