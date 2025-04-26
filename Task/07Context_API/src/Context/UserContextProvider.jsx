import React from "react";
import UserContext from "../Context/UserContext";

//children means all the components that are wrapped
//inside the UserContextProvider component
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
