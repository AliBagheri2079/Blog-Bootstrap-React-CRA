import ChevronCompactLeftLogo from "assets/icons/chevron-compact-left.svg";
const ChevronCompactLeft = () => {
  return (
    <button type="button" className="arrow-key__left">
      <img src={ChevronCompactLeftLogo} alt="ChevronCompactLeft SVG Logo" />
    </button>
  );
};

export default ChevronCompactLeft;
