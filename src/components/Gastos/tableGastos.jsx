import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import TextField from "@mui/material/TextField";
import GastosDropdown from "./gastosOptDropdown";
import { useNavigate } from 'react-router-dom';

export const TableGastos = () => {
  const navigate = useNavigate();

  const navSolicitar = () => {
    navigate('/user/solicitar');
} 
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);

  // Funcion para mostrar datos con fetch
  const URL = "http://localhost:3001/expenses_table/vi/1";
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
      width: "16%",
    },
    // {
    //     name:"Fecha",
    //     selector: (row) => row.date,
    //     sortable: true
    // },
    {
      name: "Fecha",
      selector: (row) => row.fecha,
      sortable: true,
      width: "16%",
    },
    {
      name: "Tipo",
      selector: (row) => row.tipo,
      sortable: true,
      width: "16%",
    },
    {
        name: "Concepto",
        selector: (row) => row.concepto,
        sortable: true,
        width: "20%",
    },
    {
        name: "Total",
        selector: (row) => row.total,
        sortable: true,
        width: "16%",
    },
    //{
    //  name: "Estado",
    //  selector: (row) => <BadgeStatus status={row.status} />,
    //  width: "120px",
    //  style: { paddingLeft: "0px" },
    //},
    {
      name: "Acciones",
      cell: (row) => <GastosDropdown />,
      width: "16%",
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
          <button id="basicButton" onClick={navSolicitar} > Solicitar Viaticos </button>
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
        paginationPerPage={5}
        paginationComponentOptions={paginationTable}
        fixedHeader
      />
    </div>
  );
};



