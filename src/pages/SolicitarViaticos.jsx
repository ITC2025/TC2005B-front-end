import  NavbarSC  from '../components/NavBar';
import  FormSolicit  from '../components/FormSolicit';
import '../syles/SolicitarViaticos.css'
import SolicitarModal from '../components/RequestModal';
import Footer from '../components/Footer';

function SolicitarViaticos() {
    return (
        <>
            <NavbarSC />
            <h1>Solicitar viaticos</h1>
            <hr />
            <div>
                <FormSolicit />
            </div>
            <hr />
            <div>
                <SolicitarModal />
                <Footer />
            </div>
        </>
    );
}

export default SolicitarViaticos;