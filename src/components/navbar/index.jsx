import { Image} from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../../styles/navbar.css'
import { Outlet } from "react-router-dom";
import { sessionDelete, tokenID } from "../../apis/getApiData";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavbarSC = ({ client, projectManager, admin }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [activeTab, setActiveTab] = useState('nav-link');
    const [username, setUserName] = useState('USERNAME');

    const getUserName = async () => {
        const token = await tokenID();
        
        const url = 'http://localhost:3001/users/' + token.id;
        const options = {
            method: "GET",
            credentials:"include",
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const rawResponse = await fetch(url, options)
        const response = await rawResponse.json();
        setUserName(`${response[0].name} ${response[0].apellido}`)
        return;
    }

    // homepage
    const home = () => {
        navigate('');
    }

    // user
    const userSolicitud = () => {
        navigate('/user/solicitar');
    }
    // const facturarViaticos = () => {
    //     navigate('/user/');
    // }
    const misViaticos = () => {
        navigate('/user/viaticos');
    }

    // pm
    const pmProyectos = () => {
        navigate('/pm/proyectos');
    }
    const pmSolicitud = () => {
        navigate('/pm/solicitudes');
    }
    const pmHistorial = () => {
        navigate('/pm/historico');
    }

    // admin
    const adminSolicitud = () => {
        navigate('/admin/solicitudes');
    }
    const adminHistorial = () => {
        navigate('/admin/historial');
    }

    useEffect(() => {
        const path = location.pathname;
        setActiveTab(path);
        getUserName();
    }, [location]);

    return (
        <>
            <Navbar className='navbar' expand="lg">
                <Container>

                    <Navbar.Brand onClick={home} >
                        <Image
                            className="logo"
                            src="../../images/logo.png"
                            width="auto"
                            height="33"
                            alt="logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                            {client &&
                                <>
                                    <Nav.Link className={activeTab === "/user/viaticos" ? 'active' : 'nav-link'} onClick={misViaticos}> <strong> MIS VIÁTICOS </strong> </Nav.Link>
                                    <Nav.Link className={activeTab === "/user/solicitar" ? 'active' : 'nav-link'} onClick={userSolicitud}> <strong> SOLICITAR VIÁTICOS </strong> </Nav.Link>
                                    {/* <Nav.Link className="nav-link" onClick={facturarViaticos}> <strong> FACTURAR VIÁTICOS </strong> </Nav.Link> */}
                                </>
                            } 

                            {projectManager &&
                                <>
                                    <Nav.Link className={activeTab === "/pm/proyectos" ? 'active' : 'nav-link'} onClick={pmProyectos}> <strong> MIS PROYECTOS</strong> </Nav.Link>
                                    <Nav.Link className={activeTab === "/pm/solicitudes" ? 'active' : 'nav-link'} onClick={pmSolicitud}> <strong> SOLICITUDES A REVISAR </strong> </Nav.Link>
                                    <Nav.Link className={activeTab === "/pm/historico" ? 'active' : 'nav-link'} onClick={pmHistorial}> <strong> HISTORIAL DE VIÁTICOS </strong> </Nav.Link>
                                </>
                            }

                            {admin &&
                                <>
                                    <Nav.Link className={activeTab === "/admin/solicitudes" ? 'active' : 'nav-link'} onClick={adminSolicitud}> <strong> SOLICITUDES A REVISAR </strong> </Nav.Link>
                                    <Nav.Link className={activeTab === "/admin/historial" ? 'active' : 'nav-link'} onClick={adminHistorial}> <strong> HISTORIAL DE SOLICITUDES </strong> </Nav.Link>
                                </>
                            }                       
                    </Nav>
                    <Nav className="ms-auto">
                        <div className="d-inline-flex justify-content-center">
                            <Image
                                src="../../images/user.png"
                                width="40"
                                height="40"
                                alt="user"
                                className="roundedCircle"
                            />
                            <NavDropdown title={username} id="basic-nav-dropdown">

                            <NavDropdown.Item className="nav-link" onClick={sessionDelete} style={{textAlign: "center"}}>  LOG OUT </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Outlet />

        </>
    )    
}

export default NavbarSC;
