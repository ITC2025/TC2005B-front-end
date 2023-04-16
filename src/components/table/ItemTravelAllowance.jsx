import React, { useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import "../../styles/ItemTableAllowance.css"

function ItemTravelAllowance(id, date, project, description, amount, state) {
  const [filas, setFilas] = useState([
    {
      id: 1,
      date: "2021-01-01",
      project: "Proyecto 1",
      description: "Descripcion 1",
      amount: 100,
      state: "Aprobado",
    },
    {
      id: 2,
      date: "2021-01-02",
      project: "Proyecto 2",
      description: "Descripcion 2",
      amount: 200,
      state: "Aprobado",
    },
  ]);
  const [nuevaFila, setNuevaFila] = useState({});

  const handleChange = (event) => {
    setNuevaFila({
      ...nuevaFila,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilas([...filas, nuevaFila]);
    setNuevaFila({});
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Proyecto</th>
            <th>Descripcion</th>
            <th>Monto</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, index) => (
            <tr key={index}>
              <td>{fila.id}</td>
              <td>{fila.project}</td>
              <td>{fila.description}</td>
              <td>{fila.amount}</td>
              <td style={{}}>
                <Badge>En revisión</Badge>{" "}
              </td>
              <td>{} </td>
            </tr>
          ))}
          {/* <tr>
            <td>
              <input
                type="text"
                name="nombre"
                value={nuevaFila.nombre || ""}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="apellido"
                value={nuevaFila.apellido || ""}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="edad"
                value={nuevaFila.edad || ""}
                onChange={handleChange}
              />
            </td>
          </tr> */}
        </tbody>
      </Table>
      {/* <Button onClick={handleSubmit}>Añadir fila</Button> */}
    </>
  );
}

export default ItemTravelAllowance;
