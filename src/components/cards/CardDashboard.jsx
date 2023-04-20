import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/CardDashboard.css";

/** 
 * This componente is used to create a card with an image and a link.
 * The image is passed as a prop and the link is passed as a prop.
*/

function CardDashboard({ image, link }) {
  return (
    <Card>
      <a href={link}>
        <Card.Img src={image} />
      </a>
    </Card>
  );
}

export default CardDashboard;
