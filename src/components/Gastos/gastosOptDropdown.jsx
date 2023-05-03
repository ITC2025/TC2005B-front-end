import * as React from "react";
import { useState, useEffect } from "react"
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import { smart_delete_expenses } from "../../apis/gastosApiTabla";


export default function GastosDropdown(props) {

  console.log(props.id);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; 

  

  const handleModal = () => {
    props.doIt(props.id);
    handleClose();

  } 



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
        <MenuItem onClick={handleClose} as={Link} to="/user/expediente" >Editar</MenuItem>
        <MenuItem onClick={handleModal}>Borrar</MenuItem>
      </Menu>

    </div>
  );
}