// import logo from './logo.svg';\
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login'
import Test from './pages/test/index'
import PrivateRoutes from "./routers/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Login/>} path="/"/>
          
          {/*Rutas de usuario*/}
          <Route element={<PrivateRoutes rol='user'/>}>
            <Route element={<Test name="User"/>} path="user">
              <Route element={<Test name="viaticos"/>} path="viaticos"/>
            </Route>
          </Route>

          {/*Rutas de admin*/}
          <Route element={<PrivateRoutes rol='admin'/>}>
            <Route element={<Test name="Admin"/>} path="admin">
              <Route element={<Test name="viaticos"/>} path="viaticos"/>
            </Route>
          </Route>

          {/*Rutas de Project Manager*/}
          <Route element={<PrivateRoutes rol='pm'/>}>
            <Route element={<Test name="Project Manager"/>} path="pm">
              <Route element={<Test name="viaticos"/>} path="viaticos"/>
            </Route>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
