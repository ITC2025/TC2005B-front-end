import React, { useState, useEffect } from "react";
import "../../styles/PmTable.css";

import { PmTableTravelAll } from "../../components/table/PmTableTravelAll";

export const PmTable = () => {
  const [cliente, setCliente] = useState([]);
  const URL = "https://gorest.co.in/public/v2/users?page=1&per_page=1";
  async function obtenerDatosCliente() {
    const respuesta = await fetch(URL);
    const datosCliente = await respuesta.json();
    setCliente(datosCliente);
    console.log(datosCliente);
  }

  useEffect(() => {
    obtenerDatosCliente();
  }, []);



  return (
    <div className="p-5">
      <div className="row d-flex justify-content-end">
        Saldo del cliente: {cliente.id}
      </div>
      <PmTableTravelAll />
    </div>
  );
};
