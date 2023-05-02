import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableAdminStyle.css";
import TableDropdown from "./TableAdminDropdown.jsx";
import { MdDisplaySettings } from "react-icons/md";
import { adminSol } from "../../apis/getApiData";

export default function TableAdmin() {

  const [tableData, setTableData] = useState([]);
  // configuracion de columnas
  const columns = [
    {
      name: "ID Solicitud",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Fecha de aprobacion",
      selector: (row) => row.approve,
      sortable: true,
    },
    {
      name: "Responsable",
      selector: (row) => row.responsable,
      sortable: true,
    },
    {
      name: "Descripción",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Proyecto",
      selector: (row) => row.project,
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



  const data = [
    { id: "Waza", date: "", approve: "", responsable: "", project: "", description: "", total: "" },
  ]

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
              <input type="text" placeholder="Buscar" />
              <label>Buscar</label>
            </div>
          </div>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationComponentOptions={paginationTable}
        fixedHeader
      />
    </div>
  );
};