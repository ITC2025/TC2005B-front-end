import React from "react";
import { Badge } from "react-bootstrap";
import "../styles/TableBadges.css";

export const BadgeStatus = (props) => {
  if (props.status === 1) {
    return (
      <div className="container">
        <h6>
          <Badge className='borrador'>{props.statusName}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === 2) {
    return (

      <div className="container">
        <h6>
          <Badge className='enrevision'>{props.statusName}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === 3) {
    return (

      <div className="container">
        <h6>
          <Badge className='aprobado'>{props.statusName}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === 4) {
    return (
          
      <div className="container">
        <h6>
          <Badge className='pagado'>{props.statusName}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === 5){
    return (
          
      <div className="container">
        <h6>
          <Badge className='cerrado'>{props.statusName}</Badge>
        </h6>
      </div>
    );
  } else if (props.status === 6) {
    return (
          
      <div className="container">
        <h6>
          <Badge className='rechazado'>{props.statusName}</Badge>
        </h6>
      </div>
    );
  }else {
    return (
      <div className="container">
        <h6>
          <Badge className='no-status'>{props.statusName}</Badge>
        </h6>
      </div>
    );
  }
};
