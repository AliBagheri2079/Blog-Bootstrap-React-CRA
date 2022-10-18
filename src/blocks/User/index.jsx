import PersonCircle from "assets/icons/person-circle.svg";
const User = () => {
  return (
    <div className="user">
      <img src={PersonCircle} className="user__avatar" alt="User SVG Logo" />
      <em className="user__name">Ali Bagheri</em>
    </div>
  );
};

export default User;
