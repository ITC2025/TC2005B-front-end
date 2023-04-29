import { Col } from "react-bootstrap";
import '../../styles/colProyecto.css'

export const ColInfoProyecto = (props) => {
    return (
        <>
            <Col md={4} className="colDatos">
                <div className="idProyecto">
                    ID del proyecto:
                    <div>  {props.id}</div>
                </div>
                <div>
                    Fecha de creación:
                    <div>------</div>
                </div>
                <div>
                    Fecha de vencimiento:
                    <div>------</div>
                </div>
                <div className="anticipoProyecto mt-2"> ANTICIPO DEL PROYECTO (MXN):
                    <div>------</div>
                </div>
            </Col>
        </>
    );
}

// export default ColInfoProyecto;
