import React, { useState, useEffect } from "react";
import "../../styles/PmTable.css";

import { PmTableTravelAll } from "../../components/table/PmTableTravelAll";

export const PmTable = () => {
  const [datosCliente, setDatosCliente] = useState(null);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users?page=1&per_page=1")
      .then((response) => response.json())
      .then((data) => {
        setDatosCliente(data);
        console.log(data);
      });
  }, []);

  if (!datosCliente) {
    return <div>Cargando...</div>;
  }



  return (
    <div className="p-5">
      <div className="row d-flex justify-content-end">
        <div>SALDO DISPONIBLE: {datosCliente.id}</div>
      </div>

      <PmTableTravelAll />
    </div>
  );
};
