import React from "react";
import CardDashboard from "../../components/cards/CardDashboard";
import CardRequest from "../../images/CardRequest.png";
import CardTravelAll from "../../images/CardTravelAll.png";
import { useNavigate } from 'react-router-dom';

export const UserDashboard = () => {
  const navigate = useNavigate();

   const navigateViaticos = () => {
       navigate('/user/viaticos');
   } 

  return (
    <div className="container p-5">
     <div className="container text-center">
        <div className="my-3"></div>
        <div className="row justify-content-center">
        <div className="col-md-6">
          <a onClick={navigateViaticos}>
            <CardDashboard
              image={CardTravelAll}
            ></CardDashboard>
          </a>
            
          </div>
          <div className="col-md-6">
            <CardDashboard
              image={CardRequest}
            ></CardDashboard>
          </div>
        </div>
      </div>
    </div>
  );
};
