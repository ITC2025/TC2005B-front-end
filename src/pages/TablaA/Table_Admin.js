import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableAdminStyle.css";
import TableDropdown from "../../components/table/TableAdminDropdown";
import { MdDisplaySettings } from "react-icons/md";

export const Table_Admin = () => {

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
      width: "80px" ,
    },
  ];

  const data = [
    {id: "012448227", date: "1 abril 2023", approve: "1 abril 2023", responsable: "Persona 1", project: "ZI098", description: "Desc 1", total: "$2,936.10"},
    {id: "012448238", date: "12 abril 2023", approve: "12 abril 2023", responsable: "Persona 2", project: "EH670", description: "Desc 2", total: "$4,034,220.33"},
    {id: "322483227", date: "4 abril 2023", approve: "4 abril 2023", responsable: "Persona 3", project: "RH567", description: "Desc 3", total: "$4.41"},
    {id: "915327264", date: "31 marzo 2023", approve: "31 marzo 2023", responsable: "Persona 4", project: "AG2339", description: "Desc 4", total: "$58.943.99"},
    {id: "012467227", date: "20 abril 2023", approve: "20 abril 2023", responsable: "Persona 5", project: "ZB5678", description: "Desc 5", total: "$4,034,220.33"},
    {id: "458380211", date: "24 marzo 2023", approve: "24 marzo 2023", responsable: "Persona 6", project: "EH8790", description: "Desc 6", total: "$80,000,000,00"},
    {id: "429878427", date: "23 abril 2023", approve: "23 abril 2023", responsable: "Persona 7", project: "PQ1295", description: "Des 7", total: "$59,349.91"},
    {id: "072435857", date: "29 abril 2023", approve: "29 abril 2023", responsable: "Persona 8", project: "GE9843", description: "Desc 8", total: "$85.12"},
    {id: "543564373", date: "3 mayo 2023", approve: "3 mayo 2023", responsable: "Persona 9", project: "KS8924", description: "Desc 9", total: "$899,412.43"},
    {id: "294010958", date: "6 mayo 2023", approve: "6 mayo 2023", responsable: "Persona 10", project: "PZ7312", description: "Desc 10", total: "$127,436,841.42"},
    {id: "482940194", date: "19 abril 2023", approve: "19 abril 2023", responsable: "Persona 11", project: "LA0012", description: "Desc 11", total: "$431.67"},
    {id: "134785943", date: "12 mayo 2023", approve: "12 mayo 2023", responsable: "Persona 11", project: "BW2233", description: "Desc 12", total: "$74.23"},
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
