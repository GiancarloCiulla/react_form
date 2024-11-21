import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); 
  const [email, setEmail] = useState(""); 

  // Actualiza ambos estados
  const setUserDataHandler = (data) => {
    setUserData(data);
    setEmail(data.email);
  };

  return (
    <FormContext.Provider value={{ userData, email, setUserData: setUserDataHandler }}>
      {children}
    </FormContext.Provider>
  );
};





