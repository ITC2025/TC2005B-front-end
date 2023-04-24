import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import TableDropdown from "./TableDropdown";
import { MdDisplaySettings } from "react-icons/md";

export const TableTravelAllowance = () => {
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);

  // Funcion para mostrar datos con fetch
  const URL = "https://gorest.co.in/public/v2/users?page=1&per_page=20";
  // const URL = "https://jsonplaceholder.typicode.com/users";

  const getTravelAllowance = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setTravelAllowance(data);
    setFilterTravelAllowance(data);
    console.log(data);
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
      width: "120px", 
    },
    {
      name: "NAME",
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
      width: "120px" 
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
      width: "80px" ,
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
        <div className="col d-flex justify-content-end">
          <div>
            <div className="input-group">
              
              <input type="text" placeholder="Buscar" onChange={handleFilter} />
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
        selectableRows
      />
    </div>
  );
};