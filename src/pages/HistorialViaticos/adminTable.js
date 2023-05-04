import "../../styles/PmTable.css";
import { useParams } from "react-router";
import { useLocation } from "react-router";

import { AdminTableTravelAll } from "../../components/table/AdminTableTravelAll";

export const AdminTable = () => {
  const { project_code } = useParams();
  const location = useLocation();
  const closed_requests_only = location.pathname.includes("historico");

  return (
    <div className="p-5">
      <AdminTableTravelAll closed_requests_only={closed_requests_only} key={location.pathname} project_code={project_code} />
    </div>
  );
};
