import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route} from "react-router";
import App from "./App";
import Componente from "./DetallePelicula";
createRoot(document.getElementById("root")).render(
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<App />} />
<Route path="/InfoGraciasPorFumar" element={<Componente />} />
 </Routes>
 </BrowserRouter>
)