import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
// import "../../styles/TableStyle.css";
import { BadgeStatus } from "./BadgeStatus";
import ProyectosDropdown from "./ProyectosDropdown";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

export default function VerTablaProyectos() {
  const navigate = useNavigate();

  const navFacturas = () => {
    navigate("/user/solicitar"); // cambiar ruta
  };
  // Configurar hooks
  const [proyecto, setProyecto] = useState([]);
  const [filterProyecto, setFilterProyecto] = useState([]);

  // Funcion para mostrar datos con fetch
  const URL = "https://retoolapi.dev/GHo2iq/data";
  // const URL = "https://jsonplaceholder.typicode.com/users";
  const getProyectos = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setProyecto(data);
    setFilterProyecto(data);
    // console.log(data);
  };

  // const getProyectos = async () => {
  useEffect(() => {
    getProyectos();
  }, []);

  // Funcion para filtrar datos
  const handleFilter = (e) => {
    const newData = filterProyecto.filter((row) =>
      row.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProyecto(newData);
  };

  // configuracion de columnas
  const columns = [
    {
      name: "ID",
      selector: (row) => row.ID,
      width: "120px",
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.date,
      width: "120px",
      sortable: true,
    },
    {
      name: "Proyecto",
      selector: (row) => row.project,
      sortable: true,
    },
    {
      name: "Descripcion",
      selector: (row) => row.desc,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => <BadgeStatus status={row.status} />,
      width: "120px",
      style: { paddingLeft: "0px" },
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
          <button id="basicButton" onClick={navFacturas}>
            {" "}
            Crear proyecto{" "}
          </button>
        </div>
        <div className="col-8 d-flex justify-content-end">
          <div>
            <div className="d-flex justify-content-end"></div>
            <TextField
              id="outlined-basic"
              label="Buscar"
              variant="standard"
              onChange={handleFilter}
            />
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
