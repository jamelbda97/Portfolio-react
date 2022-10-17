import React from "react";

import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import './App.css';

export default function App() {
    return (
        <main className="text-gray-600 bg-gray-100 body-font">
            <Navbar/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </main>
    );
}
