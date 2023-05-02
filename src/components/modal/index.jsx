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
    imagenTicket,
    proyectoCreado,
    ImgSrc }) => {
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
                                <h1> APROBACION DE SOLICITUD </h1>
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {imagenTicket &&
                            <>
                                <img src={ImgSrc} alt="Imagen ticket"></img>
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

const ContModal = styled.div`
    background: #FFF;
    width: 900px;
    min-height: 100px;
    border-radius: 10px;
    position:relative;
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
        color: #FFF;
        background: rgba(254,128,127);
        border-color: rgba(254,128,127);
    }

    Button:hover {
        color: red;
        background: rgb(254, 241, 0);
        border-color: red;
    }

    #cancelButton {
        color:  rgba(254,128,127);
        background: #FFF;
    }
    #cancelButton:hover {
        background:  rgba(248,248,248);;
        color: red;
        border-color: red;
    }
    
`;
