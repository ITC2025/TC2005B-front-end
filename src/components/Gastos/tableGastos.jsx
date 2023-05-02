import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/TableStyle.css";
import { BadgeStatus } from "../BadgeStatus";
import TextField from "@mui/material/TextField";
import GastosDropdown from "./gastosOptDropdown";
import { useNavigate } from 'react-router-dom';
import Modal from "../modal/index"
import { imagen_gastos } from "../../apis/gastosApiTabla";
import { MdImage } from "react-icons/md"
import { Button } from "react-bootstrap";
import { proyecto_sum, proyecto_info } from "../../apis/gastosApiTabla";
import { useLocation } from "react-router-dom";

export const TableGastos = ({ id }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();


  const navSolicitar = () => {
    navigate('/user/solicitar');
  } 

  const navGastos = () => {
    navigate('/user/facturas');
  }
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([]);
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);
  const [modalImgEstado, modalCambiarEstado] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const [modal, modalEstado] = useState(false);

  // Funcion para mostrar datos con fetch
  const URL = "http://localhost:3001/expenses_table/vi/" + id;
  // const URL = "https://jsonplaceholder.typicode.com/users";
  const getTravelAllowance = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setTravelAllowance(data);
    setFilterTravelAllowance(data);
    // console.log(data);
  };

  // const getTravelAllowance = async () => {
  useEffect(() => {
    getTravelAllowance();
  }, []);


  const [suma, setSuma] = useState(0.0);
  const [anticipo, setAnticipo] =useState(0.0);

  const loadData = async () => {
      const jsonInfo = await proyecto_sum(id);
      console.log(jsonInfo);

      setSuma(jsonInfo.monto)
      
  }

  const loadData2 = async () => {
      const jsonInfo = await proyecto_info(id);
      console.log(jsonInfo);
      
      setAnticipo(jsonInfo[0].anticipo)
  }

  useEffect(() => {
      loadData();
      loadData2();
  })

  let total = anticipo - suma;

  const ImageComponent = async ({ idGasto }) => {

    const imageBlob = await imagen_gastos(idGasto);

    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  
    return imageUrl;
  };

  const OpenModal = (idRow) => {
    modalCambiarEstado(!modalImgEstado);
    const imgURL = ImageComponent(idRow);
    console.log(idRow);
    console.log(imgURL);
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
      cell: (row) => <MdImage onClick={() => OpenModal(row.id)}/>,
      width: "8%",
    },
  ];

  const actions = {
      name: "Acciones",
      cell: (row) => <GastosDropdown />,
      width: "8%",
      style: { paddingLeft: "0.5em" }
  };

  const empty = {
    name: "",
    width: "8%",
    style: { paddingLeft: "0.5em" }
  };

  {/*user*/}
  {pathname === "/user/expediente/" + id &&
    columns.push(actions);
           
  }

  {/*pm*/}
  {pathname === "/admin/expediente/" + id &&
    columns.push(empty);
           
  }

  {/*admin*/}
  {pathname === "/pm/expediente/" + id &&
    columns.push(empty);
           
  }



  

  const paginationTable = {
    rowsPerPageText: "Filas por pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  // mostrar la tabla
  return (
    <div className="container">
      <div className="row my-2 d-flex align-items-end">
        <div className="col-4">
          <button id="basicButton" onClick={navGastos} > Nuevo Gasto </button>
        </div>
        <div className="col-8 d-flex justify-content-end">
          <div className="col-4 mt-3">
            <button id="basicButton" onClick={() => modalEstado(!modal)} > Cerrar y Enviar </button>
            <button id="basicButton" className="ms-2" > Guardar </button>
          </div>
          <div className="d-flex justify-content-end">
            
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
      <Modal estado={modalImgEstado}
        cambiarEstado={modalCambiarEstado}
        ImgSrc={imageUrl}
        imagenTicket={true}>
      </Modal>


      
      <Modal estado={modal}
        cambiarEstado={modalEstado}
        saldo={total} />

    </div>
  );
};



