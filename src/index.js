import ReactDOM from "react-dom/client";
import GlobalStyle from "./style/GlobalStyle";
import App from "./App";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <GlobalStyle />
    <App />
  </CookiesProvider>
);
