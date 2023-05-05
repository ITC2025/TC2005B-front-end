import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import Modal from "../modal";
import { tokenValidation, eliminarSolicitud } from "../../apis/getApiData";
import { useNavigate } from "react-router-dom";

export default function TableDropdown({ viaticoID, Status }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [modalRechazo, mostrarModalRechazo] = React.useState(false);
  const [modalPagado, mostrarModalPagado] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const deleteSolicitud = (id) =>{
    eliminarSolicitud(id)
    window.location.reload();
  };

  const getRole = async () => {
    const response = await tokenValidation()
    if (response.role === 3) {
      setIsAdmin(true);
    }
  }

  React.useEffect(() => {
    getRole()
  }, [])

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

        {Status !== "Pagado" &&
          <MenuItem
            onClick={handleClose}
            as={Link}
            to={isAdmin ? "../expediente/" + viaticoID : "../expediente/" + viaticoID}
          >
            Ver gastos
          </MenuItem>
        }

        {Status === "Rechazado" && (
          <>
            <MenuItem onClick={() => mostrarModalRechazo(!modalRechazo)}> Motivo de rechazo</MenuItem>
          </>
        )}

        {Status === "Pagado" && (
          <>
            <MenuItem onClick={() => mostrarModalPagado(!modalPagado)}> Ver pago</MenuItem>
          </>
        )}

        {Status === "Borrador" && (
          <>
            <MenuItem onClick={() => deleteSolicitud(viaticoID)}>Eliminar</MenuItem>
          </>
        )}
      </Menu>

      <Modal estado={modalRechazo}
        cambiarEstado={mostrarModalRechazo}
        motivoRechazoSolicitud={true}
        id={viaticoID} />

      <Modal estado={modalPagado}
        cambiarEstado={mostrarModalPagado}
        mostrarReferencia={true}
        id={viaticoID} />
    </div>
  );
}
