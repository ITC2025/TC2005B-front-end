import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import ProyectosDropdown from "./ProyectosDropdown";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { tokenID } from "../../apis/getApiData";
import TextField from "@mui/material/TextField";

export default function TablaProyectos() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const createProject = () => {
    navigate("/pm/crearproyecto"); // cambiar ruta
  };
  // Configurar hooks
  const [proyecto, setProyecto] = useState([]);
  const [filterProject, setFilterProject] = useState([]);

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
    setProyecto(response);
    setFilterProject(response);
  };

  useEffect(() => {
    getProyectos();
  }, []);

  //Funcion para filtrar datos
  const handleFilter = (e) => {
    const newData = filterProject.filter((row) =>
      row.descripcion.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setProyecto(newData);
  };

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
      name: "Descripción",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => <ProyectosDropdown codigoproyecto={row.codigoProyecto} />,
      width: "100px",
      style: { paddingLeft: "0.5em" },
    },
  ];

  const paginationTable = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  // mostrar la tabla
  return (
    <div className="container">
      <h1 id="HeaderTitle">Proyectos actuales</h1>
      <hr />
      <div className="row my-2 d-flex align-items-end">
        <div className="col-4">
          {pathname !== "/admin/proyectos" &&

            <button id="basicButton" onClick={createProject}>
              Crear Proyecto
            </button>}
        </div>
        <div className="col-8 d-flex justify-content-end">
          <div>
          <div className="d-flex justify-content-end">
              <TextField
                id="outlined-basic"
                label="Buscar"
                variant="standard"
                onChange={handleFilter}
              />
            </div>
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
