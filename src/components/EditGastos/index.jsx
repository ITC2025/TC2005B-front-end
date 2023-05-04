import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Row, Col, Card, Container } from "react-bootstrap";
import { getGastos, updateGasto } from "../../apis/getApiData";

function EG({ viaticoID }) {
  const [validated, setValidated] = useState(false);
  const [formGasto, setFormGasto] = useState([
    {
      ID_solicitud_viatico: viaticoID,
      concepto: "",
      ID_tipo_gasto: "",
      monto: "",
      imagen: {},
      factura: {},
      fecha: "",
      ID_status_reporte_gasto: "2"
    }
  ]);

  useEffect(() => {
    // Obtener los datos de los gastos utilizando el ID 
    const fetchData = async () => {
      const gastos = await getGastos(viaticoID);
      setFormGasto(gastos);
    };

    fetchData();
  }, [viaticoID]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedFormGasto = [...formGasto];
    updatedFormGasto[index][name] = value;
    setFormGasto(updatedFormGasto);
  };

  const handleFileUpload = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const blob = new Blob([reader.result], { type: file.type });

      if (file.type === "text/xml") {
        setFormGasto((prevFormGasto) =>
          prevFormGasto.map((form, i) =>
            i === index ? { ...form, factura: blob } : form
          )
        );
      } else {
        setFormGasto((prevFormGasto) =>
          prevFormGasto.map((form, i) =>
            i === index ? { ...form, imagen: blob } : form
          )
        );
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      // Enviar los datos actualizados mediante una solicitud PUT
      await Promise.all(
        formGasto.map((data) => updateGasto(data, viaticoID))
      );

      console.log("Gastos actualizados:", formGasto);
      //window.location.href = "/user/expediente/" + viaticoID;
    } catch (error) {
      console.error("Error al actualizar los gastos:", error);
    }
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
                              value={form.monto}
                              onChange={(e) => handleChange(e, index)}
                              required
                            />
                          </div>
                        </div>
                      </div>
    
                      <div className="my-4"></div>
    
                      <div className="row">
                        <div className="col-md-4">
                          <label>Ticker de compra (PNG)</label>
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
                              name="factura"
                              type="file"
                              onChange={(e) => handleFileUpload(e, index)}
                              required
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
                    </div>
                  ))}
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
            ACTUALIZAR
          </Button>
        </div>
        </Form>
                    
    </>
    );
};

export default EG;