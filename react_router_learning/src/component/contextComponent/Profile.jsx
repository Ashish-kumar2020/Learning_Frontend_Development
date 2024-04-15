import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Profile = () => {
  const { user, pass } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return (
    <>
      <div>
        Welcome {user.userName} {pass.password}
      </div>
    </>
  );
};

export default Profile;
