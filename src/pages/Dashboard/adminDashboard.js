import React from "react";
import CardDashboard from "../../components/cards/CardDashboard";
import CardRequest from "../../images/CardRequest.png";
import CardProject from "../../images/CardProject.png";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const navigateSolicitudes = () => {
    navigate("/admin/solicitudes");
  };

  return (
    <div className="container p-5">
      <div className="container text-center">
        <div className="my-3"></div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <a onClick={navigateSolicitudes}>
              <CardDashboard
                image={CardRequest}
                link={
                  "https://t4.ftcdn.net/jpg/02/36/57/91/360_F_236579161_BwYfCPuAytiZRCImG6yIe5RDBUlYpLCq.jpg"
                }
              ></CardDashboard>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
