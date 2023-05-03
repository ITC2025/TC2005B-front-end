import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableAdminStyle.css";
import TableDropdown from "./TableAdminDropdown.jsx";

export default function TableAdmin() {

  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);

  const getTravelAllowance = async () => {
    const url = "http://localhost:3001/viatico_request";
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

  // configuracion de columnas
  const columns = [
    {
      name: "ID Solicitud",
      selector: (row) => row.ID,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.fecha,
      sortable: true,
    },
    {
      name: "Fecha de aprobacion",
      selector: (row) => row.fechaAprob,
      sortable: true,
    },
    {
      name: "Responsable",
      selector: (row) => row.responsable,
      sortable: true,
    },
    {
      name: "Proyecto",
      selector: (row) => row.proyecto,
      sortable: true,
    },
    {
      name: "Descripción",
      selector: (row) => row.desc,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => <TableDropdown />,
      width: "80px",
    },
  ];

  const handleFilter = (e) => {
    const newData = filtertravelAllowance.filter((row) =>
      row.desc.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTravelAllowance(newData);
  };

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
        <div className="d-flex justify-content-end">
          <div>
            <div className="input-group">
              <input onChange={handleFilter} type="text" placeholder="Buscar" />
              <label>Buscar</label>
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