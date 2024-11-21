import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); // Datos del usuario
  const [email, setEmail] = useState(""); // Solo el email

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











// import React, { createContext, useState } from 'react';

// // Creamos el contexto
// export const FormContext = createContext();

// // Creamos el proveedor del contexto
// export const FormProvider = ({ children }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     photoUrl: '',
//     age: '',
//   });

//   const updateForm = (name, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <FormContext.Provider value={{ formData, updateForm }}>
//       {children}
//     </FormContext.Provider>
//   );
// };
