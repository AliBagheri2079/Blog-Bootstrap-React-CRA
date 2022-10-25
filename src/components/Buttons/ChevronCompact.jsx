import ChevronCompactLogo from "assets/icons/chevron-compact.svg";

const ChevronCompact = ({ slideImage }) => {
  return (
    <button type="button" className="arrow-keys" onClick={() => slideImage()}>
      <img src={ChevronCompactLogo} alt="ChevronCompact SVG Logo" />
    </button>
  );
};

export default ChevronCompact;
