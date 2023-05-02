import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
// import "../../styles/TableStyle.css";
// import { BadgeStatus } from "../BadgeStatus";
import ProyectosDropdown from "./ProyectosDropdown";
import { useNavigate } from "react-router-dom";
import { tokenID } from "../../apis/getApiData";

export default function TablaProyectos() {
  const navigate = useNavigate();

  const createProject = () => {
    navigate("/pm/crearproyecto"); // cambiar ruta
  };
  // Configurar hooks
  const [proyecto, setProyecto] = useState([]);

  // Funcion para mostrar datos con fetch
  const getProyectos = async () => {
    const token_res = await tokenID();
    const user_id = token_res.id;
    const url = "http://localhost:3001/projects/" + user_id;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const rawResponse = await fetch(url, options);
    const response = await rawResponse.json();
    console.log(response[0]);
    setProyecto(response);
  };

  // const getProyectos = async () => {
  useEffect(() => {
    getProyectos();
  }, []);

  // configuracion de columnas
  const columns = [
    {
      name: "ID",
      selector: (row) => row.codigoProyecto,
      width: "120px",
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => <ProyectosDropdown />,
      width: "80px",
      style: { paddingLeft: "0.5em" },
    },
  ];

  const paginationTable = {
    rowsPerPageText: "Filas por pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  // mostrar la tabla
  return (
    <div className="container">
      <div className="row my-2 d-flex align-items-end">
        <div className="col-4">
          <button id="basicButton" onClick={createProject}>
            Crear proyecto
          </button>
        </div>
        <div className="col-8 d-flex justify-content-end">
          <div>
            <div className="d-flex justify-content-end"></div>
          </div>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={proyecto}
        pagination
        paginationComponentOptions={paginationTable}
        fixedHeader
      />
    </div>
  );
}
