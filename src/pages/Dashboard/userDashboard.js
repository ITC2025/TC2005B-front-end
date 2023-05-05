import React from "react";
import CardDashboard from "../../components/cards/CardDashboard";
import CardCreateRequest from "../../images/CardCreateRequest.png";
import CardTravelAll from "../../images/CardTravelAll.png";
import { useNavigate } from "react-router-dom";

export const UserDashboard = () => {
  const navigate = useNavigate();

  const navigateCreateViaticos = () => {
    navigate("/user/solicitar");
  };

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
            <button
              onClick={navigateCreateViaticos}
              style={{
                border: "none",
                backgroundColor: "none",
                background: "none",
              }}>
              <CardDashboard image={CardCreateRequest} lab="Crear Viaticos"></CardDashboard>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
