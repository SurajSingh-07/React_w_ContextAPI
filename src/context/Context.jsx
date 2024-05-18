import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setusers] = useState([
    { id: 0, username: "Nancy", city: "Jabalpur" },
    { id: 1, username: "Suraj", city: "Birsinghpur" },
    { id: 2, username: "Shubham", city: "Ghulghuli" },
  ]);

  // console.log(props);
  return (
    <UserContext.Provider value={{ users, setusers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
