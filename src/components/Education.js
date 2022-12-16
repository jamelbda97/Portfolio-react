import React, {useState} from "react";
import "./education.css";
import {BookOpenIcon} from "@heroicons/react/solid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
    const [currentIndex, setCurrentIndex] = useState(1)

    let formations = [
        {
            id: 1,
            title: "Ecole Sup Privée d'Ingénierie et de Technologies",
            description: "",
            location: "Ariana",
            year: "2020 - Présent",
            imageUrl: "./education/esprit.jpg",
        },
        {
            id: 2,
            title: "ISAMM",
            description: "Spécialité informatique et multimédias",
            location: "Manouba",
            year: "2017 - 2022",
            imageUrl: "./education/isamm.jpg",
        },
    ]

    let experiences = [
        {
            id: 3,
            title: "Stage ingénieur",
            location: "Ministère des affaires culturelles",
            description: "Réalisation d’une application multiplateforme de lecture de livres numériques et livres audio (Flutter / NodeJS)",
            year: "Juin 2022 - Août 2022",
            imageUrl: "./education/ministere.jpg",
        },
        {
            id: 4,
            title: "Stage technicien",
            location: "Ben’s bestjob - Stage en ligne",
            description: "Réalisation d’un site web de recherche d’emploi (Symfony4)",
            year: "Août 2021",
            imageUrl: "./education/online-work.jpg",
        },
        {
            id: 5,
            title: "Stage de fin d’etudes",
            location: "TICDCE",
            description: "Réalisation d'un jeu mobile culturel avec géolocalisation (Unity / Autodesk Maya)",
            year: "Jan 2020 - Avril 2020",
            imageUrl: "./education/ticdce.jpg",
        },
    ]

    return (
        <section id="formation" className="center">
            <div className="container my-10 pb-4 shadow-lg bg-white rounded-4">
                <div className="flex flex-col w-full">
                    <BookOpenIcon className="mx-auto inline-block w-10 my-2"/>
                    <h1 id="projects"
                        className="sm:text-4xl text-3xl font-medium title-font mb-5 text-black text-center">
                        Formation & Experiences
                    </h1>
                </div>
                <div className="col mx-md-4 mb-2">
                    {formations.map((formation) =>
                        <div key={formation.id}
                             className={`${currentIndex === formation.id ? "start-anim" : "stop-anim"} py-1 relative`}>
                            <a onClick={() => setCurrentIndex(formation.id)}>
                                <div style={{
                                    backgroundImage: `url("${formation.imageUrl}")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }} className="h-100 rounded-4">
                                    <div className="h-100 custom-bg rounded-4">
                                        <Row>
                                            <Col>
                                                <p className="text-white p-2 p-sm-3">{formation.year}</p>
                                            </Col>
                                            <Col>
                                                <h2 className="text-white text-center p-0 p-sm-3">{formation.title}</h2>
                                            </Col>
                                            <Col>
                                                <p className="text-white text-end p-2 p-sm-3">{formation.location}</p>
                                            </Col>
                                        </Row>
                                        <p className="text-white text-center p-0 p-sm-3 mt-4">{formation.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}
                    {experiences.map((experience) =>
                        <div key={experience.id}
                             className={`${currentIndex === experience.id ? "start-anim" : "stop-anim"} py-1 relative`}>
                            <a onClick={() => setCurrentIndex(experience.id)}>
                                <div style={{
                                    backgroundImage: `url("${experience.imageUrl}")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }} className="h-100 rounded-4">
                                    <div className="h-100 custom-bg rounded-4">
                                        <Row>
                                            <Col>
                                                <p className="text-white p-2 p-sm-3">{experience.year}</p>
                                            </Col>
                                            <Col>
                                                <h2 className="text-white text-center p-0 p-sm-3">{experience.title}</h2>
                                            </Col>
                                            <Col>
                                                <p className="text-white text-end p-2 p-sm-3">{experience.location}</p>
                                            </Col>
                                        </Row>
                                        <p className="text-white text-center p-0 p-sm-3 mt-4">
                                            {currentIndex === experience.id ? experience.description : ""}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
