import { Navbar, Nav, Container, Image, NavDropdown, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import '../../styles/navbar.css'
import { Outlet } from "react-router-dom";

// function deleteSession () {
//     const navigate = useNavigate();
//     function handleLogout() {
//         sessionStorage.clear();
//         navigate("/login", { replace: true});
//     }
//     return (
//         <NavDropdown.Item>
//             <Button onClick={handleLogout}>
//                 Log
//             </Button>
//         </NavDropdown.Item>
//     )
// }

// function Logout() {
//     const navigate = useNavigate();
// }

// function handleLogout() {
//     sessionStorage.clear();
//     navigate("/login");
// }

const NavbarSC = ({ client, projectManager, admin }) => {
    return (
        <>
            {/* !!!! cambiar los 'href=" "' a 'as={Link} to="/path"' 
                despues de hacer el routeo de componentes !!!! */}
            <Navbar className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <Image
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
                                    <Nav.Link className="nav-link" href="#"> <strong> MIS VIÁTICOS </strong> </Nav.Link>
                                    <Nav.Link className="nav-link" href="#"> <strong> SOLICITAR VIÁTICOS </strong> </Nav.Link>
                                    <Nav.Link className="nav-link" href="#"> <strong> FACTURAR VIÁTICOS </strong> </Nav.Link>
                                </>
                            }

                            {projectManager &&
                                <>
                                    <Nav.Link className="nav-link" href="#"> <strong> MIS PROYECTOS</strong> </Nav.Link>
                                    <Nav.Link className="nav-link" href="#"> <strong> SOLICITUD DE VIATICOS </strong> </Nav.Link>
                                    <Nav.Link className="nav-link" href="#"> <strong> HISTORIAL DE VIATICOS </strong> </Nav.Link>
                                </>
                            }

                            {admin &&
                                <>
                                    <Nav.Link className="nav-link" href="#"> <strong> SOLICITUD DE VIATICOS </strong> </Nav.Link>
                                    <Nav.Link className="nav-link" href="#"> <strong> HISTORIAL DE VIATICOS </strong> </Nav.Link>
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
                            <NavDropdown.Item className="nav-link" >  LOG OUT </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}


export default NavbarSC;