import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import PmTableDropdown from "./PmTableDropdown";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { tokenID } from "../../apis/getApiData";

export const PmTableTravelAll = ({ project_code, closed_requests_only }) => {
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
  
  // Estado para mostrar modal
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

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

    const res = await fetch(URL);
    let data = await res.json();
    data = data.filter(
      (row) => row.StatusSolicitudViatico.descripcion != "Borrador"
    );
    data = data.filter(
      (row) => row.StatusSolicitudViatico.descripcion != "Eliminado"
    );

    if (closed_requests_only) {
      data = data.filter((row) => {
        return (
          row.StatusSolicitudViatico.descripcion != "Enviado" &&
          row.StatusSolicitudViatico.descripcion != "En revisión" &&
          row.StatusSolicitudViatico.descripcion != "Borrador" &&
          row.StatusSolicitudViatico.descripcion != "Eliminado"
        );
      });
    } else if (!project_code) {
      data = data.filter((row) => {
        return (
          row.StatusSolicitudViatico.descripcion == "Enviado" ||
          row.StatusSolicitudViatico.descripcion == "En revisión"
        );
      });
    }

    setTravelAllowance(data);
    setFilterTravelAllowance(data);
  };

  useEffect(() => {
    getTravelAllowance();
  }, []);

  const handleSend = () => {
    //refrescar la pagina
    window.location.reload();
  };

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
      name: "Fecha",
      selector: (row) => row.fechaInicio,
      sortable: true,
    },
    {
      name: "Descripción",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.Empleado.name,
      sortable: true,
    },
    {
      name: "Proyecto",
      selector: (row) => row.Proyecto.codigoProyecto,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => (
        <BadgeStatus status={row.StatusSolicitudViatico.descripcion} />
      ),
      sortable: true,
      width: "120px",
      style: { paddingLeft: "0px", textAlign: "center" },
    },
    {
      name: "Actions",
      cell: (row) => (
        <PmTableDropdown
          viaticoID={row.ID_solicitud_viatico}
          info={[
            row.monto,
            row.fechaInicio,
            row.fechaTermino,
            row.Proyecto.codigoProyecto,
            row.destino,
            row.descripcion,
            row.ID_solicitud_viatico,
            row.StatusSolicitudViatico,
            "PM"
          ]}
          status={row.StatusSolicitudViatico.descripcion}
          codigoPr={project_code}
        />
      ),
      width: "80px",
    },
  ];

  const paginationTable = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  // mostrar la tabla
  return (
    <div className="container" style={{ paddingTop: "0rem" }}>
      <h1 id="HeaderTitle">Solicitudes</h1>
      <hr />
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
      />
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
            <textarea
              className="form-control"
              rows="5"
              id="comment"
              required
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSend}>RECHAZAR</Button>

          <Button onClick={handleClose}>CANCELAR</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};