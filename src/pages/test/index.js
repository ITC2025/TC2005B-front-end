import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getAuthenticationData } from "../../utils/getApiData.js"

export default function Test({name}){
    useEffect(() => {
        getAuthenticationData('Jose','Jose1234').then((resp) => console.log(sessionStorage.getItem("data")))
    });
    return(
    <>
    <h1>{name}</h1>
    <Outlet/>
    </>);
}