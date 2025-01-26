import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/Header/Header";
import Error404 from "./components/error/error404/Error404";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import History from "./components/pages/history/History";

const paths = ["/", "/about", "/history", "/details/:id"];
function App() {
    const location = useLocation();
    const is404 = !paths.some((path) =>
        new RegExp(`^${path.replace(/:\w+/g, "\\w+")}$`).test(location.pathname)
    );

    useEffect(() => {
        if(is404) return

        const updateMainHeight = () => {
            const headerH = document.querySelector("header").scrollHeight;
            const main = document.querySelector("main");
            const footerH = document.querySelector("footer").scrollHeight;
    
            main.style.height = `${window.innerHeight - headerH - footerH}px`;
        };
    
        updateMainHeight();
    
        window.addEventListener("resize", updateMainHeight);
    
        return () => {
            window.removeEventListener("resize", updateMainHeight);
        };
    }, [is404]);

    return (
        <div id="body-wrap">
            {!is404 && <Header />}
            <main style={{ minHeight: "600px", overflow: 'hidden' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/details/:id" element={<Home />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </main>
            {!is404 && <Footer />}
        </div>
    );
}

export default App;
