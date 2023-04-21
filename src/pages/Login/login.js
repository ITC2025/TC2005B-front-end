import { useState } from 'react';
import React from "react";
import logoNb from '../../images/logoNb.png';
import { getAuthenticationData, tokenValidation } from '../../utils/getApiData';
import '../../styles/login.css'
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  InputGroup,
} from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';



export default function Login() {
  const [email, setEmail] = useState('');
  const [userpassword, setPassword] = useState('');
  const [RenderIncorrect, setIncorrect] = useState(true);
  const navigate = useNavigate();

  let formData={
    'useremail':email,
    'userpassword':userpassword,
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, userpassword); // login es una función que enviará los datos al servidor
  }

  

   const login = (email, userpassword) => {
    setTimeout(() => {
      getAuthenticationData(email, userpassword).then(()=>{
        const response=JSON.parse(sessionStorage.getItem("data"))
        if (response.token!=null) {
          // Aquí podrías hacer algo si el usuario se autentica correctamente, como redirigirlo a otra página
          console.log('Usuario autenticado');
          setIncorrect(true)
          const rol=tokenValidation()
          switch(rol){
            case 1:
              navigate("/user");
              break
            case 2:
              navigate("/pm")
              break
            case 3:
              navigate("/admin")
              break
            case 4:
              navigate("/sysadmin")
              break
            default:
              navigate("/");
          }
        } else {
          // Aquí se muestra un mensaje de error si el email o la contraseña son incorrectos
          console.log('Email o contraseña incorrectos');
          setIncorrect(false)
        }
      })
    }, 1000); // Se simula un tiempo de espera de 1 segundo para la respuesta del servidor
  }
  console.log(formData)

  return (
    <>
      <div className="animated-background">
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={4} xs={12}>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-2">
                    <div className="containerImage">
                      <img src={logoNb} alt="logo" />
                    </div>
                    <div className="mt-3">
                      <Form>
                        <Form.Group className="m-3" id="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                              <FaUserAlt id="icon" />
                            </InputGroup.Text>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                              required
                              onChange={e => setEmail(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                        <Form.Group
                          className="m-3"
                          id="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon2">
                              <RiLockPasswordFill id="icon" />
                            </InputGroup.Text>
                            <Form.Control
                              type="password"
                              placeholder="Enter password"
                              required
                              onChange={e => setPassword(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                        <div className="d-grid mt-4">
                          <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Login
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
                {RenderIncorrect ? (
                  null
                ) : (
                  <div>Incorrect email or password</div>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}