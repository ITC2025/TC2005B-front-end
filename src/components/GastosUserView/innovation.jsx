import React from 'react';
import { Col } from "react-bootstrap";
import styled from "styled-components";


function Innovation() {
    return (
        <>
            <Col md="auto"> <img src="../../images/shaefferSolutions.png" /> </Col>
            <Col md={6} className="colDireccion mb-4">
                <div>SSI Schaefer Ltda</div>
                <div>Rua dos Cardeais, 41 - Jd. Itália</div>
                <div>13289-188 Vinhedo, SP</div>
                <div>Brasil</div>
                <div>Telefone +55 (19) 3826-8080</div>
                <div>contacto.ha@ssi-schaefer.com</div>
            </Col>
        </>
    );
}

export default Innovation;

const Innovation_style = styled.div`
    text-align: left;
    padding-top: 5px;
`;
