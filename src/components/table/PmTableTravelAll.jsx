import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import PmTableDropdown from "./PmTableDropdown";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { tokenID } from "../../apis/getApiData";

export const PmTableTravelAll = ({project_code, closed_requests_only}) => {
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
  // const URL = "https://jsonplaceholder.typicode.com/users";
  //
  

  const getTravelAllowance = async () => {
    const response = await tokenID();
    const user_id = response.id;
    let URL = "http://localhost:3001/viatico_request/pm/" + user_id;

    if (project_code) {
      URL = URL + "/" + project_code;
    } 

    console.log(URL);

    const res = await fetch(URL);
    let data = await res.json();

    if (closed_requests_only) {
      data = data.filter((row) => {
        return (row.StatusSolicitudViatico.descripcion !== "Enviado" && 
                row.StatusSolicitudViatico.descripcion !== "En revisión")
      });
    } else if (!project_code) {
      data = data.filter((row) => row.StatusSolicitudViatico.descripcion === "Enviado");
    }

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
      row.name.toLowerCase().includes(e.target.value.toLowerCase())
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
    // {
    //     name:"Fecha",
    //     selector: (row) => row.date,
    //     sortable: true
    // },
    {
      name: "Nombre",
      selector: (row) => row.Empleado.name,
      sortable: true,
    },
    {
      name: "Project",
      selector: (row) => row.Proyecto.codigoProyecto,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => <BadgeStatus status={row.StatusSolicitudViatico.descripcion} />,
      sortable: true,
      width: "120px",
      style: { paddingLeft: "0px", },
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
      cell: (row) => <PmTableDropdown viaticoID={row.ID_solicitud_viatico}/>,
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

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>CONFIRMACIÓN DE RECHAZO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Motivo de Rechazo:
            <textarea className="form-control" rows="5" id="comment" required></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSend}>RECHAZAR</Button>

          <Button onClick={handleClose}>
            CANCELAR
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
