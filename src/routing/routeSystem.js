import { useParams } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import NavbarSC from "../components/navbar/index.jsx";
import Login from "../pages/Login/login.js";
import Test from "../pages/test/index.js";
import Facturas from "../pages/Gastos/Gastos.js";
import PrivateRoutes from "./PrivateRoutes.js";
import PmDashboard from "../pages/Dashboard/pmDashboard.js";
import { UserDashboard } from "../pages/Dashboard/userDashboard.js";
import AdminDashboard from "../pages/Dashboard/adminDashboard.js";
import { UserTable } from "../pages/HistorialViaticos/UserTable.js";
import { PmTable } from "../pages/HistorialViaticos/PmTable.js";
import { AdminTable } from "../pages/HistorialViaticos/adminTable.js";
import SolicitarViaticos from "../pages/SolicitarViaticos/SolicitarViaticos.js";
import CrearProyecto from "../pages/CrearProyecto/index.js";
import Proyectos from "../pages/Proyectos/index.js";
import SeeProjectTable from "../pages/VerProyectosTabla/verproyectosTabla.js";
import Expediente from "../pages/Expediente/expediente.js";
import Proyecto from "../pages/Proyecto/proyectoAdmin.js";
import SolicitudesAprobadas from "../pages/SolicitudesAprobadas/index.js";
import { NotFound } from "../pages/NotFound/NotFound.js";
import EditarGastp from '../pages/Gastos/EditarGasto.js';
import SolicitarViaticosEditar from '../pages/SolicitarViaticos/SolicitarViaticosEditar.js';

function ExpedientesID() {
  //Agarra el id del expediente del ult
  const routeParams = useParams();
  return <Expediente id={routeParams.id} />;
}

function FacturasID() {
  const routeParams = useParams();
  return <Facturas id={routeParams.id} />;
}

function EditGastoID() {
  const routeParams = useParams();
  return <EditarGastp id={routeParams.id} />;
}

function RouteSystem() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Login name="Login" />} path="/" />
          {/*Rutas de usuario*/}
          <Route element={<PrivateRoutes rol={1} />}>
            <Route element={<NavbarSC client={true} />} path="user">
              <Route index element={<UserDashboard />} />
              <Route
                element={<FacturasID name="user facturas" />}
                path="facturas/:id"
              />
              {/* <Route
                element={<TablaGastos name="user tabla gastos" />}
                path="tablaGastos"
              /> */}
              <Route
                element={<EditGastoID name="user EditGasto" />}
                path="EG/:id"
              />
              <Route element={<SolicitarViaticos />} path="solicitar" />
              <Route element={<SolicitarViaticosEditar />} path="solicitudEditar/:id" />
              <Route element={<UserTable />} path="viaticos" />
              <Route element={<ExpedientesID />} path="expediente/:id" />
            </Route>
          </Route>

          {/*Rutas de Project Manager*/}
          <Route element={<PrivateRoutes rol={2} />}>
            <Route element={<NavbarSC projectManager={true} />} path="pm">
              <Route index element={<PmDashboard />} />
              {/* <Route element={<Expedientes />} path="expediente/:id" /> */}
              <Route element={<Proyecto />} path="proyecto" />
              <Route element={<Test name="pm tablero" />} path="tablero" />
              <Route element={<CrearProyecto />} path="crearproyecto" />
              <Route element={<Proyectos />} path="proyectos" />
              <Route element={<ExpedientesID />} path="expediente/:id" />
              <Route element={<SeeProjectTable />} path="vertablaproyectos" />
              <Route element={<PmTable />} path={"solicitudes/:project_code"} />
              <Route element={<PmTable />} path={"solicitudes"} />
              <Route element={<PmTable />} path={"historico"} />
              <Route element={<ExpedientesID />} path="hexpediente/:id" />
            </Route>
          </Route>
          {/* comentario */}

          {/*Rutas de admin*/}
          <Route element={<PrivateRoutes rol={3} />}>
            <Route element={<NavbarSC admin={true} />} path="admin">
              <Route index element={<AdminDashboard />} />
              <Route element={<AdminTable />} path="historial" />
              <Route element={<ExpedientesID />} path="hexpediente/:id" />
              <Route element={<Proyectos />} path="proyectos" />
              <Route element={<ExpedientesID />} path="expediente/:id" />
              <Route element={<SolicitudesAprobadas />} path="solicitudes" />
            </Route>
          </Route>

          {/*Rutas del SysAdmin*/}
          <Route element={<PrivateRoutes rol={4} />}>
            <Route element={<NavbarSC admin={true} />} path="sysadmin">
              <Route index element={<AdminDashboard />} />
              <Route
                element={<Test name="sysadmin viaticos" />}
                path="viaticos"
              />
              <Route element={<ExpedientesID />} path="expediente/:id" />
              <Route
                element={<Test name="sysadmin tablero" />}
                path="tablero"
              />
            </Route>
          </Route>

          <Route element={<NotFound />} path="*" />
        </Routes>
      </Router>
    </>
  );
}

export default RouteSystem;
