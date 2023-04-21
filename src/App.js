import { useParams } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import NavbarSC from './components/navbar/index.jsx';
import Login from './pages/Login/login'
import Test from './pages/test/index.js';
import Facturas from './pages/Gastos/gastos';
import PrivateRoutes from "./utils/PrivateRoutes";
import Test from './pages/test/index.js';
import PmDashboard from './pages/Dashboard/pmDashboard';
import {UserDashboard} from './pages/Dashboard/userDashboard';
import AdminDashboard from './pages/Dashboard/adminDashboard';

function Expedientes() {
  //Agarra el id del expediente del ult
  const routeParams = useParams()
  return (<Test name={routeParams.id} />)
}

function App() {
  return (
    <div className="App">
      <NavbarSC admin={true} />

      <Router>
        <Routes>
          <Route element={<Login name="Login" />} path="/" />

          {/*Rutas de usuario*/}
          <Route element={<PrivateRoutes rol={1}/>}>
            <Route element={<Test name="User" />} path="user">
              <Route element={<Facturas name="facturas" />} path="facturas" />
              <Route element={<Test name="solicitar" />} path="solicitar" />
              <Route element={<Test name="viaticos" />} path="viaticos" />
              <Route element={<Expedientes />} path="expediente/:id" />
              <Route element={<UserDashboard />} path="dashboard" />
            </Route>
          </Route>

          {/*Rutas de admin*/}
          <Route element={<PrivateRoutes rol={3}/>}>
            <Route element={<Test name="Admin" />} path="admin">
              <Route element={<Test name="viaticos" />} path="viaticos" />
              <Route element={<Expedientes />} path="expediente/:id" />
              <Route element={<Test name="tablero" />} path="tablero" />
              <Route element={<AdminDashboard />} path="dashboard" />
            </Route>
          </Route>

          {/*Rutas de Project Manager*/}
          <Route element={<PrivateRoutes rol={2}/>}>
            <Route element={<Test name="Project Manager" />} path="pm">
              <Route element={<Test name="viaticos" />} path="viaticos" />
              <Route element={<Expedientes />} path="expediente/:id" />
              <Route element={<Test name="tablero" />} path="tablero" />
              <Route element={<PmDashboard/>} path="dashboard" />
            </Route>
          </Route>

          {/*Rutas del SysAdmin*/}
          <Route element={<PrivateRoutes rol={4}/>}>
            <Route element={<Test name="SysAdmin" />} path="sysadmin">
              <Route element={<Test name="viaticos" />} path="viaticos" />
              <Route element={<Expedientes />} path="expediente/:id" />
              <Route element={<Test name="tablero" />} path="tablero" />
              <Route element={<Test name="dashboard" />} path="dashboard" />
            </Route>
          </Route>

          <Route element={<h>404 esta pagina no existe</h>} path="*" />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
