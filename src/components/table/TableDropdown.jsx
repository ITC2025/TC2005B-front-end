import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import Modal from "../modal";

export default function TableDropdown({ viaticoID, Status }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [modal, mostrarModal] = React.useState(false);
  const [modalPagado, mostrarModalPagado] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>Abrir solicitud</MenuItem>

        {Status !== "Pagado" &&
          <MenuItem
            onClick={handleClose}
            as={Link}
            to={"/user/expediente/" + viaticoID} >
            <>
              Ver gastos
            </>
          </MenuItem>
        }

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
            <MenuItem onClick={() => mostrarModal(!modal)}> Motivo de rechazo</MenuItem>
          </>
        )}

        {Status === "Pagado" && (
          <>
            <MenuItem onClick={() => mostrarModalPagado(!modalPagado)}> Ver pago</MenuItem>
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
