import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";
import Modalbebida from "./components/Modalbebida";
function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className=" mt-5">
          <Formulario />
          <ListadoBebidas />
          <Modalbebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
