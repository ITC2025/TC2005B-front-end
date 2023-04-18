import React, { useState } from 'react'
import SolicitarModal from '../components/RequestModal'
import Button from 'react-bootstrap/Button';
import '../syles/Footer.css'

function Footer() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" className="boton1" onClick={() => setModalShow(true)}>
        GUARDAR CAMBIOS
      </Button>

      <SolicitarModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Footer;