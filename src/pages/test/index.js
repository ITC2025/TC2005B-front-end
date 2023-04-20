import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Test({name}){
    return(
    <>
    <h1>{name}</h1>
    <Outlet/>
    </>);
}