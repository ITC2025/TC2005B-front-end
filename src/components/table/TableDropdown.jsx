import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import Modal from "../modal";
import { tokenValidation } from "../../apis/getApiData";
import { getSolicitudViaticoUser } from "../../apis/getApiData";

export default function TableDropdown({ viaticoID, Status, info }) {
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const open = Boolean(anchorEl);
  const [modal, mostrarModal] = React.useState(false);
  const [datosSV, setDatosSV] = React.useState([]);
  const [modalPagado, mostrarModalPagado] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
    // console.log(response.role)
    if (response.role === 3) {
      setIsAdmin(true);
      // console.log('Yo soy Admin')
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
        <MenuItem onClick={handleOnClickSomething}>Abrir solicitud</MenuItem>
        <MenuItem
          onClick={handleClose}
          as={Link}
          to={"/user/expediente/" + viaticoID}
        >
          Ver gastos
        </MenuItem>
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

        {Status === "Rechazado" && (
          <>
            <MenuItem onClick={() => mostrarModal(!modal)}>
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
      </Menu>

      <Modal
        estado={modal}
        cambiarEstado={mostrarModal}
        motivoRechazo={true}
        id={viaticoID}
      />

      <Modal
        estado={modalPagado}
        cambiarEstado={mostrarModalPagado}
        mostrarReferencia={true}
        id={viaticoID}
      />
      <Modal estado={modal} cambiarEstado={mostrarModal} motivoRechazo={true} />
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
