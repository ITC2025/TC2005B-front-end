import React from "react";
import { Badge } from "react-bootstrap";
// import "../styles/TableBadges.css";

export const BadgeStatus = (props) => {
  if (props.status === "active") {
    return (
      <div className="container">
        <h6>
          <Badge className="aceptado">{props.status}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === "inactive") {
    return (
      <div className="container">
        <h6>
          <Badge className="rechazado">{props.status}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === "borrador") {
    return (
      <div className="container">
        <h6>
          <Badge className="borrador">{props.status}</Badge>
        </h6>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h6>
          <Badge className="pendiente">{props.status}</Badge>
        </h6>
      </div>
    );
  }
};
