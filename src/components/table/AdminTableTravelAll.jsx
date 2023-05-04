import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import TextField from "@mui/material/TextField";
import TableDropdown from "./TableDropdown";
import { useNavigate } from "react-router-dom";
import { adminSol } from "../../apis/getApiData";

export const AdminTableTravelAll = () => {
  const navigate = useNavigate();

  const navSolicitar = () => {
    navigate("/user/solicitar");
  };
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);

  const getTravelAllowance = async () => {
    let data = await adminSol();
    data = data.filter((row) => row.ID_status_solicitud_viaticos !== 4);
    data = data.filter((row) => row.StatusSolicitudViatico.descripcion != "Borrador");
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
    },
    {
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "Destino",
      selector: (row) => row.destino,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.monto,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => (
        <BadgeStatus status={row.StatusSolicitudViatico.descripcion} />
      ),
      sortable: true,
      width: "120px",
      style: { paddingLeft: "0px" },
    },
    {
      name: "Actions",
      cell: (row) => <TableDropdown viaticoID={row.ID_solicitud_viatico} />,
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
