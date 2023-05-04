import { React, useState, useEffect } from "react";
import { Col, Row, Button, Container, Form, InputGroup } from "react-bootstrap";
import {
  MdCalendarMonth,
  MdLocationPin,
  MdExpandMore,
  MdOutlineFileUpload,
} from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";
import "../../styles/formProject.css";
import { postProject } from "../../utils/PostProject";
import { useLocation } from "react-router-dom";

export default function FormProject({ PmData }) {
  const { pathname } = useLocation();
  //Hooks
  const [formData, setFormData] = useState({
    nombre: "",
    codigoProyecto: "",
    descripcion: "",
  });

  const postToDB = () => {
    postProject(formData.nombre, formData.codigoProyecto, formData.descripcion)
  }


  const handleForm = (event) => {
    postToDB();
  }

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    const handleInputChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    return (
      <>
        <Container className="d-flex justify-content-start">
          <h3>Nuevo Proyecto</h3>
        </Container>
        <Container className="justify-content-center">
          <hr />
          <Form onSubmit={handleForm}>
            <Form.Group className="m-3" controlId="formBasicUp">
              <Row>
                <Col>
                  <Form.Label className="text-center">Nombre</Form.Label>

                  <InputGroup className="mb-3">
                    <Form.Control name="nombre" value={formData.nombre} type="text" onChange={handleInputChange} required />
                  </InputGroup>
                </Col>
                <Col>
                  <Form.Label className="text-left">Código</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control name="codigoProyecto" value={formData.codigoProyecto} type="text" onChange={handleInputChange} required />
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicDown" id="group2">
              <Row>
                <Col>
                  <Form.Label>Descripcion</Form.Label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea2"
                    rows="6"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </Col>
              </Row>
            </Form.Group>
            <Container className="d-flex justify-content-end">
              <Button type="submit" > Crear Proyecto </Button>
            </Container>
          </Form>
        </Container>
        <Container className="fixed-bottom">
          <hr />
        </Container>
      </>
    );
  }

  return (
    <>
      <Container className="d-flex justify-content-start">
        <h3>Nuevo Proyecto</h3>
      </Container>
      <Container className="justify-content-center">
        <hr />
        <Form onSubmit={handleForm}>
          <Form.Group className="m-3" controlId="formBasicUp">
            <Row>
              <Col>
                <Form.Label className="text-center">Nombre</Form.Label>

                <InputGroup className="mb-3">
                  <Form.Control name="nombre" value={formData.nombre} type="text" onChange={handleInputChange} required />
                </InputGroup>
              </Col>
              <Col>
                <Form.Label className="text-left">Código</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control name="codigoProyecto" value={formData.codigoProyecto} type="text" onChange={handleInputChange} required />
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicDown" id="group2">
            <Row>
              <Col>
                <Form.Label>Descripcion</Form.Label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea2"
                  rows="6"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </Col>
            </Row>
          </Form.Group>
          {pathname !== "/admin/proyectos" && <Button type="submit">Submit</Button>}
        </Form>
      </Container>
      <Container className="fixed-bottom">
        <hr />
      </Container>
    </>
  );
}
