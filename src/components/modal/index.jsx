import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { MdOutlineError, MdCheckCircle, MdClose } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { 
    send_expenses,
    accept_viatico,
    paid_viatico,
    paid_expenses,
    reject_viatico,
    approve_expenses,
    reject_expenses,
    send_viatico,
    comentarioRechazo,
    refBancaria
} from "../../apis/gastosApiTabla";

const Modal = ({ estado,
    cambiarEstado,
    solicitudExitosa,
    ocurrioError,
    confirmar,
    cancelar,
    aprovacionSolicitud,
    aprovacionGastos,
    rechazoGastos,
    rechazoViaticos,
    imagenTicket,
    proyectoCreado,
    ImgSrc,
    FacturaSrc,
    saldo,
    pagarViaticos,
    pagarGastos,
    enviarGastos,
    motivoRechazoSolicitud, 
    mostrarReferencia, id }) => {
    
    // hooks 
    const [refBank, setRefBank] = useState('');
    const [comRechazo, setComRechazo] = useState('');
    const [msgRechazo, setMsgRechazo] = useState('');
    const [bancoRef, setBancoRef] = useState('');

    const navigate = useNavigate();
    
    // comentario de rechazo
    useEffect  (() => {
        async function fetchComentario() {
            const data = await comentarioRechazo(id)
            setMsgRechazo(data);
            
        }
        fetchComentario();

        async function fetchReferencia() {
            const ref = await refBancaria(id)
            setBancoRef(ref);

        }
        fetchReferencia();

    }, [id]);
    
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
                                <Button onClick={() => cambioEstadoGasto()} id='basicButton' className='mt-3' size="lg" variant="ligth"> ABONAR A OTRO VIATICO </Button> {' '}
                                <Button onClick={() => cambioEstadoGasto()} id='basicButton' className='mt-3' size="lg" variant="ligth"> PAGAR EN CAJA </Button>
                            </>
                        } {saldo <= 0 &&
                            <>
                                <BsCashCoin id='imagen' />
                                <h1> SALDO NEGATIVO</h1>
                                <Button onClick={() => cambioEstadoGasto()} id='basicButton' className='mt-3' size="lg" variant="ligth"> ABONAR A OTRO VIATICO </Button> {' '}
                                <Button onClick={() => cambioEstadoGasto()} id='basicButton' className='mt-3' size="lg" variant="ligth"> REEMBOLSO EN CAJA </Button>
                            </>
                        }

                        {enviarGastos &&
                            <>
                                <h1> ENVIAR GASTOS A REVISIÓN </h1>
                                <Button onClick={() => cambioEstadoGasto()} id='basicButton' className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
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
                                <h1> APROBAR SOLICITUD </h1>
                                <Button onClick={() => aceptarViatico()} id='basicButton' className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {aprovacionGastos &&
                            <>
                                <h1> APROBAR GASTOS </h1>
                                <Button onClick={() => aceptarGastos()} id='basicButton' className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {rechazoGastos &&
                            <>
                                <h1> RECHAZAR GASTOS </h1>

                                <div class="modal-textarea">
                                    <p>Motivo de rechazo: </p>
                                    <textarea value={comRechazo} onChange={enviarCom} rows="8" />
                                </div>

                                <Button onClick={() => rechazarGastos()} id='basicButton' className='mt-3' size="lg" variant="ligth"> RECHAZAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {rechazoViaticos &&
                            <>
                                <h1> RECHAZAR SOLICITUD DE VIÁTICOS </h1>

                                <div class="modal-textarea">
                                    <p>Motivo de rechazo: </p>
                                    <textarea value={comRechazo} onChange={enviarCom} rows="8" />
                                </div>

                                <Button onClick={() => rechazarViatico()} id='basicButton' className='mt-3' size="lg" variant="ligth"> RECHAZAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {imagenTicket &&
                            <>
                                <img src={ImgSrc} class="ticket_image" alt="Imagen ticket"></img>
                                <div className='col-12 d-flex justify-content-center'>
                                <div className='col-6 d-flex justify-content-around'>
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger">CLOSE</Button>
                                {FacturaSrc && 
                                    <>
                                        <Button onClick={() => {window.open(FacturaSrc, "_blank")}} id='cancelButton' className='mt-3' size="lg" variant="danger">FACTURA</Button>
                                    </>
                                }
                                </div>
                                </div>
                            </>
                        }

                        {pagarViaticos &&
                            <>
                                <h1> CONFIRMACION DE PAGO DE VIÁTICOS</h1>
                                <div class="modal-textarea">
                                    <p> Introduce la referencia bancaria: </p>
                                    <textarea value={refBank} onChange={enviarRef} rows="3" />
                                </div>

                                <Button onClick={() => pagadoViatico()} id='basicButton' className='mt-3' size="lg" variant="ligth"> PAGAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {pagarGastos &&
                            <>
                                <h1> CONFIRMACION DE PAGO DE GASTOS</h1>
                                <div class="modal-textarea">
                                    <p> Introduce la referencia bancaria: </p>
                                    <textarea value={refBank} onChange={enviarRef} rows="3" />
                                </div>

                                <Button onClick={() => pagadoGastos()} id='basicButton' className='mt-3' size="lg" variant="ligth"> PAGAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }
                        

                        {motivoRechazoSolicitud &&
                            <>  
                                <h1> MOTIVO RECHAZO </h1>
                                <p> {msgRechazo.comentario} </p>
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger">CLOSE</Button>
                            </>
                        }

                        {mostrarReferencia &&
                            <>
                                <h1> REFERENCIA DE PAGO </h1>
                                <div class="modal-textarea">
                                    <p> {bancoRef.referencia} </p>
                                </div>

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

    function enviarRef(event) {
        setRefBank(event.target.value);
    }

    function enviarCom(event) {
        setComRechazo(event.target.value);
    }

    function cambioEstadoGasto() {
        send_expenses(JSON.parse(id));
        cambiarEstado(false);
        navigate("/user/viaticos");
    }

    function aceptarViatico() {
        accept_viatico(JSON.parse(id));
        cambiarEstado(false);
        navigate(-1);
    }

    function aceptarGastos() {
        approve_expenses(JSON.parse(id));
        cambiarEstado(false);
        navigate(-1);
    }

    function rechazarGastos(){
        reject_expenses(JSON.parse(id), comRechazo);
        cambiarEstado(false);
        navigate(-1);
    }

    function rechazarViatico() {
        reject_viatico(JSON.parse(id), comRechazo);
        cambiarEstado(false);
        navigate(-1);
    }

    function pagadoViatico() {
        paid_viatico(JSON.parse(id), refBank);
        cambiarEstado(false);
        navigate(-1);
    }

    function pagadoGastos() {
        paid_expenses(JSON.parse(id), refBank);
        cambiarEstado(false);
        navigate(-1);
    }
}

export default Modal;

const Overlay = styled.div`
  width: 100vw !important;
  height: 100vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  z-index: 9999 !important;

  background: rgba(0, 0, 0, 0.6);
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
  color: #fff;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #f2f2f2;
  }
`;

const ContModal = styled.div`
  background: #fff;
  width: 900px;
  min-height: 100px;
  border-radius: 10px;
  position: relative;
  padding-top: 3em;
  padding-bottom: 3em;

  .modal-textarea {
    background-color: #ececec;
    padding-top: 1em;
    padding-bottom: 2em;
    margin-right: 2em;
    margin-left: 2em;
    border-radius: 15px;
  }

  .modal-textarea p {
    font-weight: bold;
  }

  .modal-textarea textarea {
    color: #000;
    width: 80%;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 5px;
  }

  h1 {
    color: rgba(254, 128, 127);
  }

  p {
    padding-top: 1em;
    font-weight: bold;
  }

  #imagen {
    width: 20%;
    height: 20%;
    color: rgba(254, 128, 127);
    justify-content: center;
    padding-bottom: 1em;
  }

  #cerrar {
    color: rgba(254, 128, 127);
    width: 30px;
    height: 30px;
  }

  #basicButton {
    color: #fff !important;
    background: rgba(254, 128, 127) !important;
    border-color: rgba(254, 128, 127) !important;
  }

  #basicButton:hover {
    color: red !important;
    background: rgb(254, 241, 0) !important;
    border-color: red !important;
  }

  #cancelButton {
    color: rgba(254, 128, 127) !important;
    background: #fff !important;
  }

  #cancelButton:hover {
    background: rgba(248, 248, 248) !important;
    color: red !important;
    border-color: red !important;
  }
`;
