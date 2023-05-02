import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import TextField from "@mui/material/TextField";
import TableDropdown from "./TableDropdown";
import { useNavigate } from "react-router-dom";

export const TableTravelAllowance = () => {
  const navigate = useNavigate();

  const navSolicitar = () => {
    navigate("/user/solicitar");
  };
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);

  // // Funcion para mostrar datos con fetch
  // const URL = "https://gorest.co.in/public/v2/users?page=1&per_page=20";
  // // const URL = "https://jsonplaceholder.typicode.com/users";
  // const getTravelAllowance = async () => {
  //   const res = await fetch(URL);
  //   const data = await res.json();
  //   setTravelAllowance(data);
  //   setFilterTravelAllowance(data);
  //   // console.log(data);
  // };

  // const getTravelAllowance = async () => {
  const getTravelAllowance = async () => {
    const url = "http://localhost:3001/viatico_request/user/1";
    const options = {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const rawResponse = await fetch(url, options);
    const response = await rawResponse.json();
    console.log(response[0]);
    setTravelAllowance(response);
    setFilterTravelAllowance(response);
  };

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
      width: "80px",
    }, {
      name: "Codigo Proyecto",
      selector: (row) => row.Proyecto.codigoProyecto,
    },

    {
      name: "Concepto",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "Fecha Inicio",
      selector: (row) => row.fechaInicio,
      sortable: true,
    },
    {
      name: "Fecha Fin",
      selector: (row) => row.fechaTermino,
      sortable: true,
    },
    {
      name: "Monto",
      selector: (row) => row.monto,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => <BadgeStatus status={row.ID_status_solicitud_viaticos} statusName={row.StatusSolicitudViatico.descripcion} />,
      width: "120px",
      style: { paddingLeft: "0px" },
    },
    // {
    //   name: 'Description',
    //   selector: row => row.gender,
    //   sortable: true
    // },
    // {
    //   name: 'Total',
    //   selector: row => row.status,
    //   sortable: true
    // },
    // {
    //   name: 'Status',
    //   selector: row => row.status,
    //   sortable: true
    // },
    {
      name: "Actions",
      cell: (row) => <TableDropdown />,
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
        <div className="col-4 d-flex justify-content-start">
          <button id="basicButton" onClick={navSolicitar}>
            {" "}
            Solicitar Viaticos{" "}
          </button>
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
        data={travelAllowance}
        pagination
        paginationComponentOptions={paginationTable}
        fixedHeader
      />
    </div>
  );
};
