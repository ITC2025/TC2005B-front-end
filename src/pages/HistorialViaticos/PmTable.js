import "../../styles/PmTable.css";
import { useParams } from "react-router";
import { useLocation } from "react-router";

import { PmTableTravelAll } from "../../components/table/PmTableTravelAll";

export const PmTable = () => {
  const { codigoproyecto } = useParams();
  const location = useLocation();

  return (
    <div className="p-5">
      <PmTableTravelAll key={location.pathname} codigoproyecto={codigoproyecto} />
    </div>
  );
};
