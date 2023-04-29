import { useEffect, useState } from "react";
import React from "react";
import logoNb from "../../images/logoNb.png";
import { getAuthenticationData, tokenValidation } from "../../utils/getApiData";
import "../../styles/login.css";
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
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [userpassword, setPassword] = useState("");
  const [RenderIncorrect, setIncorrect] = useState(true);
  const navigate = useNavigate();

  let formData = {
    useremail: email,
    userpassword: userpassword,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, userpassword); // login es una función que enviará los datos al servidor
  };

  useEffect(() =>{

    const autoRed = async () => {
      const route = await tokenValidation();

      switch (route.role) {
        case 1:
          navigate("/user");
          break;
        case 2:
          navigate("/pm");
          break;
        case 3:
          navigate("/admin");
          break;
        case 4:
          navigate("/sysadmin");
          break;
        default:
          navigate("/");
        }
    }
    autoRed();
  
  }, [])

  const login = async (email, userpassword) => {
    // setTimeout(() => {
    const response1 = await getAuthenticationData(email, userpassword);
    console.log(response1);
    const response2 = await tokenValidation();
    console.log(response2.role);

    switch (response2.role) {
      case 1:
        navigate("/user");
        break;
      case 2:
        navigate("/pm");
        break;
      case 3:
        navigate("/admin");
        break;
      case 4:
        navigate("/sysadmin");
        break;
      default:
        navigate("/");
    }
  };

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
                        <Form.Group className="m-3" id="login-form-group">
                          <Form.Label id="login-form-label">
                            Email address
                          </Form.Label>
                          <InputGroup className="mb-3" id='input-form-group'>
                            <InputGroup.Text id="basic-addon1">
                              <FaUserAlt id="login-icon" />
                            </InputGroup.Text>
                            <Form.Control
                              id='login-input'
                              type="email"
                              placeholder="Enter email"
                              required
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                        <Form.Group className="m-3" id="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon2">
                              <RiLockPasswordFill id="login-icon" />
                            </InputGroup.Text>
                            <Form.Control
                              id='login-input'
                              type="password"
                              placeholder="Enter password"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                        <div className="d-flex justify-content-center ">
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Login
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
                {RenderIncorrect ? null : (
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
