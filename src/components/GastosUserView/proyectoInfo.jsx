import React from 'react';
import { Col } from "react-bootstrap";
import styled from "styled-components";

function ProyectosInfo(props) {
    return (
        <>
            <Col md={4} className="colDatos">
                <div className="idProyecto">
                    ID del proyecto:
                    <div></div>
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

export default ProyectosInfo;