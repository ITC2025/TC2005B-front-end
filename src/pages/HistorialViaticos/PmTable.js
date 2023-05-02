import React, { useState, useEffect } from "react";
import "../../styles/PmTable.css";
import { useParams } from "react-router";

import { PmTableTravelAll } from "../../components/table/PmTableTravelAll";

export const PmTable = () => {
  const { codigoproyecto } = useParams();
  return (
    <div className="p-5">
      <PmTableTravelAll codigoproyecto={codigoproyecto} />
    </div>
  );
};
