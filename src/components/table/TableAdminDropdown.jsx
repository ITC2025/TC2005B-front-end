import * as React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { MdOutlineMoreVert} from 'react-icons/md';
import "../../styles/TableBadges.css"
import Modal from "../modal/index"
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

function TableAdminDropdown({viaticoID}) {
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
        <MenuItem onClick={handleClose} as={Link} to={"/admin/expediente/" + viaticoID}  >Ver gastos</MenuItem>
        <MenuItem onClick={() => setShowModal(!showModal)}>Ver solicitud</MenuItem>
      </Menu>
      <Modal
        estado={showModal}
        cambiarEstado={setShowModal}
        solicitudViatico={true}
      />
    </>  
  );
}

export default TableAdminDropdown;