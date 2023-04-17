

import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components'

const Modal = ({ estado, cambiarEstado, msg = 'alerta', succesIcon, excalmartionIcon, twoButtons, oneButton }) => {
    return (
        <>
            {estado &&
                <Overlay>
                    <ContModal>
                        <Container>
                            {succesIcon &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            }

                            {excalmartionIcon &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                            }
                            <h1> {msg} </h1>

                        </Container>

                        {oneButton &&
                            <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button>
                        }

                        {twoButtons &&
                            <div>
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </div>
                        }
                    </ContModal>
                </Overlay>
            }
        </>
    );
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