import { useParams } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import NavbarSC from './components/navbar/index.jsx';

// Import pages
import Test from './pages/test/index.js';
import Facturas from './pages/Gastos/userGastos';
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
          <Route element={<Test name="Login" />} path="/" />

          {/*Rutas de usuario*/}
          {/*<Route element={<PrivateRoutes rol='user'/>}>*/}
          <Route element={<Test name="User" />} path="user">
            <Route element={<Facturas name="facturas" />} path="facturas" />
            <Route element={<Test name="solicitar" />} path="solicitar" />
            <Route element={<Test name="viaticos" />} path="viaticos" />
            <Route element={<Expedientes />} path="expediente/:id" />
            <Route element={<UserDashboard />} path="dashboard" />
          </Route>
          {/*</Route>*/}

          {/*Rutas de admin*/}
          {/*<Route element={<PrivateRoutes rol='admin'/>}>*/}
          <Route element={<Test name="Admin" />} path="admin">
            <Route element={<Test name="viaticos" />} path="viaticos" />
            <Route element={<Expedientes />} path="expediente/:id" />
            <Route element={<Test name="tablero" />} path="tablero" />
            <Route element={<AdminDashboard />} path="dashboard" />
          </Route>
          {/*</Route>*/}

          {/*Rutas de Project Manager*/}
          {/*<Route element={<PrivateRoutes rol='pm'/>}>*/}
          <Route element={<Test name="Project Manager" />} path="pm">
            <Route element={<Test name="viaticos" />} path="viaticos" />
            <Route element={<Expedientes />} path="expediente/:id" />
            <Route element={<Test name="tablero" />} path="tablero" />
            <Route element={<PmDashboard/>} path="dashboard" />
          </Route>
          {/*</Route>*/}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
