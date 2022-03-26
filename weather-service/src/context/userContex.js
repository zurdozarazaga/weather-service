import React from "react";
import { useReducer } from "react";
import { initialStateUser, UserReducer } from "../reducers/userReducer";
import AppContextUser from "./appContextUser";

const UserProvider = ({ children }) => {
  const [stateUser, dispatchStateUser] = useReducer(
    UserReducer,
    initialStateUser
  );

  return (
    <AppContextUser.Provider
      value={[stateUser, dispatchStateUser, initialStateUser]}
    >
      {children}
    </AppContextUser.Provider>
  );
};

export default UserProvider;
