import React, { useState, useEffect } from "react";
import "../../styles/PmTable.css";
import { useParams } from "react-router";

import { PmTableTravelAll } from "../../components/table/PmTableTravelAll";
import { PmTableTravelAllActive } from "../../components/table/PmTableTravelAllActive";

export const PmTable = ({all}) => {
  if (all){
  return (
    <div className="p-5">
      <PmTableTravelAll codigoproyecto={codigoproyecto}/>
    </div>
  );
  } else {
    return (
      <div className="p-5">
        <PmTableTravelAllActive/>
      </div>
    );
  }
};
