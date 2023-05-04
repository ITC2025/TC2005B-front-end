import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Row, Col, Card, Container } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";
import { postCrearReporteGastos } from '../../apis/getApiData';

function Gastos({viaticoID}) {
  const [validated, setValidated] = useState(false);
  const [formGasto, setFormGasto] = useState([
    {
      ID_solicitud_viatico: viaticoID,
      concepto: "",
      ID_tipo_gasto: "",
      monto: "",
      imagen: "",
      xml: "",
      fecha: "",
      ID_status_reporte_gasto: "2"
    }
  ]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedFormGasto = [...formGasto];
    updatedFormGasto[index][name] = value;
    setFormGasto(updatedFormGasto);
  };

  const handleFileUpload = (event, index) => {
    const { name } = event.target;
    const file = event.target.files[0];

    const updatedFormGasto = [...formGasto];
    updatedFormGasto[index][name] = file;
    setFormGasto(updatedFormGasto);
  };

  const handleDeleteLine = (index) => {
    setFormGasto((prevFormGasto) =>
      prevFormGasto.filter((_, i) => i !== index)
    );
  };

const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    // Aquí puedes enviar los datos a la API utilizando la función postCrearReporteGastos
    formGasto.forEach((form) => {
      let data = new FormData();

      for (let key in form) {
        data.append(key, form[key]);
      }

      console.log(data);

      postCrearReporteGastos(data);

      window.location.href = "/user/expediente/" + viaticoID;
    });
  };

  const handleAddForm = () => {
    const newForm = {
      ID_solicitud_viatico: viaticoID,
      concepto: "",
      ID_tipo_gasto: "",
      monto: "",
      imagen: "",
      xml: "",
      fecha: "",
      ID_status_reporte_gasto: "2"
    };
    setFormGasto((prevFormGasto) => [...prevFormGasto, newForm]);
  };

  return (
    <>
      <Form validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Card id="container1">
              <Container>
                <div className="mt-3">

                  {formGasto.map((form, index) => (
                    <div key={index}>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Producto</label>
                            <input
                              type="text"
                              name="concepto"
                              value={form.concepto}
                              className="form-control"
                              onChange={(e) => handleChange(e, index)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Tipo</label>
                            <select
                              className="form-select"
                              name="ID_tipo_gasto"
                              value={form.ID_tipo_gasto}
                              aria-label="Default select example"
                              onChange={(e) => handleChange(e, index)}
                              required
                            >
                              <option value="" disabled>
                                Elige una opción
                              </option>
                              <option value="1">Comida</option>
                              <option value="2">Hospedaje</option>
                              <option value="3">Transporte</option>
                              <option value="4">Personal</option>
                              <option value="5">Materiales</option>
                              <option value="6">Otros</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Monto</label>
                            <input
                              type="number"
                              name="monto"
                              className="form-control"
                              placeholder="Monto"
                              onChange={(e) => handleChange(e, index)}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="my-4"></div>

                      <div className="row">
                        <div className="col-md-4">
                          <label>Ticket de compra (PNG)</label>
                          <div className="input-group mb-3">
                            <input
                              className="form-control"
                              name="imagen"
                              type="file"
                              onChange={(e) => handleFileUpload(e, index)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label>Factura digital (XML)</label>
                          <div className="input-group mb-3">
                            <input
                              className="form-control"
                              name="xml"
                              type="file"
                              onChange={(e) => handleFileUpload(e, index)}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label>Fecha de Compra</label>
                          <div className="input-group mb-3">
                            <input
                              type="date"
                              name="fecha"
                              value={form.fecha}
                              className="form-control"
                              placeholder="Fecha de Compra"
                              aria-label="Fecha de Compra"
                              onChange={(e) => handleChange(e, index)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <Button
                          type="button"
                          className="btn btn-danger"
                          id="botonB"
                          onClick={() => handleDeleteLine(index)}
                        >
                          Borrar
                        </Button>
                      </div>
                      <hr />
                    </div>
                  ))}

                  <div className="d-flex justify-content-center">
                    <Button
                      className="justify-content-between"
                      variant="danger"
                      id="button"
                      onClick={handleAddForm}
                    >
                      <BiMoney id="icon1" />
                      <label>AGREGAR GASTO</label>
                      <HiPlus id="icon2" />
                    </Button>
                  </div>
                </div>
              </Container>
            </Card>
          </Col>
        </Row>
        <div className="d-flex justify-content-end align-items-end" id="BotonesSC">
          <Button variant="danger" controlId="CGbutton" id="botonC1" href={"/user/expediente/" + viaticoID}>
            CANCELAR
          </Button>
          <Button variant="danger" type="submit" id="botonG1" noValidate>
            GUARDAR
          </Button>
        </div>
      </Form>
    </>
  );


};

export default Gastos;
