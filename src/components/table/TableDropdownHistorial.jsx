import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import Modal from "../modal";
import { tokenValidation } from "../../apis/getApiData";

export default function TableDropdownHistorial({ viaticoID, Status }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const open = Boolean(anchorEl);

  const [modal, mostrarModal] = React.useState(false);
  const [modalPagado, mostrarModalPagado] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    {
      Status === "Rechazado" &&
        mostrarModal(!modal);
    }

    {
      Status === "Pagado" &&
        mostrarModalPagado(!modalPagado);
    }
  };

  const getRole = async () => {
    const response = await tokenValidation()
    if (response.role === 3) {
      setIsAdmin(true);
    }
  }

  React.useEffect(() => {
    getRole()
  })


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
        {isAdmin ? null : <MenuItem onClick={handleClose}>Abrir solicitud</MenuItem>}
        <MenuItem
          onClick={handleClose}
          as={Link}
          to={isAdmin ? "../hexpediente/" + viaticoID : "../user/hexpediente/" + viaticoID}
        >
          Ver historial
        </MenuItem>

        {Status === "Rechazado" && (
          <>
            <MenuItem onClick={handleClose}> Motivo de rechazo</MenuItem>
          </>
        )}

        {Status === "Pagado" && (
          <>
            <MenuItem onClick={handleClose}> Ver pago</MenuItem>
          </>
        )}
      </Menu>

      <Modal estado={modal}
        cambiarEstado={mostrarModal}
        motivoRechazo={true}
        id={viaticoID} />

      <Modal estado={modalPagado}
        cambiarEstado={mostrarModalPagado}
        mostrarReferencia={true}
        id={viaticoID} />
    </div>
  );
}
