import React, { createContext, useState, useContext } from "react";

const RBACContext = createContext();

export const useRBAC = () => useContext(RBACContext);

export const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  return (
    <RBACContext.Provider value={{ users, setUsers, roles, setRoles }}>
      {children}
    </RBACContext.Provider>
  );
};
