import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterMain from "./RouterMain.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RouterMain />
  </BrowserRouter>
);