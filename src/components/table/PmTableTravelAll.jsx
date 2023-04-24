import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import PmTableDropdown from "./PmTableDropdown";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";

export const PmTableTravelAll = () => {
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);
  const [estadoBoton, setEstadoBoton] = useState([false]);

  // Funcion para mostrar datos con fetch
  const URL = "https://gorest.co.in/public/v2/users?page=1&per_page=20";
  // const URL = "https://jsonplaceholder.typicode.com/users";
  const getTravelAllowance = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setTravelAllowance(data);
    setFilterTravelAllowance(data);
    // console.log(data);
  };

  // const getTravelAllowance = async () => {
  useEffect(() => {
    getTravelAllowance();
  }, []);

  // Funcion para aceptar o rechazar solicitudes
  const handleAceptar = () => {
    console.log("aceptar");
  };

  const handleRechazo = () => {
    console.log("rechazar");
  };

  // Funcion con checkbox
  const handleSelected = ({ selectedRows }) => {
    console.log(selectedRows);
    if (selectedRows.length > 0) {
      console.log("row seleccionadas");
      setEstadoBoton(false);
    } else {
      console.log("ya no hay rows seleccionadas");
      setEstadoBoton(true);
    }
  };

  // Funcion para filtrar datos
  const handleFilter = (e) => {
    const newData = filtertravelAllowance.filter((row) =>
      row.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTravelAllowance(newData);
  };

  // configuracion de columnas
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "120px",
    },
    // {
    //     name:"Fecha",
    //     selector: (row) => row.date,
    //     sortable: true
    // },
    {
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Project",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => <BadgeStatus status={row.status} />,
      sortable: true,
      width: "120px",
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
      cell: (row) => <PmTableDropdown />,
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
        selectableRows
        onSelectedRowsChange={handleSelected}
      />
      <div className="d-flex justify-content-end mr-4">
        <Button type="submit" disabled={estadoBoton} role="boton" onClick={handleAceptar}>
          Aceptar
        </Button>
        <div className="mx-2"></div>
        <Button type="submit" disabled={estadoBoton} role="boton" onClick={handleRechazo}>
          Rechazar
        </Button>
      </div>
    </div>
  );
};