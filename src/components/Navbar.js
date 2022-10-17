import {ArrowRightIcon} from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <a href="#about" className="nav-link ml-3 text-xl text-white ">
                    Med. Jameleddine Bouassida
                </a>
                <nav
                    className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-500 flex flex-wrap items-center text-base justify-center text-gray-400">
                    <a href="#projects" className="nav-link mr-5 hover:text-white">Past Work</a>
                    <a href="#skills" className="nav-link mr-5 hover:text-white">Skills</a>
                    <a href="#education" className="nav-link mr-5 hover:text-white">Education</a>
                    <a href="#education" className="nav-link mr-5 hover:text-white">Experience</a>
                </nav>
                <a href="#contact" className="p-2 rounded nav-link inline-flex items-center text-white hover:bg-gray-600">
                    <div className="inline-flex items-center">
                        Hire Me
                        <ArrowRightIcon className="w-4 h-4 ml-1"/>
                    </div>
                </a>
            </div>
        </header>
    );
}
