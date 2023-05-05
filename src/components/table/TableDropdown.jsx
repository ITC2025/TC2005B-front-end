import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import Modal from "../modal";
import { tokenValidation, eliminarSolicitud } from "../../apis/getApiData";
import { useNavigate } from "react-router-dom";
import { getSolicitudViaticoUser } from "../../apis/getApiData";

export default function TableDropdown({ viaticoID, Status, info }) {
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [modalRechazo, mostrarModalRechazo] = React.useState(false);
  const [modalPagado, mostrarModalPagado] = React.useState(false);
  const [datosSV, setDatosSV] = React.useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("hola")

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteSolicitud = (id) => {
    eliminarSolicitud(id);
    window.location.reload();
  };

  const abrirSolicitudDB = async () => {
    const getDatos = getSolicitudViaticoUser(viaticoID);
    const datos = await getDatos;
    setDatosSV(datos);
  };

  const handleOnClickSomething = () => {
    console.log("datosSV");

    abrirSolicitudDB().then(() => setShowModal(!showModal));
  };

  const getRole = async () => {
    const response = await tokenValidation();
    if (response.role === 3) {
      setIsAdmin(true);
    }
  };

  React.useEffect(() => {
    getRole();
  }, []);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MdOutlineMoreVert id="icon" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <MenuItem onClick={handleOnClickSomething}>Abrir solicitud</MenuItem>
        <MenuItem
          onClick={handleClose}
          as={Link}
          to={"/user/expediente/" + viaticoID}
        >
          Ver gastos
        </MenuItem> */}
        {isAdmin ? null : (
          <MenuItem onClick={handleOnClickSomething}>Abrir solicitud</MenuItem>
        )}

        {Status !== "Pagado" && (
          <MenuItem
            onClick={handleClose}
            as={Link}
            to={
              isAdmin
                ? "../expediente/" + viaticoID
                : "../expediente/" + viaticoID
            }
          >
            Ver gastos
          </MenuItem>
        )}

        {Status === "Borrador" &&
          <MenuItem
            onClick={handleClose}
            as={Link}
            to={"/user/solicitudEditar/" + viaticoID} >
            <>
              Modificar
            </>
          </MenuItem>
        }

        {Status === "Rechazado" && (
          <>
            <MenuItem onClick={() => mostrarModalRechazo(!modalRechazo)}>
              {" "}
              Motivo de rechazo
            </MenuItem>
          </>
        )}

        {Status === "Pagado" && (
          <>
            <MenuItem onClick={() => mostrarModalPagado(!modalPagado)}>
              {" "}
              Ver pago
            </MenuItem>
          </>
        )}

        {Status === "Borrador" && (
          <>
            <MenuItem onClick={() => deleteSolicitud(viaticoID)}>
              Eliminar
            </MenuItem>
          </>
        )}
      </Menu>

      <Modal
        estado={modalRechazo}
        cambiarEstado={mostrarModalRechazo}
        motivoRechazo={true}
        id={viaticoID}
      />

      <Modal
        estado={modalPagado}
        cambiarEstado={mostrarModalPagado}
        mostrarReferencia={true}
        id={viaticoID}
      />
      <Modal
        estado={showModal}
        cambiarEstado={setShowModal}
        motivoRechazo={true}
      />
      <Modal
        dataDB={datosSV}
        estado={showModal}
        cambiarEstado={setShowModal}
        solicitudViatico={true}
        info={info}
      />
    </div>
  );
}
