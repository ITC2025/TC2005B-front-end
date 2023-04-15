import CardDashboard from "./CardDashboard";
import CardRequest from "./../../images/CardRequest.png";
import CardProject from "./../../images/CardProject.png";
import CardTravelAll from './../../images/CardTravelAll.png'

function CardGrid() {
  return (
    <>
      <CardDashboard image={CardProject}></CardDashboard>
      <CardDashboard image={CardRequest}></CardDashboard>
      <CardDashboard image={CardTravelAll}></CardDashboard>
    </>
  );
}

export default CardGrid;
