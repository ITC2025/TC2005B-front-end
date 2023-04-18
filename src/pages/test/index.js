import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import getApiData from "../../utils/getApiData.js"

export default function Test({name}){
    useEffect(() => {
        getApiData();
    });
    return(
    <>
    <h1>{name}</h1>
    <Outlet/>
    </>);
}