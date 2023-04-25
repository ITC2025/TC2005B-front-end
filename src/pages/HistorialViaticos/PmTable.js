import React, { useState, useEffect } from "react";
import "../../styles/PmTable.css";

import { PmTableTravelAll } from "../../components/table/PmTableTravelAll";

export const PmTable = () => {
  
  return (
    <div className="p-5">
      <PmTableTravelAll />
    </div>
  );
};
