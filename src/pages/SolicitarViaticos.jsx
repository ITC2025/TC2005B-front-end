import  NavbarSC  from '../components/NavBar';
import  FormSolicit  from '../components/FormSolicit';
import '../styles/SolicitarViaticos.css'
import Footer from '../components/SendSaveCost';
import { Container, Row, Col } from 'react-bootstrap';

function SolicitarViaticos() {
    return (
        <>
            <NavbarSC />
            <h1 className='header-title'>Solicitar viaticos</h1>
            <hr />
            <div>
                <FormSolicit />
            </div>
            <hr />
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Footer />
                        </Col>
                    </Row>
                </Container>
                
            </div>
        </>
    );
}

export default SolicitarViaticos;