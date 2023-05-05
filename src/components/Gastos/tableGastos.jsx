import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import TextField from "@mui/material/TextField";
import GastosDropdown from "./gastosOptDropdown";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/index";
import { imagen_gastos, smart_delete_expenses } from "../../apis/gastosApiTabla";
import { MdImage } from "react-icons/md";
import { Button, useAccordionButton } from "react-bootstrap";
import { proyecto_sum_user, proyecto_info } from "../../apis/gastosApiTabla";
import { useLocation } from "react-router-dom";

export const TableGastos = ({ id, handleReloadSubtotal }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navSolicitar = () => {
    navigate("/user/solicitar");
  };

  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);
  const [modalImgEstado, modalCambiarEstado] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [facturaUrl, setFacturaUrl] = useState(null);
  // hooks de modales
  const [modal, modalEstado] = useState(false);
  const [modalSolicitud, modalEstadoSolicitud] = useState(false);
  const [modalRechazo, modalEstadoRechazo] = useState(false);
  const [modalPagar, modalEstadoPagar] = useState(false);

  // Funcion para mostrar datos con fetch

  const URL = [];

  {
    /*user*/
  }
  {
    pathname === "/user/expediente/" + id &&
      URL.push("http://localhost:3001/expenses_table/user/" + id);
  }

  {
    /*pm*/
  }
  {
    pathname === "/admin/expediente/" + id &&
      URL.push("http://localhost:3001/expenses_table/admin/" + id);
  }

  {
    /*admin*/
  }
  {
    pathname === "/pm/expediente/" + id &&
      URL.push("http://localhost:3001/expenses_table/pm/" + id);
  }

  {
    pathname === "/pm/hexpediente/" + id &&
      URL.push("http://localhost:3001/expenses_table/user/" + id);
  }

  {
    pathname === "/admin/hexpediente/" + id &&
      URL.push("http://localhost:3001/expenses_table/user/" + id);
  }

  const URLs = URL[0];

  // const URL = "https://jsonplaceholder.typicode.com/users";
  const getTravelAllowance = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setTravelAllowance(data);
    setFilterTravelAllowance(data);
  };

  // const getTravelAllowance = async () => {
  useEffect(() => {
    getTravelAllowance();
  }, []);

  const [suma, setSuma] = useState(0.0);
  const [anticipo, setAnticipo] = useState(0.0);

  const loadData = async () => {
    const jsonInfo = await proyecto_sum_user(id);
    setSuma(jsonInfo.monto);
  };

  const loadData2 = async () => {
    const jsonInfo = await proyecto_info(id);

    setAnticipo(jsonInfo[0].anticipo);
  };

  const handleBorrar = async (id) => {
    await smart_delete_expenses(id);
    getTravelAllowance();
    loadData();
    loadData2();
    handleReloadSubtotal();
  };

  useEffect(() => {
    loadData();
    loadData2();
  });

  let total = anticipo - suma;
  let idV = id;

  const ImageComponent = async ({ idGasto }) => {
    const data = await imagen_gastos(idGasto);

    let imageUrl = data.imagen;
    imageUrl = "http://localhost:3001/reporte_gastos/" + imageUrl;

    let facturaUrl = null;

    if (data.factura) {
      facturaUrl = data.factura;
      facturaUrl = "http://localhost:3001/reporte_gastos/" + facturaUrl;
    }

    return { imageUrl, facturaUrl };
  };

  const OpenModal = (idGasto) => {
    modalCambiarEstado(!modalImgEstado);
    ImageComponent({ idGasto })
      .then(({ imageUrl, facturaUrl }) => {
        setImageUrl(imageUrl);
        setFacturaUrl(facturaUrl);
      });
  };

  // configuracion de columnas
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "16%",
    },
    // {
    //     name:"Fecha",
    //     selector: (row) => row.date,
    //     sortable: true
    // },
    {
      name: "Fecha",
      selector: (row) => row.fecha,
      sortable: true,
      width: "16%",
    },
    {
      name: "Tipo",
      selector: (row) => row.tipo,
      sortable: true,
      width: "16%",
    },
    {
      name: "Concepto",
      selector: (row) => row.concepto,
      sortable: true,
      width: "20%",
    },
    {
      name: "Total",
      selector: (row) => row.total,
      sortable: true,
      width: "16%",
    },
    //{
    //  name: "Estado",
    //  selector: (row) => <BadgeStatus status={row.status} />,
    //  width: "120px",
    //  style: { paddingLeft: "0px" },
    //},
    {
      name: "Ticket",
      cell: (row) => <MdImage onClick={() => OpenModal(row.id)} />,
      width: "8%",
    },
  ];

  const actions = {
    name: "Acciones",
    cell: (row) => <GastosDropdown id={row.id} doIt={handleBorrar} />, //Pasa la funcion de borrar como componente
    width: "8%",
    style: { paddingLeft: "0.5em" },
  };

  const empty = {
    name: "",
    width: "8%",
    style: { paddingLeft: "0.5em" },
  };

  {
    /*user*/
  }
  {
    pathname === "/user/expediente/" + id && columns.push(actions);
  }

  {
    /*pm*/
  }
  {
    pathname === "/admin/expediente/" + id && columns.push(empty);
  }

  {
    /*admin*/
  }
  {
    pathname === "/pm/expediente/" + id && columns.push(empty);
  }

  {
    pathname === "/pm/hexpediente/" + id && columns.push(empty);
  }

  {
    pathname === "/admin/hexpediente/" + id && columns.push(empty);
  }

  const paginationTable = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  // mostrar la tabla
  return (
    <div className="container">
      <div className="row my-2 d-flex align-items-end">
        <div className="col-4">
          {pathname === "/user/expediente/" + id && (
            <>
              <button
                id="basicButton"
                onClick={() => navigate("/user/facturas/" + id)}
              >
                {" "}
                Nuevo Gasto{" "}
              </button>
            </>
          )}
        </div>
        <div className="col-8 d-flex justify-content-end">
          <div className="col-4 mt-3">
            {/* user */}
            {pathname === "/user/expediente/" + id && (
              <>
                <button id="basicButton" onClick={() => modalEstado(!modal)}>
                  {" "}
                  Cerrar y Enviar{" "}
                </button>
              </>
            )}

            {/* admin */}
            {pathname === "/admin/expediente/" + id && (
              <>
                <button
                  id="basicButton"
                  onClick={() => modalEstadoPagar(!modalPagar)}
                >
                  {" "}
                  Pagar{" "}
                </button>
                <button
                  id="basicButton"
                  onClick={() => modalEstadoRechazo(!modalRechazo)}
                  className="ms-2"
                >
                  {" "}
                  Rechazar{" "}
                </button>
              </>
            )}

            {/* pm */}
            {pathname === "/pm/expediente/" + id && (
              <>
                <button
                  id="basicButton"
                  onClick={() => modalEstadoSolicitud(!modalSolicitud)}
                >
                  {" "}
                  Aceptar{" "}
                </button>
                <button
                  id="basicButton"
                  onClick={() => modalEstadoRechazo(!modalRechazo)}
                  className="ms-2"
                >
                  {" "}
                  Rechazar{" "}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={travelAllowance}
        pagination
        paginationPerPage={5}
        paginationComponentOptions={paginationTable}
      />
      <Modal
        estado={modalImgEstado}
        className="test_class"
        cambiarEstado={modalCambiarEstado}
        ImgSrc={imageUrl}
        FacturaSrc={facturaUrl}
        imagenTicket={true}
      />

      <Modal
        estado={modal}
        cambiarEstado={modalEstado}
        saldo={total}
        id={id}
      />

      <Modal
        estado={modalSolicitud}
        cambiarEstado={modalEstadoSolicitud}
        aprovacionSolicitud={true}
        id={id}
      />

      <Modal
        estado={modalRechazo}
        cambiarEstado={modalEstadoRechazo}
        rechazarPago={true}
        id={id}
      />

      <Modal
        estado={modalPagar}
        cambiarEstado={modalEstadoPagar}
        confirmarPago={true}
        id={id}
      />
    </div>
  );
};
