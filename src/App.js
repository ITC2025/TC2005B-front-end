import { useParams } from 'react-router';
import './App.css';
import NavbarSC from './components/navbar/index.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Test from './pages/test/index'
//import PrivateRoutes from "./utils/PrivateRoutes";

function Expedientes(){
  //Agarra el id del expediente del ult
  const routeParams = useParams()
  return(<Test name={routeParams.id}/>)
}

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Test name="Login"/>} path="/"/>
          
          {/*Rutas de usuario*/}
          {/*<Route element={<PrivateRoutes rol='user'/>}>*/}
            <Route element={<Test name="User"/>} path="user">
              <Route element={<Test name="facturas"/>} path="facturas"/>
              <Route element={<Test name="solicitar"/>} path="solicitar"/>
              <Route element={<Test name="viaticos"/>} path="viaticos"/>
              <Route element={<Expedientes />} path="expediente/:id"/>
              <Route element={<Test name="tablero"/>} path="tablero"/>
            </Route>
          {/*</Route>*/}

          {/*Rutas de admin*/}
          {/*<Route element={<PrivateRoutes rol='admin'/>}>*/}
            <Route element={<Test name="Admin"/>} path="admin">
              <Route element={<Test name="viaticos"/>} path="viaticos"/>
              <Route element={<Expedientes />} path="expediente/:id"/>
              <Route element={<Test name="tablero"/>} path="tablero"/>
              <Route element={<Test name="dashboard"/>} path="dashboard"/>
            </Route>
          {/*</Route>*/}

          {/*Rutas de Project Manager*/}
          {/*<Route element={<PrivateRoutes rol='pm'/>}>*/}
            <Route element={<Test name="Project Manager"/>} path="pm">
              <Route element={<Test name="viaticos"/>} path="viaticos"/>
              <Route element={<Expedientes />} path="expediente/:id"/>
              <Route element={<Test name="tablero"/>} path="tablero"/>
              <Route element={<Test name="dashboard"/>} path="dashboard"/>
            </Route>
          {/*</Route>*/}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
