import { useState } from "react";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div
                className={`min-h-screen transition-opacity duration-700 
                   opacity-100 cbg-black text-gray-100`}
            >
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default App;
