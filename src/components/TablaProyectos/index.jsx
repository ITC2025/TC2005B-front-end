import React from "react";
import { useTable } from "react-table";
import { Table } from "react-bootstrap/Table";
import {
  InputGroup,
  Button,
  Container,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import "../../styles/tableProjects.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

function TablaProyectos() {
  const data = React.useMemo(
    () => [
      {
        col1: "AD019",
        col2: "Oficina",
        col3: "Administrativo",
        col4: "Javier Jauregui",
        col5: <BiDotsVerticalRounded />,
      },
      {
        col1: "GE004",
        col2: "Gerencia",
        col3: "Gerentes",
        col4: "Andre Montoya",
        col5: <BiDotsVerticalRounded />,
      },
      {
        col1: "RH009",
        col2: "Recursos Humanos",
        col3: "Personal",
        col4: "Kevin Ruiz",
        col5: <BiDotsVerticalRounded />,
      },
      {
        col1: "PR003",
        col2: "Prouduccion",
        col3: "Capacitacion",
        col4: "Marco Marin",
        col5: <BiDotsVerticalRounded />,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Nombre",
        accessor: "col2",
      },
      {
        Header: "Descripcion",
        accessor: "col3",
      },
      {
        Header: "Responsable",
        accessor: "col4",
      },
      {
        Header: "Acciones",
        accessor: "col5",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <Container className="d-flex">
        <Button variant="danger">Crear proyecto</Button>
        <InputGroup className="my-3">
          <Form.Control
            className="ms-5"
            type="text"
            required
            placeholder="Buscar proyectos"
          />
        </InputGroup>
      </Container>
      <table id="tabladeproyectos" className="table m-4">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    background: "#EBE8E7",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        background: "white",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TablaProyectos;
