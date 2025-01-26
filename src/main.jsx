import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { GitProvider } from "./hooks/GitContext.jsx";
import Meta from "./global/Meta.jsx";
import GlobalStyle from "./global/GlobalStyle.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <GitProvider>
            <Meta />
            <GlobalStyle />
            <App />
        </GitProvider>
    </BrowserRouter>
);
