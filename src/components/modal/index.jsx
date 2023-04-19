import { Container, Button } from 'react-bootstrap';

// Styled Components
import styled from 'styled-components'

const Modal = ({ estado, cambiarEstado, msg = 'Alerta', succesIcon, excalmartionIcon, twoButtons, oneButton, saldoPositivo, saldoNegativo, cajaButtons }) => {
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

                            {saldoPositivo &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                                </svg>
                            }

                            {saldoNegativo &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                                </svg>
                            }
                            <h1> {msg} </h1>

                        </Container>
                        {oneButton &&
                            <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button>
                        }

                        {twoButtons &&
                            <>
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} id='cancelButton' className='mt-3' size="lg" variant="danger"> CANCELAR </Button>
                            </>
                        }

                        {cajaButtons &&
                            <>
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> ACEPTAR </Button> {' '}
                                <Button onClick={() => cambiarEstado(false)} className='mt-3' size="lg" variant="ligth"> CANCELAR </Button>
                            </>
                        }
                    </ContModal>
                </Overlay >
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