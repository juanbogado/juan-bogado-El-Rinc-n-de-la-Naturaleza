// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponents from './components/NavBarComponents/NavBarComponents';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  
  return <div>
    <NavBarComponents/>
    <ItemListContainer greeting="Bienvenidos al Rincón de la Naturaleza"/>
  </div>;
}

export default App
