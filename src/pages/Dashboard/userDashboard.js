import React from "react";
import CardDashboard from "../../components/cards/CardDashboard";
import CardRequest from "../../images/CardRequest.png";
import CardTravelAll from "../../images/CardTravelAll.png";
import { useNavigate } from "react-router-dom";

export const UserDashboard = () => {
  const navigate = useNavigate();

  const navigateViaticos = () => {
    navigate("/user/viaticos");
  };

  return (
    <div className="container p-5">
      <div className="container text-center">
        <div className="my-3"></div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <button
              onClick={navigateViaticos}
              style={{
                border: "none",
                backgroundColor: "none",
                background: "none",
              }}
            >
              <CardDashboard image={CardTravelAll} lab="Mis viáticos"></CardDashboard>
            </button>
          </div>
          <div className="col-md-6">
            <button style={{
                border: "none",
                backgroundColor: "none",
                background: "none",
              }}>
              <CardDashboard image={CardRequest} lab="Solicitudes"></CardDashboard>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
