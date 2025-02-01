import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { GitProvider } from "./hooks/GitContext";
import Meta from "./global/Meta";
import GlobalStyle from "./global/GlobalStyle";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <GitProvider>
            <Meta />
            <GlobalStyle />
            <App />
        </GitProvider>
    </BrowserRouter>
);
