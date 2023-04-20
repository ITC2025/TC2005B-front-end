import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getLoginToken } from "../../utils/getApiData.js"

export default function Test({name}){
    useEffect(() => {
        getLoginToken('Jose','Jose1234').then((resp) => console.log(resp))
    });
    return(
    <>
    <h1>{name}</h1>
    <Outlet/>
    </>);
}