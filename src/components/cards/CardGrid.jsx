import CardDashboard from "./CardDashboard";
import CardRequest from "./../../images/CardRequest.png";
import CardProject from "./../../images/CardProject.png";
import CardTravelAll from './../../images/CardTravelAll.png'


function CardGrid() {
  return (
    <>

      <div className="container text-center">
        <div className = "my-5"></div>
        <div className="row justify-content-center">
          <div className="col-6">
            <CardDashboard image={CardProject}></CardDashboard>
          </div>
          <div className="col-6">
            <CardDashboard image={CardRequest}></CardDashboard>
          </div>

        </div>

        <div className="row justify-content-center">
          <div className="col-6">
          <CardDashboard image={CardTravelAll}></CardDashboard>
          </div>
        </div>
      </div>
      </>
      );
}

      export default CardGrid;
