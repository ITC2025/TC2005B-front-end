import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import PmTableDropdown from "./PmTableDropdown";
import TextField from "@mui/material/TextField";
import { tokenID } from "../../apis/getApiData";

export const PmTableTravelAll = ({project_code, closed_requests_only}) => {
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);
  
  const getTravelAllowance = async () => {
    const response = await tokenID();
    const user_id = response.id;
    let URL = "http://localhost:3001/viatico_request/pm/" + user_id;

    if (project_code) {
      URL = URL + "/" + project_code;
    } 

    const res = await fetch(URL);
    let data = await res.json();
    data = data.filter((row) => row.StatusSolicitudViatico.descripcion != "Borrador");


    if (closed_requests_only) {
      data = data.filter((row) => {
        return (row.StatusSolicitudViatico.descripcion != "Enviado" && 
                row.StatusSolicitudViatico.descripcion != "En revisión")
      });
    } else if (!project_code) {
      data = data.filter((row) => {
        return (row.StatusSolicitudViatico.descripcion == "Enviado" || 
                row.StatusSolicitudViatico.descripcion == "En revisión")
      });
    }

    setTravelAllowance(data);
    setFilterTravelAllowance(data);
    // console.log(data);
  };

  // const getTravelAllowance = async () => {
  useEffect(() => {
    getTravelAllowance();
  }, []);


  // Funcion para filtrar datos
  const handleFilter = (e) => {
    const newData = filtertravelAllowance.filter((row) =>
      row.descripcion.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTravelAllowance(newData);
  };

  // configuracion de columnas
  const columns = [
    {
      name: "ID",
      selector: (row) => row.ID_solicitud_viatico,
      sortable: true,
      width: "120px",
    },
    {
      name: "Fecha",
      selector: (row) => row.fechaInicio,
      sortable: true,
    },
    {
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: true,

    },
    {
      name: "Nombre",
      selector: (row) => row.Empleado.name,
      sortable: true,
    },
    {
      name: "Project",
      selector: (row) => row.Proyecto.codigoProyecto,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => <BadgeStatus status={row.StatusSolicitudViatico.descripcion} />,
      sortable: true,
      width: "120px",
      style: { paddingLeft: "0px", },
    },
    {
      name: "Actions",
      cell: (row) => <PmTableDropdown viaticoID={row.ID_solicitud_viatico} codigoPr={project_code}/>,
      width: "80px",
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
      <div className="row my-2">
        <div className="col justify-content-end">
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
      <DataTable
        columns={columns}
        data={travelAllowance}
        pagination
        paginationComponentOptions={paginationTable}
        fixedHeader
      />
    </div>
  );
};
