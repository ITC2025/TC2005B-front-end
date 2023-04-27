import { Button } from 'react-bootstrap';
import { MdOutlineError, MdCheckCircle } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
// Styled Components
import styled from 'styled-components'

const Modal = ({ estado,
    cambiarEstado,
    solicitudExitosa,
    ocurrioError,
    saldoPositivo,
    saldoNegativo,
    confirmar,
    cancelar,
    aprovacionSolicitud,
    proyectoCreado }) => {
    return (
        <>
            {estado &&
                <Overlay>
                    <ContModal>
                        {solicitudExitosa &&
                            <>
                                <MdCheckCircle />
                                <h1> SOLICITUD EXITOSA </h1>
                                <Button onClick={() => enviarData()} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button>
                            </>
                        }

                        {proyectoCreado &&
                            <>
                                <MdCheckCircle />
                                <h1> PROYECTO CREADO </h1>
                                <Button onClick={() => enviarData()} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button>
                            </>
                        }

                        {ocurrioError &&
                            <>
                                <MdOutlineError />
                                <h1> SOLICITUD EXITOSA </h1>
                                <Button onClick={() => enviarData()} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button>
                            </>
                        }

                        {saldoPositivo &&
                            <>
                                <BsCashCoin />
                                <h1> SALDO POSITIVO</h1>
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ABONAR A OTRO VIATICO </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> PAGAR EN CAJA </Button>
                            </>
                        }

                        {saldoNegativo &&
                            <>
                                <BsCashCoin />
                                <h1> SALDO NEGATIVO</h1>
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ABONAR A OTRO VIATICO </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> REENBOLSO EN CAJA </Button>
                            </>
                        }

                        {confirmar &&
                            <>
                                <h1> CONFIRMAR </h1>
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {cancelar &&
                            <>
                                <h1> CONFIRMAR </h1>
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {aprovacionSolicitud &&
                            <>
                                <h1> APROVACION DE SOLICITUD </h1>
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
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
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important; 
    background: rgba(0,0,0,.60);
`;

const ContModal = styled.div`
    background: #FFF !important;
    width: 900px;
    min-height: 100px;
    border-radius: 10px;
    position: absolute !important;
    padding-top: 3em;
    padding-bottom: 3em;

    h1 {
        color: rgba(254,128,127);
    }

    svg {
        width: 20%;
        height: 20%;
        color: rgba(254,128,127);    
        justify-content: center;
        padding-bottom: 1em;
    }

    Button {
        color: #FFF !important;
        background: rgba(254,128,127) !important;
        border-color: rgba(254,128,127) !important;
    }

    Button:hover {
        color: red !important;
        background: rgb(254, 241, 0) !important;
        border-color: red !important;
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
