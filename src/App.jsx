import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Works from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { useState, useEffect } from "react";

export default function App() {
    const [windowWidth, setWindowWidth] = useState(null);
    const [windowHeight, setWindowHeight] = useState(null);

    useEffect(() => {
        function update() {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        }
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <>
            <Header windowWidth={windowWidth} />
            <Hero windowWidth={windowWidth} windowHeight={windowHeight} />
            <Skills />
            <Works />
            <Contact />
        </>
    );
}
