import { Col } from "react-bootstrap";
import '../../styles/colProyecto.css'
import { proyecto_info } from "../../apis/gastosApiTabla";
import { useEffect} from "react";
import { useState } from "react";
import mxnFormat from "../../utils/mxnFormat";

function ColInfoProyecto({id}) {

    
    const [fechaI, setFechaI] = useState("");
    const [fechaF, setFechaF] = useState("");
    const [anticipo, setAnticipo] =useState(0.0);

    const loadData = async () => {
        const jsonInfo = await proyecto_info(id);

        setFechaI(jsonInfo[0].fechaInicio)
        setFechaF(jsonInfo[0].fechaTermino)
        setAnticipo(jsonInfo[0].anticipo)
    }

    useEffect(() => {
        loadData();
    })

    return (
        <>
            <Col md={4} className="colDatos">
                <div className="idProyecto">
                    ID del proyecto:
                    <div>&nbsp;{id}</div>
                </div>
                <div>
                    Fecha de creación:
                    <div>&nbsp;{fechaI}</div>
                </div>
                <div>
                    Fecha de vencimiento:
                    <div>&nbsp;{fechaF}</div>
                </div>
                <div className="anticipoProyecto mt-2"> ANTICIPO DEL PROYECTO (MXN):
                    <div>&nbsp;{mxnFormat(anticipo)}</div>
                </div>
            </Col>
        </>
    );
}

export default ColInfoProyecto;
