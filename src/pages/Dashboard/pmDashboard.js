import React from "react";
import { useNavigate } from "react-router-dom";
import CardRequest from "../../images/CardRequest.png";
import CardProject from "../../images/CardProject.png";
import CardDashboard from "../../components/cards/CardDashboard";

export default function PmDashboard() {
  const navigate = useNavigate();

  const navigateViaticos = () => {
    navigate('/pm/viaticos');
  }
  const navigateProyectos = () => {
    navigate('/pm/proyectos');
  }
  return (
    <div className="container p-5">
      <div className="container text-center">
        <div className="my-3"></div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <a onClick={navigateProyectos}>
              <CardDashboard
                image={CardProject}
              ></CardDashboard>
            </a>
          </div>
          <div className="col-md-6">
            <a onClick={navigateViaticos}>
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
