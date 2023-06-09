import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import TextField from "@mui/material/TextField";
import TableDropdown from "./TableDropdown";
import { useNavigate } from "react-router-dom";
import { userViaticos } from "../../apis/getApiData";
import mxnFormat from "../../utils/mxnFormat";

export const TableTravelAllowance = () => {
  const navigate = useNavigate();

  const navSolicitar = () => {
    navigate("/user/solicitar");
  };
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);

  // const getTravelAllowance = async () => {
  const getTravelAllowance = async () => {
    let data = await userViaticos();
    
    data = data.filter((row) => row.StatusSolicitudViatico.descripcion != "Eliminado");
    setTravelAllowance(data);
    setFilterTravelAllowance(data);
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
      name: "Código Proyecto",
      selector: (row) =>
        row.Proyecto.codigoProyecto
          ? row.Proyecto.codigoProyecto
          : "Sin Proyecto",
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
      name: "Fecha de Finalización",
      selector: (row) => row.fechaTermino,
      sortable: true,
    },
    {
      name: "Monto",
      selector: (row) => mxnFormat(row.monto),
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => (
        <BadgeStatus status={row.StatusSolicitudViatico.descripcion} />
      ),
      width: "120px",
      style: { paddingLeft: "0px" },
    },
    {
      name: "Acciones",
      cell: (row) => (
        <TableDropdown
          viaticoID={row.ID_solicitud_viatico}
          Status={row.StatusSolicitudViatico.descripcion}
          info={[row.monto, row.fechaInicio, row.fechaTermino, row.Proyecto.codigoProyecto, row.destino, row.descripcion, row.ID_solicitud_viatico]}
        />
      ),
      width: "100px",
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
      <h1 id="HeaderTitle">Solicitudes de viáticos activas</h1>
      <hr />
      <div className="row my-2 d-flex align-items-end">
        <div className="col-4 d-flex justify-content-start">
          <button id="basicButton" onClick={navSolicitar}>
            {" "}
            Solicitar Viáticos{" "}
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
      />
    </div>
  );
};