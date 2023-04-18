import  NavbarSC  from '../components/NavBar';
import  FormSolicit  from '../components/FormSolicit';
import '../syles/SolicitarViaticos.css'
import Footer from '../components/SendSaveCost';

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
                <Footer />
            </div>
        </>
    );
}

export default SolicitarViaticos;