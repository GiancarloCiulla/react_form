import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";

const Head = () => {
  const { email } = useContext(FormContext); 
  return (
    <header style={{ padding: "10px", textAlign: "center" }}>
      <h1>Bienvenido</h1>
      {email ? <p>Tu email: <strong>{email}</strong></p> : <p>No hay usuario registrado</p>}
    </header>
  );
};

export default Head;
