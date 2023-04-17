import  NavbarSC  from '../components/NavBar';
import  FormSolicit  from '../components/FormSolicit';
import '../syles/SolicitarViaticos.css';

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
        </>
    );
}

export default SolicitarViaticos;