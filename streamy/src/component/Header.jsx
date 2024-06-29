import Logo from "../assets/youtube-svgrepo-com.svg";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img className="w-[75px]" src={Logo} alt="" />
      </div>
      <div>
        <input className="border border-gray-950" type="text" name="" id="" />
      </div>
      <div className="flex justify-between">
        <ul>
          <li>Live</li>
          <li>Notification</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
