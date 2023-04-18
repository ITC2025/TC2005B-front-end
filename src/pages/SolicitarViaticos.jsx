import  NavbarSC  from '../components/NavBar';
import  FormSolicit  from '../components/FormSolicit';
import '../styles/SolicitarViaticos.css'
import SendSaveCost from '../components/SendSaveCost';

function SolicitarViaticos() {
    return (
        <>
            <NavbarSC />
            <h1 id="HeaderTitle">Solicitar viaticos</h1>
            <hr />
            <div id="FormSolicitBody">
                <FormSolicit />
            </div>
            <div id="Footer">
                <hr />
                <SendSaveCost />  
            </div>
        </>
    );
}

export default SolicitarViaticos;