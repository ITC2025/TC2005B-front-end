import { Button } from 'react-bootstrap';
import { MdOutlineError, MdCheckCircle, MdClose } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
// Styled Components
import styled from 'styled-components'

const Modal = ({ estado,
    cambiarEstado,
    solicitudExitosa,
    ocurrioError,
    confirmar,
    cancelar,
    aprovacionSolicitud,
    imagenTicket,
    proyectoCreado,
    ImgSrc,
    saldo,
    rechazarPago,
    confirmarPago,
    motivoRechazo }) => {
    return (
        <>
            {estado &&
                <Overlay>
                    <ContModal>
                        <BotonCerrar>
                            <MdClose id='cerrar' onClick={() => cambiarEstado(false)} />
                        </BotonCerrar>

                        {solicitudExitosa &&
                            <>
                                <MdCheckCircle id='imagen' />
                                <h1> SOLICITUD EXITOSA </h1>
                                <Button onClick={() => enviarData()} id='basicButton' className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button>
                            </>
                        }

                        {proyectoCreado &&
                            <>
                                <MdCheckCircle id='imagen' />
                                <h1> PROYECTO CREADO </h1>
                                <Button onClick={() => enviarData()} id='basicButton' className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button>
                            </>
                        }

                        {ocurrioError &&
                            <>
                                <MdOutlineError id='imagen' />
                                <h1> SOLICITUD EXITOSA </h1>
                                <Button onClick={() => enviarData()} id='basicButton' className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button>
                            </>
                        }

                        {saldo > 0 &&
                            <>
                                <BsCashCoin id='imagen' />
                                <h1> SALDO POSITIVO</h1>
                                <Button onClick={() => cambiarEstado(false)} id='basicButton' className='mt-3' size="lg" variant="ligth"> ABONAR A OTRO VIATICO </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='basicButton' className='mt-3' size="lg" variant="ligth"> PAGAR EN CAJA </Button>
                            </>
                        } {saldo <= 0 &&
                            <>
                                <BsCashCoin id='imagen' />
                                <h1> SALDO NEGATIVO</h1>
                                <Button onClick={() => cambiarEstado(false)} id='basicButton' className='mt-3' size="lg" variant="ligth"> ABONAR A OTRO VIATICO </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='basicButton' className='mt-3' size="lg" variant="ligth"> REEMBOLSO EN CAJA </Button>
                            </>
                        }

                        {confirmar &&
                            <>
                                <h1> CONFIRMAR </h1>
                                <Button onClick={() => cambiarEstado(false)} id='basicButton' className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {cancelar &&
                            <>
                                <h1> CONFIRMAR </h1>
                                <Button onClick={() => cambiarEstado(false)} id='basicButton' className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {aprovacionSolicitud &&
                            <>
                                <h1> APROBACION DE SOLICITUD </h1>
                                <Button onClick={() => cambiarEstado(false)} id='basicButton' className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {imagenTicket &&
                            <>
                                <img src={ImgSrc} alt="Imagen ticket"></img>
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger">CLOSE</Button>
                            </>
                        }

                        {rechazarPago &&
                            <>
                                <h1> RECHAZAR PAGO </h1>

                                <div class="modal-textarea">
                                    <p>Motivo de rechazo: </p>
                                    <textarea rows="8" />
                                </div>

                                <Button onClick={() => cambiarEstado(false)} id='basicButton' className='mt-3' size="lg" variant="ligth"> RECHAZAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {confirmarPago &&
                            <>
                                <h1> CONFIRMACION DE PAGO </h1>
                                <div class="modal-textarea">
                                    <p>Confirmacion de pago: </p>
                                    <textarea rows="8" />
                                </div>

                                <Button onClick={() => cambiarEstado(false)} id='basicButton' className='mt-3' size="lg" variant="ligth"> PAGAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {motivoRechazo &&
                            <>
                                <h1> MOTIVO DE RECHAZO</h1>
                                <p> warala warala </p>
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger">CLOSE</Button>
                            </>
                        }

                    </ContModal>
                </Overlay >
            }
        </>
    );

    function enviarData() {
        cambiarEstado(false)
        alert('si sirve');
    }
}

export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex ;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.60);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 20px; 
`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: #FFF;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
       background: #f2f2f2;
    }
`;

const ContModal = styled.div`
    background: #FFF;
    width: 900px;
    min-height: 100px;
    border-radius: 10px;
    position:relative;
    padding-top: 3em;
    padding-bottom: 3em;

    .modal-textarea {
        background-color: #ECECEC;
        padding-top: 1em;
        padding-bottom: 2em;
        margin-right: 2em;
        margin-left: 2em;
        border-radius: 15px;
    }

    .modal-textarea p {
        font-weight:bold;
    }

    .modal-textarea textarea {
        color: #000;
        width: 80%;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 5px;
    }

    h1 {
        color: rgba(254,128,127);
    }

    #imagen {
        width: 20%;
        height: 20%;
        color: rgba(254,128,127);    
        justify-content: center;
        padding-bottom: 1em;
    }

    #cerrar {
        color: rgba(254,128,127);   
        width: 30px;
        height: 30px;
    }

    #basicButton {
        color: #FFF !important;
        background: rgba(254,128,127) !important;
        border-color: rgba(254,128,127) !important;
    }

    #basicButton:hover {
        color: red !important;
        background: rgb(254, 241, 0) !important;
        border-color:  red !important;
    }

    #cancelButton {
        color:  rgba(254,128,127) !important;
        background: #FFF !important;
    }

    #cancelButton:hover {
        background:  rgba(248,248,248) !important;
        color: red !important;
        border-color: red !important;
    }
`;
