import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';

import './App.css';
import NavbarSC from './components/navbar/index.js';
import Modal from './components/modal';

function App() {
  const [modalEstado1, modalCambiarEstado1] = useState(false);
  const [modalEstado2, modalCambiarEstado2] = useState(false);
  const [modalEstado3, modalCambiarEstado3] = useState(false);
  const [modalEstado4, modalCambiarEstado4] = useState(false);
  const [modalEstado5, modalCambiarEstado5] = useState(false);

  return (
   <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <NavbarSC />

      <Container className='mt-5'>
        <Button onClick={() => modalCambiarEstado1(!modalEstado1)} variant="primary">Modal 1</Button> {' '}
        <Button onClick={() => modalCambiarEstado2(!modalEstado2)} variant="primary">Modal 2</Button> {' '}
        <Button onClick={() => modalCambiarEstado3(!modalEstado3)} variant="primary">Modal 3</Button> {' '}
        <Button onClick={() => modalCambiarEstado4(!modalEstado4)} variant="primary">Modal 4</Button> {' '}
        <Button onClick={() => modalCambiarEstado5(!modalEstado5)} variant="primary">Modal 5</Button> 
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
        msg={'APROVACIÓN DE SOLICUTUD'}
        twoButtons={true}>
      </Modal>

    </div>
  );
}

export default App;
