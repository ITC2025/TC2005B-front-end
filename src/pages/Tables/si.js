
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import '../../styles/gastosTabla.css'
import TextField from "@mui/material/TextField";

// componenetes 
import { BadgeStatus } from "../../components/BadgeStatus";
import { useNavigate } from 'react-router-dom';
import TableDropdown from "../../components/table/TableDropdownGastos";
import Modal from "../../components/modal";

export const Tables = ({ tablaUser }) => {
    const navigate = useNavigate();

    const navSolicitar = () => {
        navigate('/user/solicitar');
    }

    const nuevoGasto = () => {
        navigate('/user/facturas')
    }

    // modal
    const [estadoM, cambiarEstadoM] = useState(false);


    // Configurar hooks
    const [travelAllowance, setTravelAllowance] = useState([]);
    const [filtertravelAllowance, setFilterTravelAllowance] = useState([]);

    // Funcion para mostrar datos con fetch
    const URL = "https://gorest.co.in/public/v2/users?page=1&per_page=20";
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

    // Funcion para filtrar datos
    const handleFilter = (e) => {
        const newData = filtertravelAllowance.filter((row) =>
            row.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setTravelAllowance(newData);
    };

    // configuracion de columnas
    let columns = [];
    // admin Mis Viaticos
    if (tablaUser === true) {
        return (
            columns = [
                {
                    name: "ID USER",
                    selector: (row) => row.id,
                    sortable: true,
                    width: "120px",
                },
                {
                    name: "Fecha",
                    selector: (row) => row.date,
                    sortable: true
                },
                {
                    name: "Nombre",
                    selector: (row) => row.name,
                    sortable: true,
                },
                {
                    name: "Project",
                    selector: (row) => row.email,
                    sortable: true,
                },
                {
                    name: "Estado",
                    selector: (row) => <BadgeStatus status={row.status} />,
                    width: "120px",
                    style: { paddingLeft: "0px" },
                },
                {
                    name: 'Description',
                    selector: row => row.gender,
                    sortable: true
                },
                {
                    name: 'Total',
                    selector: row => row.status,
                    sortable: true
                },
                {
                    name: "Actions",
                    cell: (row) => <TableDropdown />,
                    width: "80px",
                    style: { paddingLeft: "0.5em" },
                },
            ]
        );
    }

    const paginationTable = {
        rowsPerPageText: "Filas por pagina",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    };
    // mostrar la tabla
    return (
        <>
            <Container>

                <div className="row my-2 d-flex align-items-end">
                    <div className="col-4">
                        <button id="basicButton" onClick={nuevoGasto} > NUEVO GASTO </button>
                    </div>
                    <div className="col-8 d-flex justify-content-end">
                        <div>
                            <div className="d-flex justify-content-end">
                                <div>
                                    <button id="basicButton" > GUARDAR </button>
                                </div>

                                <div>
                                    <button id="basicButton" > EXPORTAR ECXEL </button>
                                </div>
                                <TextField
                                    id="outlined-basic"
                                    label="Buscar"
                                    variant="standard"
                                    onChange={handleFilter}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <DataTable
                    columns={columns}
                    data={travelAllowance.filter((row) => row.id === 1268683)}
                    pagination
                    paginationComponentOptions={paginationTable}
                    fixedHeader
                />

                {/* <Subtotal /> */}
            </Container >

            <Modal estado={estadoM}
                cambiarEstado={cambiarEstadoM}
                saldoNegativo={true}>
            </Modal>
        </>
    );
};



