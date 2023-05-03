import "../../styles/TableAdminStyle.css";

import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import PmTableDropdown from "./PmTableDropdown";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { solicitudViaticosPM } from "../../apis/getApiData";
import { adminSol } from "../../apis/getApiData";

export default function AdminTableTravelAll() {
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);

  // Estado de los botones, para deshabilitarlos o habilitarlos
  const [estadoBoton, setEstadoBoton] = useState([false]);
  const [estadoBoton2, setEstadoBoton2] = useState([false]);

  // Estado para mostrar modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  // Funcion para aceptar o rechazar solicitudes
  const handleAceptar = () => {
    console.log("aceptar");
  };

  const handleSend = () => {
    console.log("enviar");
    //refrescar la pagina
    window.location.reload();
  };

  // Funcion con checkbox
  const handleSelected = ({ selectedRows }) => {
    console.log(selectedRows);
    if (selectedRows.length === 1) {
      console.log("row seleccionada");
      setEstadoBoton2(false);
      setEstadoBoton(false);
    }
    else if (selectedRows.length > 1) {
      console.log("mas de una row seleccionadas");
      setEstadoBoton2(true);
      setEstadoBoton(false);
    }
    else {
      console.log("no hay row seleccionadas");
      setEstadoBoton(true);
      setEstadoBoton2(true);
    }
  };

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
      selector: (row) => row.ID,
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
      cell: (row) => <PmTableDropdown />,
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
        fixedHeader
        selectableRows
        onSelectedRowsChange={handleSelected}
      />
      <div className="d-flex justify-content-end mr-4">
        <Button type="submit" disabled={estadoBoton} role="boton" onClick={handleAceptar}>
          Aceptar
        </Button>
        <div className="mx-2"></div>
        <Button type="submit" disabled={estadoBoton2} role="boton" onClick={handleShow}>
          Rechazar
        </Button>
      </div>
    </div>
  );

};
//   const [tableData, setTableData] = useState([]);
//   // configuracion de columnas
//   const columns = [
//     {
//       name: "ID Solicitud",
//       selector: (row) => row.id,
//       sortable: true,
//     },
//     {
//       name: "Fecha",
//       selector: (row) => row.date,
//       sortable: true,
//     },
//     {
//       name: "Fecha de aprobacion",
//       selector: (row) => row.approve,
//       sortable: true,
//     },
//     {
//       name: "Responsable",
//       selector: (row) => row.responsable,
//       sortable: true,
//     },
//     {
//       name: "Descripción",
//       selector: (row) => row.description,
//       sortable: true,
//     },
//     {
//       name: "Proyecto",
//       selector: (row) => row.project,
//       sortable: true,
//     },
//     {
//       name: "Total",
//       selector: (row) => row.total,
//       sortable: true,
//     },
//     {
//       name: "Actions",
//       cell: (row) => <TableDropdown />,
//       width: "80px",
//     },
//   ];

//   const paginationTable = {
//     rowsPerPageText: "Filas por pagina",
//     rangeSeparatorText: "de",
//     selectAllRowsItem: true,
//     selectAllRowsItemText: "Todos",
//   };

//   // mostrar la tabla
//   return (
//     <div className="container">
//       <div className="row my-2">
//         <div className="d-flex justify-content-end">
//           <div>
//             <div className="input-group">
//               <input type="text" placeholder="Buscar" />
//               <label>Buscar</label>
//             </div>
//           </div>
//         </div>
//       </div>
//       <DataTable
//         columns={columns}
//         data={data}
//         pagination
//         paginationComponentOptions={paginationTable}
//         fixedHeader
//       />
//     </div>
//   );
// };