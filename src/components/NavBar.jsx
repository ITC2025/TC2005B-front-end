import { Navbar, Nav, Container, Image } from "react-bootstrap";
import  '../styles/NavBar.css'

const NavbarSC = () => {
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
                            <Nav.Link className="nav-link" href="#"> <strong> MIS VIÁTICOS </strong> </Nav.Link>
                            <Nav.Link className="nav-link" href="#"> <strong> SOLICITAR VIÁTICOS </strong> </Nav.Link>
                            <Nav.Link className="nav-link" href="#"> <strong> FACTURAR VIÁTICOS </strong> </Nav.Link>

                            {/*
                            <Nav.Link className="nav-link" as={Link to="/"}> <strong> MIS VIÁTICOS </strong> </Nav.Link>
                            <Nav.Link className="nav-link" as={Link to="/"}> <strong> SOLICITAR VIÁTICOS </strong> </Nav.Link>
                            <Nav.Link className="nav-link" as={Link to="/"}> <strong> FACTURAR VIÁTICOS </strong> </Nav.Link>
                            */}

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
                        <Nav.Link className="nav-link" href="#"> <strong> USERNAME </strong> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* <style> {`
            .navbar {
                background-color: rgb(254, 241, 0);
            }
            .nav-link {
                color: black
            }
            .nav-link:hover {
                color: rgb(246, 8, 33);
                text-decoration: underline;
            }
            `}
            </style> */}
        </>
    )
}
export default NavbarSC;