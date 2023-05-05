import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import Modal from "../modal/index"

export default function TableDropdown({viaticoID, Status, info}) {
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [modal, mostrarModal] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    {
      Status === "Rechazado" && mostrarModal(!modal);
    }
  };

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
        <MenuItem onClick={() => setShowModal(!showModal)}>Abrir solicitud</MenuItem>
        <MenuItem onClick={handleClose} as={Link} to={"/user/expediente/"+viaticoID} >Ver gastos</MenuItem>
        {Status === "Rechazado" && (
          <>
            <MenuItem onClick={handleClose}> Motivo de rechazo</MenuItem>
          </>
        )}
      </Menu>

      <Modal estado={modal} cambiarEstado={mostrarModal} motivoRechazo={true} />
      <Modal 
        estado= {showModal}
        cambiarEstado={setShowModal}
        solicitudViatico={true}
        info={info}
      />
    </div>
  );
}
