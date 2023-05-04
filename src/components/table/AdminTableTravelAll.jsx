import "../../styles/TableAdminStyle.css";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import TableAdminDropdown from "./TableAdminDropdown";
import TextField from "@mui/material/TextField";
import { adminSol } from "../../apis/getApiData";

export default function AdminTableTravelAll() {
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);

  // Funcion para mostrar datos con fetch
  const getTravelAllowance = async () => {
    let data = await adminSol()
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
      row.desc.toLowerCase().includes(e.target.value.toLowerCase())
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
      name: "Descripcion",
      selector: (row) => row.desc,
      sortable: true,
    },
    {
      name: "Proyecto",
      selector: (row) => row.proyecto,
      sortable: true,
    },
    {
      name: 'Total',
      selector: (row) => row.total,
      sortable: true
    },
    {
      name: "Actions",
      cell: (row) => <TableAdminDropdown travelToId={row.ID_solicitud_viatico} />,
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
        <div className="col justify-content-start">
          <p>Solicitudes faltantes de referencia de pago</p>
        </div>
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
      />
    </div>
  );

};