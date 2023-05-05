import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Row, Col, Card, Container } from "react-bootstrap";
import { getGastos, updateGasto } from "../../apis/getApiData";

function EG({ viaticoID }) {
  const [validated, setValidated] = useState(false);
  const [formGasto, setFormGasto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gasto = await getGastos(viaticoID);
        setFormGasto(gasto);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos del gasto:", error);
      }
    };

    fetchData();
  }, [viaticoID]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormGasto({ ...formGasto, [name]: value });
  };

  const handleFileUpload = (event, index) => {
    const { name } = event.target;
    const file = event.target.files[0];

    const updatedFormGasto = [...formGasto];
    updatedFormGasto[index][name] = file;
    setFormGasto(updatedFormGasto);
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
      await updateGasto(formGasto, viaticoID);
      console.log("Gasto actualizado:", formGasto);
      
      // window.location.href = "/user/expediente/" + viaticoID;
    } catch (error) {
      console.error("Error al actualizar el gasto:", error);
    }
  };

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <>
      <Form validated={validated} onSubmit={handleSubmit} method="patch">
        <Row>
          <Col>
            <Card id="container1">
              <Container>
                <div className="mt-3">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Producto</label>
                        <input
                          type="text"
                          name="concepto"
                          className="form-control"
                          required
                          value={formGasto.concepto || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Tipo</label>
                        <select
                          className="form-select"
                          name="ID_tipo_gasto"
                          required
                          value={formGasto.ID_tipo_gasto || ""}
                          onChange={handleChange}
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
                          required
                          value={formGasto.monto || ""}
                          onChange={handleChange}
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
                          onChange={handleFileUpload}
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
                          onChange={handleFileUpload}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label>Fecha de Compra</label>
                      <div className="input-group mb-3">
                        <input
                          type="date"
                          name="fecha"
                          className="form-control"
                          placeholder="Fecha de Compra"
                          required
                          value={formGasto.fecha || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </Card>
          </Col>
        </Row>
        <div
          className="d-flex justify-content-end align-items-end"
          id="BotonesSC"
        >
          <Button
            variant="danger"
            controlId="CGbutton"
            id="botonC1"
            href={"/user/expediente/" + viaticoID}
          >
            CANCELAR
          </Button>
          <Button variant="danger" type="submit" id="botonG1" noValidate>
            ACTUALIZAR
          </Button>
        </div>
      </Form>
    </>

  );
}

export default EG;
