import React, { useState } from 'react'
import SolicitarModal from './RequestModal'
import Button from 'react-bootstrap/Button';
import '../syles/SendSaveCost.css'

function Footer() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <p>
        TOTAL DE LOS GASTOS (MXN): $0.00
      </p>
      <Button variant="primary" className="boton1" onClick={() => setModalShow(true)}>
        GUARDAR CAMBIOS
      </Button>
      <Button>
        GUARDAR Y ENVIAR
      </Button>
      <SolicitarModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Footer;