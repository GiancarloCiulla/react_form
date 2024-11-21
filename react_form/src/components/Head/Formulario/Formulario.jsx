import React, { useState, useContext } from "react";
import { FormContext } from "../../../context/FormContext";

const Formulario = () => {
  const { setUserData } = useContext(FormContext); // Obtenemos la función para actualizar datos
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData); // Actualizamos el contexto con los datos del formulario
    setFormData({ name: "", email: "" }); // Reiniciamos el formulario
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Nombre:
        </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px" }}
          />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Email:
        </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px" }}
          />
      </div>
      <button type="submit" style={{ padding: "10px 20px" }}>Registrar</button>
    </form>
  );
};

export default Formulario;





























// import React, { useState } from "react";

// const Formulario = () => {
//   const [formData, setFormData] = useState({
//     nombre: "",
//     email: "",
//     urlFoto: "",
//     edad: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Datos del formulario:", formData);
//     alert("Formulario enviado correctamente");
//   };
//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
//       <div style={{ marginBottom: "15px" }}>
//         <label htmlFor="nombre">Nombre:</label>
//         <br />
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={formData.nombre}
//           onChange={handleChange}
//           placeholder="Escribe tu nombre"
//           required
//           style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//         />
//       </div>
//       <div style={{ marginBottom: "15px" }}>
//         <label htmlFor="email">Email:</label>
//         <br />
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Escribe tu email"
//           required
//           style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//         />
//       </div>
//       <div style={{ marginBottom: "15px" }}>
//         <label htmlFor="urlFoto">URL de Foto:</label>
//         <br />
//         <input
//           type="url"
//           id="urlFoto"
//           name="urlFoto"
//           value={formData.urlFoto}
//           onChange={handleChange}
//           placeholder="Pega el enlace de tu foto"
//           style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//         />
//       </div>
//       <div style={{ marginBottom: "15px" }}>
//         <label htmlFor="edad">Edad:</label>
//         <br />
//         <input
//           type="number"
//           id="edad"
//           name="edad"
//           value={formData.edad}
//           onChange={handleChange}
//           placeholder="Escribe tu edad"
//           required
//           style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//         />
//       </div>
//       <button
//         type="submit"
//         style={{
//           backgroundColor: "#007BFF",
//           color: "#fff",
//           border: "none",
//           padding: "10px 15px",
//           cursor: "pointer",
//           width: "100%",
//         }}
//       >
//         Enviar
//       </button>
//     </form>
//   );
// };
// export default Formulario;
