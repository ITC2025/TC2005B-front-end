import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Modal from "../modal/index"

export default function PmTableDropdown({ viaticoID,info }) {

  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {pathname} = useLocation();
  
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

        {(pathname === "/pm/solicitudes" &&
          <>
            <MenuItem onClick={handleClose} as={Link} to={"/pm/expediente/" + viaticoID}  >Ver gastos</MenuItem>

          </>
        )}

        {(pathname === "/pm/historico" &&
          <>
            <MenuItem onClick={handleClose} as={Link} to={"/pm/hexpediente/" + viaticoID}  >Ver gastos</MenuItem>
          </>
        )}

        <MenuItem onClick={() => setShowModal(!showModal)}>Ver solicitud</MenuItem>
      </Menu>
      <Modal
        estado={showModal}
        cambiarEstado={setShowModal}
        solicitudViatico={true}
        info={info}
        dos_botones={true}
      />
    </div>
  );
}