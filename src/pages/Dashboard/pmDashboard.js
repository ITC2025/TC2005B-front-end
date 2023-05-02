import React from "react";
import CardRequest from "../../images/CardRequest.png";
import CardTravelAll from "../../images/CardTravelAll.png";
import CardProject from "../../images/CardProject.png";
import { useNavigate } from "react-router-dom";
import CardDashboard from "../../components/cards/CardDashboard";

export default function PmDashboard() {
  const navigate = useNavigate();

  const navigateSolicitudes = () => {
    navigate("/pm/solicitudes");
  };

  return (
    <div className="container p-5">
      <div className="container text-center">
        <div className="my-3"></div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <CardDashboard
              image={CardProject}
              link={
                "https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg"
              }
            ></CardDashboard>
          </div>
          <div className="col-md-6">
            <a onClick={navigateSolicitudes}>
              <CardDashboard
                image={CardRequest}
                
              ></CardDashboard>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
