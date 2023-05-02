import React from "react";
import { Badge } from "react-bootstrap";
import "../styles/TableBadges.css";

export const BadgeStatus = (props) => {
  if (props.status === "Enviado") {
    return (
      <div className="container">
        <h6>
          <Badge className='enviado'>{props.status}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === "Aprobado") {
    return (

      <div className="container">
        <h6>
          <Badge className='aprobado'>{props.status}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === "Borrador") {
    return (

      <div className="container">
        <h6>
          <Badge className='borrador'>{props.status}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === "Rechazado") {
    return (
          
      <div className="container">
        <h6>
          <Badge className='rechazado'>{props.status}</Badge>
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
