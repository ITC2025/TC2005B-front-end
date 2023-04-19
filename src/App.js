import './App.css';
import NavbarSC from './components/navbar/index.jsx';
import Test from './components/TestModal.jsx';

function App() {
  return (
    <div className="App">
      <NavbarSC client={true} />
      <Test />
    </div>
  );
}

export default App;
