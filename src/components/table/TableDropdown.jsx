import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import Modal from "../modal";

export default function TableDropdown({ viaticoID, status }) {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [modalEstado, cambiarEstadoModal] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    cambiarEstadoModal(!modalEstado)
  };
// test
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
        <MenuItem onClick={handleClose}>Abrir solicitud</MenuItem>
        <MenuItem onClick={handleClose} as={Link} to={"/user/expediente/" + viaticoID} >Ver gastos</MenuItem>
        {status === "Rechazado" &&
          <>
            <MenuItem onClick={handleClose} > Motivo de rechazo </MenuItem>
          </>
        }
      </Menu>

      <Modal estado={modalEstado}
        cambiarEstado={cambiarEstadoModal}
        motivoRechazo={true} />
    </div>
  );
}