import "./App.css";
import Formulario from "./components/Principal";
import Infoprin from "./components/InfoPrin";
import Busqueda from "./components/Busqueda";
import "./Panel.css";

function App() {
  return (
    <>
      <div className="contenedor">
        <Formulario />
      </div>
      <div>
        <Infoprin />
      </div>
    </>
  );
}

export default App;
