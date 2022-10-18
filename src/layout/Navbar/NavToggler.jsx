import FilterRight from "assets/icons/filter-right.svg";
const NavToggler = () => {
  return (
    <button className="navbar__toggler__btn">
      <img
        src={FilterRight}
        className="toggler-icon"
        alt="Navbar Toggler Icon"
      />
    </button>
  );
};

export default NavToggler;
