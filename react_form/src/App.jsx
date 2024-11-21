import React from "react";
import { FormProvider } from "./context/FormContext";
import Head from "./components/Head/Head";
import Formulario from "./components/Head/Formulario/Formulario";
import Card from "./components/Head/Card/Card";

const App = () => {
  return (
    <FormProvider>
      <div>
        <Head />
        <Formulario />
        <Card />
      </div>
    </FormProvider>
  );
};

export default App;
