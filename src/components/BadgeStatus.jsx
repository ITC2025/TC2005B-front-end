import React from "react";
import { Badge } from "react-bootstrap";
import "../styles/TableBadges.css";

export const BadgeStatus = (props) => {
  if (props.status === "Borrador") {
    return (
      <div className="container">
        <h6>
          <Badge className='borrador'>{props.status}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === "En revisión") {
    return (

      <div className="container">
        <h6>
          <Badge className='enrevision'>{props.status}</Badge>
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
  } else if (props.status === "Pagado") {
    return (
          
      <div className="container">
        <h6>
          <Badge className='pagado'>{props.status}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === "Cerrado") {
    return (
          
      <div className="container">
        <h6>
          <Badge className='cerrado'>{props.status}</Badge>
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
  }else {
    return (
      <div className="container">
        <h6>
          <Badge className='no-status'>{props.status}</Badge>
        </h6>
      </div>
    );
  }
};
