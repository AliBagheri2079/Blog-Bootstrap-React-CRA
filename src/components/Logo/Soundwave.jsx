import SoundwaveLogo from "assets/icons/soundwave.svg";
const Soundwave = () => {
  return (
    <div className="soundwave">
      <img
        src={SoundwaveLogo}
        className="soundwave__icon"
        alt="Soundwave SVG Logo"
      />
    </div>
  );
};

export default Soundwave;
