import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
// import "../../styles/TableBadges.css";
import { useNavigate } from "react-router-dom";

export default function ProyectosDropdown({codigoproyecto}) {
  const navigate = useNavigate();

  const verViaticosProyecto = () => {
    navigate("/pm/solicitudes/" + codigoproyecto); // cambiar ruta
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    verViaticosProyecto();
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
        <MenuItem onClick={handleClose}>Ver Solicitudes</MenuItem>
      </Menu>
    </div>
  );
}
