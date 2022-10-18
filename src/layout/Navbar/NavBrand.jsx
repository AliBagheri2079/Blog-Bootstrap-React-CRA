import Logo from "assets/icons/yin-yang.svg";
const NavBrand = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="My SVG Logo" />
      <strong className="brand">React Blog</strong>
    </div>
  );
};

export default NavBrand;
