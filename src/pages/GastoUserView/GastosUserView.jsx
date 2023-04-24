import { Container, Row} from "react-bootstrap";
import React from 'react';
import Innovation from '../../components/GastosUserView/innovation';
import ProyectoInfo from '../../components/GastosUserView/proyectoInfo';
import Tabla from '../../components/GastosUserView/tabla';
import datos from '../../components/GastosUserView/datos.json'
import {gastosApi} from '../../utils/gastosApidata'

const GastosUserView = () => {
  const datoss = gastosApi();
  console.log(datoss);
  return (
    <Container>
    <Innovation ></Innovation>
    <ProyectoInfo></ProyectoInfo>
    <Tabla datos={datos}></Tabla>

    </ Container>    
  )
}

export default GastosUserView;