import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Modal from "../modal/index";
import { getSolicitudViaticoUser } from "../../apis/getApiData";

export default function PmTableDropdown({ viaticoID, info, status, codigoPr }) {
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [datosSV, setDatosSV] = React.useState([]);

  const open = Boolean(anchorEl);

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
    console.log(datosSV);
  };

  const handleOnClickSomething = () => {
    console.log("datosSV");

    abrirSolicitudDB().then(() => setShowModal(!showModal));
  };

  const { pathname } = useLocation();

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
        {pathname === "/pm/solicitudes" && (
          <>
            <MenuItem
              onClick={handleOnClickSomething}
              as={Link}
              // to={"/pm/expediente/" + viaticoID}
            >
              Ver solicitud
            </MenuItem>
          </>
        )}
        {pathname === "/pm/solicitudes/" + codigoPr && (
          <>
            <MenuItem
              onClick={handleOnClickSomething}
              as={Link}
              // to={"/pm/expediente/" + viaticoID}
            >
              Ver solicitud
            </MenuItem>
            {status === "Rechazado" && (
              <MenuItem onClick={handleClose}>
                Mostrar motivo de rechazo
              </MenuItem>
            )}
            {status === "Pagado" && (
              <>
                <MenuItem onClick={handleClose}>Mostrar pago</MenuItem>
                <MenuItem onClick={handleClose}>Mostrar gastos</MenuItem>
              </>
            )}
          </>
        )}

        {pathname === "/pm/historico" && (
          <>
            <MenuItem
              onClick={handleOnClickSomething}
              as={Link}
              // to={"/pm/hexpediente/" + viaticoID}
            >
              Ver solicitud
            </MenuItem>
            {status === "Rechazado" && (
              <MenuItem onClick={handleClose}>
                Mostrar motivo de rechazo
              </MenuItem>
            )}
            {status === "Pagado" && (
              <>
                <MenuItem onClick={handleClose}>Mostrar pago</MenuItem>
                <MenuItem onClick={handleClose}>Mostrar gastos</MenuItem>
              </>
            )}
          </>
        )}
      </Menu>
      <Modal
        dataDB={datosSV}
        estado={showModal}
        cambiarEstado={setShowModal}
        solicitudViatico={true}
        info={info}
        dosBotones={true}
      />
    </div>
  );
}
