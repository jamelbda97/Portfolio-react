import {ArrowRightIcon, MenuIcon} from "@heroicons/react/solid";
import React, {useState} from "react";

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <header className="bg-gray-800 md:sticky top-0 z-50">
            <div className="container flex flex-wrap py-3 md:flex-row align-items-md-center">
                <a href="#about" className="nav-link mx-md-2 text-xl text-white left-0 mr-auto">
                    Med. Jameleddine Bouassida
                </a>
                <a onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }} className="nav-link text-white align-self-end col-1 d-block d-md-none">
                    <div className="inline-flex items-center">
                        <MenuIcon className="w-8 h-8 ml-1"/>
                    </div>
                </a>
                <nav
                    className={
                        isNavExpanded ?
                            "text-gray-400 mt-4" :
                            "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-500 justify-center text-gray-400 d-md-flex d-none"
                    }>
                    <a href="#projects" className="nav-link mr-5 hover:text-white py-2 py-md-0">Projets</a>
                    <a href="#skills" className="nav-link mr-5 hover:text-white py-2 py-md-0">Compétences</a>
                    <a href="#formation" className="nav-link mr-5 hover:text-white py-2 py-md-0">Formations &
                        Experiences</a>
                </nav>
                <a href="#contact" className="nav-link text-white">
                    <div className="inline-flex items-center d-md-inline-flex d-none">
                        Contactez-moi
                        <ArrowRightIcon className="w-4 h-4 ml-1"/>
                    </div>
                </a>
            </div>
        </header>
    );
}
