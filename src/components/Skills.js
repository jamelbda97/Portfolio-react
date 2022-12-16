import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";
import React from "react";
import {skills} from "../data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                        Compétences &amp; Technologies
                    </h1>
                </div>
                <Row>
                    {skills.map((skill) => (
                        <Col key={skill} className="col-6 col-md-3 my-3">
                            <div className="bg-blue-100 rounded p-3 title-font font-medium text-blue-500">
                                <BadgeCheckIcon className="text-blue-400 inline-block h-7 mr-2"/>
                                {skill}
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
}
