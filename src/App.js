import { useParams } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import components
import NavbarSC from "./components/navbar/index.jsx";
import Login from "./pages/Login/login";
import Test from "./pages/test/index.js";
import Facturas from "./pages/Gastos/gastos";
import PrivateRoutes from "./apis/PrivateRoutes";
import PmDashboard from "./pages/Dashboard/pmDashboard";
import { UserDashboard } from "./pages/Dashboard/userDashboard";
import AdminDashboard from "./pages/Dashboard/adminDashboard";
import TablaGastos from "./pages/TablaGastos/tablaGastos";
import { UserTable } from "./pages/HistorialViaticos/UserTable";
import { PmTable } from "./pages/HistorialViaticos/PmTable";
import SolicitarViaticos from "./pages/SolicitarViaticos/SolicitarViaticos";
import { NotFound } from "./pages/NotFound/NotFound";

function Expedientes() {
  //Agarra el id del expediente del ult
  const routeParams = useParams();
  return <Test name={routeParams.id} />;
}

function App() {

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Login name="Login" />} path="/" />

          {/*Rutas de usuario*/}
          <Route element={<PrivateRoutes rol={1} />}>
            <Route element={<NavbarSC client={true} />} path="user">
              <Route index element={<UserDashboard />} />
              <Route
                element={<Facturas name="user facturas" />}
                path="facturas"
              />
              <Route
                element={<TablaGastos name="user tabla gastos" />}
                path="tablaGastos"
              />
              <Route
                element={<SolicitarViaticos />}
                path="solicitar"
              />
              <Route element={<UserTable />} path="viaticos" />
              <Route element={<Expedientes />} path="expediente/:id" />
            </Route>
          </Route>

          {/*Rutas de Project Manager*/}
          <Route element={<PrivateRoutes rol={2} />}>
            <Route element={<NavbarSC productManager={true} />} path="pm">
              <Route index element={<PmDashboard />} />
              <Route element={<Expedientes />} path="expediente/:id" />
              <Route element={<Test name="pm tablero" />} path="tablero" />
              <Route element={<PmTable/> } path={"solicitudes"} />
            </Route>
          </Route>
          
          {/*Rutas de admin*/}
          <Route element={<PrivateRoutes rol={3} />}>
            <Route element={<NavbarSC admin={true} />} path="admin">
              <Route index element={<AdminDashboard />} />
              <Route element={<Test name="admin viaticos" />} path="viaticos" />
              <Route element={<Expedientes />} path="expediente/:id" />
              <Route element={<Test name="admin tablero" />} path="tablero" />
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
              <Route element={<Expedientes />} path="expediente/:id" />
              <Route
                element={<Test name="sysadmin tablero" />}
                path="tablero"
              />
            </Route>
          </Route>

          <Route element={<NotFound/>} path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;