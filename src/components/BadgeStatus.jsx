import React from "react";
import { Badge } from "react-bootstrap";
import "../styles/TableBadges.css";
import { Container } from "react-bootstrap";

export const BadgeStatus = (props) => {
  return (
    <div className="container">
      <h5>
        <Badge variant="warning">{props.status}</Badge>
      </h5>
    </div>
  );
};
