import React, { useState, useEffect } from "react";
import "../../styles/PmTable.css";

import { PmTableTravelAll } from "../../components/table/PmTableTravelAll";

export const PmTable = ({all}) => {
  
  return (
    <div className="p-5">
      <PmTableTravelAll showAll={all}/>
    </div>
  );
};
