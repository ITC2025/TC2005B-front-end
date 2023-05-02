import React, { useState, useEffect } from "react";
import "../../styles/PmTable.css";

import { PmTableTravelAll } from "../../components/table/PmTableTravelAll";
import { PmTableTravelAllActive } from "../../components/table/PmTableTravelAllActive";

export const PmTable = ({all}) => {
  if (all){
  return (
    <div className="p-5">
      <PmTableTravelAll/>
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
