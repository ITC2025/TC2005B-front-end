import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/NotFound.css";
import { Button } from "react-bootstrap";
export const NotFound = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
      navigate("/");
    };
  return (
    <>
      <p class="zoom-area">
        <b>Uppsss..</b> Parece que la página a la que quieres acceder no existe.{" "}
      </p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <Button
          onClick={navigateHome}
          id="return-btn"
        >
          Visitar página principal
        </Button>
      </div>
    </>
  );
};
