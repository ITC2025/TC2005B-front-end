import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import TextField from "@mui/material/TextField";
import AdminTableDropdown from "./AdminTableDropdown";
import { userViaticos } from "../../apis/getApiData";

export const AdminTableTravelAllowance = () => {
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);

  // const getTravelAllowance = async () => {
    const getTravelAllowance = async () => {
      let data = await userViaticos();
      data = data.filter((row) => row.ID_status_solicitud_viaticos !== 1).filter((row) => row.ID_status_solicitud_viaticos !== 5);
      setTravelAllowance(data);
      setFilterTravelAllowance(data);
      // console.log(data);
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
      selector: (row) => row.proyecto,
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
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => <BadgeStatus status={row.estado} />,
      width: "120px",
      style: { paddingLeft: "0px", },
    },
    {
      name: "Actions",
      cell: (row) => <AdminTableDropdown viaticoID={row.ID_solicitud_viatico} />,
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