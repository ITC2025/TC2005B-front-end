
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

import Modal from './modal/index.jsx';

function Test() {
    const [modalEstado1, modalCambiarEstado1] = useState(false);
    const [modalEstado2, modalCambiarEstado2] = useState(false);
    const [modalEstado3, modalCambiarEstado3] = useState(false);
    const [modalEstado4, modalCambiarEstado4] = useState(false);
    const [modalEstado5, modalCambiarEstado5] = useState(false);
    const [modalEstado6, modalCambiarEstado6] = useState(false);
    const [modalEstado7, modalCambiarEstado7] = useState(false);

    return (
        <>
            <Container className='mt-5'>
                <Button onClick={() => modalCambiarEstado1(!modalEstado1)} variant="primary">Modal 1</Button> {' '}
                <Button onClick={() => modalCambiarEstado2(!modalEstado2)} variant="primary">Modal 2</Button> {' '}
                <Button onClick={() => modalCambiarEstado3(!modalEstado3)} variant="primary">Modal 3</Button> {' '}
                <Button onClick={() => modalCambiarEstado4(!modalEstado4)} variant="primary">Modal 4</Button> {' '}
                <Button onClick={() => modalCambiarEstado5(!modalEstado5)} variant="primary">Modal 5</Button> {' '}
                <Button onClick={() => modalCambiarEstado6(!modalEstado6)} variant="primary">Modal 6</Button> {' '}
                <Button onClick={() => modalCambiarEstado7(!modalEstado7)} variant="primary">Modal 7</Button> {' '}

            </Container>

            {/* Modal 1 */}
            < Modal estado={modalEstado1}
                cambiarEstado={modalCambiarEstado1}
                msg={'CONFIRMAR'}
                twoButtons={true}>
            </Modal>

            {/* Modal 2 */}
            < Modal estado={modalEstado2}
                cambiarEstado={modalCambiarEstado2}
                msg={'CANCELAR'}
                twoButtons={true}>
            </Modal>

            {/* Modal 3 */}
            < Modal estado={modalEstado3}
                cambiarEstado={modalCambiarEstado3}
                msg={'SOLICITUD EXITOSA'}
                oneButton={true}
                succesIcon={true}>
            </Modal>

            {/* Modal 4 */}
            < Modal estado={modalEstado4}
                cambiarEstado={modalCambiarEstado4}
                msg={'OCURRIÓ UN ERROR'}
                oneButton={true}
                excalmartionIcon={true}>
            </Modal>

            {/* Modal 5 */}
            < Modal estado={modalEstado5}
                cambiarEstado={modalCambiarEstado5}
                msg={'APROVACIÓN DE SOLICITUD'}
                twoButtons={true}>
            </Modal>

            {/* Modal 6 */}
            <Modal estado={modalEstado6}
                cambiarEstado={modalCambiarEstado6}
                msg='SALDO POSITIVO'
                saldoPositivo={true}
                cajaButtons={true}>
            </Modal>

            {/* Modal 7 */}
            <Modal estado={modalEstado7}
                cambiarEstado={modalCambiarEstado7}
                msg='SALDO NEGATIVO'
                saldoPositivo={true}
                cajaButtons={true}>
            </Modal>
        </>
    );

}

export default Test;