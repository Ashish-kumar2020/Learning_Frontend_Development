import { useState } from "react";
import userContext from "./UserContext";

// children is a generic name used to pass props value to other component
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  return (
    // pass the value which we want to access
    <userContext.Provider value={{ user, setUser, pass, setPass }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
