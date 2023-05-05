import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
// import "../../styles/TableStyle.css";
import ViaticosDropdown from "./ViaticosDropdown";
import { MdPadding } from "react-icons/md";

export default function TablaProyectos() {
  // Configurar hooks
  const [proyecto, setProyecto] = useState([]);

  // Funcion para mostrar datos con fetch
  const getProyectos = async () => {
    const url = "localhost:3000/pm/proyectos/viatico_request/project/:id";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const rawResponse = await fetch(url, options);
    const response = await rawResponse.json();
    //console.log(response);
    setProyecto(response);
  };

  useEffect(() => {
    getProyectos();
  }, []);

  function setStatus(estado) {
    switch (estado) {
      case 1:
        return "Borrador";
      case 2:
        return "Enviado";
      case 3:
        return "Aprobado";
      case 4:
        return "Rechazado";

      default:
        return "Estado desconocido";
    }
  }

  // configuracion de columnas
  const columns = [
    {
      name: "ID",
      selector: (row) => row.ID_solicitud_viatico,
      width: "120px",
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.fechaInicio,
      sortable: true,
    },
    {
      name: "Proyecto",
      selector: (row) => row.Proyecto.codigoProyecto,
      sortable: true,
    },
    {
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.monto,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => setStatus(row.ID_status_solicitud_viaticos),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <ViaticosDropdown status={row.ID_status_solicitud_viaticos} />
      ),
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
            <div className="d-flex justify-content-end"></div>
          </div>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={proyecto}
        pagination
        paginationComponentOptions={paginationTable}
        fixedHeader
      />
    </div>
  );
}
