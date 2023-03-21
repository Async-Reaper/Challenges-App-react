import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { setupStore } from "./app/providers/store-providers/config";
import { StoreProvider } from "./app/providers/store-providers/ui";
import "./index.css";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
