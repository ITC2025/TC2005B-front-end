import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import '../../styles/navbar.css'
import { Outlet } from "react-router-dom";
import { sessionDelete } from "../../apis/getApiData";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavbarSC = ({ client, projectManager, admin }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [activeTab, setActiveTab] = useState('nav-link');

    // homepage
    const home = () => {
        navigate('/');
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
        navigate('/pm/crearproyecto');
    }
    const pmHistorial = () => {
        navigate('/pm/historico');
    }

    // admin
    const adminSolicitud = () => {
        navigate('/admin/');
    }
    const adminHistorial = () => {
        navigate('/admin/');
    }

    useEffect(() => {
        const path = location.pathname;
        setActiveTab(path);
    }, [location]);

    return (
        <>
            <Navbar className="navbar" expand="lg">
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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center pe-5 me-5">
                        <Nav>
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
                                    <Nav.Link className={activeTab === "/pm/crearproyecto" ? 'active' : 'nav-link'} onClick={pmSolicitud}> <strong> SOLICITUD DE VIATICOS </strong> </Nav.Link>
                                    <Nav.Link className={activeTab === "/pm/historico" ? 'active' : 'nav-link'} onClick={pmHistorial}> <strong> HISTORIAL DE VIATICOS </strong> </Nav.Link>
                                </>
                            }

                            {admin &&
                                <>
                                    <Nav.Link className={activeTab === "/admin/" ? 'active' : 'nav-link'} onClick={adminSolicitud}> <strong> SOLICITUD DE VIATICOS </strong> </Nav.Link>
                                    <Nav.Link className={activeTab === "/admin/" ? 'active' : 'nav-link'} onClick={adminHistorial}> <strong> HISTORIAL DE VIATICOS </strong> </Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Image
                            src="../../images/user.png"
                            width="40"
                            height="40"
                            alt="user"
                            className="roundedCircle"
                        />
                        <NavDropdown title="USERNAME" id="basic-nav-dropdown">

                            <NavDropdown.Item className="nav-link" onClick={sessionDelete}>  LOG OUT </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default NavbarSC;
