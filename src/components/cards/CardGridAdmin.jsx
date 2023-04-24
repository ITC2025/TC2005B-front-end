import CardDashboard from "./CardDashboard";
import CardRequest from "./../../images/CardRequest.png";
import CardProject from "./../../images/CardProject.png";

/**
 * This component is used to create a grid of cards with an image and a link.
 * The image and link is passed as a prop.
 */

function CardGridPM({ linkProject, linkRequest }) {
  return (
    <>
      <div className="container text-center">
        <div className="my-3"></div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <CardDashboard
              image={CardProject}
              link={linkProject}
            ></CardDashboard>
          </div>
          <div className="col-md-6">
            <CardDashboard
              image={CardRequest}
              link={linkRequest}
            ></CardDashboard>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardGridPM;
