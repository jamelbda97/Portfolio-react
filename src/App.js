import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './i18n';

import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
    return (
        <main className="text-gray-600 bg-gray-100 body-font">
            <Navbar/>
            <About/>
            <Projects/>
            <Skills/>
            <Education/>
            <Contact/>
        </main>
    );
}
