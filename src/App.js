import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Error404 from "./paginas/404";
import Menu from "./componentes/menu";

function App() { 
  return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mim" element={<SobreMim />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  );
}
 
export default App;
