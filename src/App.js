import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/js/dist/collapse";
import NavBar from "./components/NavBar/navbar.jsx";
import ItemListContainer from "./containers/ItemListContainer/itemlistcontainer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a MAD Car Detailing"}/>
    </div>
  );
}

export default App;
