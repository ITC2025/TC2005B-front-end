import React from "react";
import { Badge } from "react-bootstrap";
import "../styles/TableBadges.css";

export const BadgeStatus = (props) => {
  if (props.status === 2) {
    return (
      <div className="container">
        <h6>
          <Badge className='enviado'>Enviado</Badge>
        </h6>
      </div>
    );
  } else if (props.status === 3) {
    return (

      <div className="container">
        <h6>
          <Badge className='aprobado'>Aprobado</Badge>
        </h6>
      </div>
    );
  } else if (props.status === 1) {
    return (

      <div className="container">
        <h6>
          <Badge className='borrador'>Borrador</Badge>
        </h6>
      </div>
    );
  } else if (props.status === 4) {
    return (
          
      <div className="container">
        <h6>
          <Badge className='rechazado'>Rechazado</Badge>
        </h6>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h6>
          <Badge className='pendiente'>{props.status}</Badge>
        </h6>
      </div>
    );
  }
};
