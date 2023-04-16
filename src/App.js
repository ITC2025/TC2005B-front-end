import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import pmDashboard from "./pages/Dashboard/pmDashboard.js";
import CardDashboard from "./components/cards/CardDashboard";
import CardGrid from "./components/cards/CardGrid";
import { TableTravelAllowance } from "./components/table/TableTravelAllowance";

function App() {
  return (
    <TableTravelAllowance/>
  );
}

export default App;
