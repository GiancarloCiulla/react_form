import React, { useContext } from "react";
import { FormContext } from "../../../context/FormContext";

const Card = () => {
  const { userData } = useContext(FormContext); 

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px",
      backgroundColor: "black",
      textAlign: "center"
    }}>
      {userData ? (
        <>
          <h2>Datos del Usuario</h2>
          <p><strong>Nombre:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </>
      ) : (
        <p>No hay datos registrados</p>
      )}
    </div>
  );
};

export default Card;
