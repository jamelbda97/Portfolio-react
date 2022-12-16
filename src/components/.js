 import React from "react";
import {useTranslation} from 'react-i18next';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container} from "react-bootstrap";

export default function About() {
    const {t} = useTranslation();
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="mb-16 my-auto">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        {t('Welcome')} Jamel.<br
                        className="hidden lg:inline-block"/>{t("")}
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        {t('Headline')}
                    </p>
                    <Row className="mx-1 mx-md-0">
                        <Col sm={{span: 3}} md={{span: 7}} className="flex my-auto">
                            <a href="#contact"
                               className="text-decoration-none inline-flex text-white bg-blue-500 border-0
                                py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                                {t('HireMe')}
                            </a>
                            <a href="#projects"
                               className="text-decoration-none ml-4 inline-flex text-gray-800 bg-gray-300
                                py-2 px-6 focus:outline-none hover:bg-gray-400 hover:text-white rounded text-lg">
                                Voir mes realisations
                            </a>
                        </Col>
                        <Col sm={{span: 3}} md={{span: 3}} className="flex my-md-auto my-3">
                            <Row className="mx-5 mx-md-0">
                                <Col className="p-1 p-md-1">
                                    <a href="https://www.linkedin.com/in/jamel-bouassida-805b78194">
                                        <img src="./social-media/linkedin.png" alt="Linkedin"/>
                                    </a>
                                </Col>
                                <Col className="p-1">
                                    <a href="https://www.facebook.com/profile.php?id=100083120996193">
                                        <img src="./social-media/facebook.png" alt="Facebook"/>
                                    </a>
                                </Col>
                                <Col className="p-1">
                                    <a href="https://twitter.com/jamelbd97">
                                        <img src="./social-media/twitter.png" alt="Twitter"/>
                                    </a>
                                </Col>
                                <Col className="p-1">
                                    <a href="https://github.com/jamelbd97">
                                        <img src="./social-media/github.png" alt="Github"/>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center mx-auto rounded-circle w-50"
                        alt="hero"
                        src="./my-photo.jpg"
                    />
                </div>
            </div>


            <Container>
                <Row>
                    <Col md={{span: 8}}>
                        <Row className="mb-3">
                            <h1 className="text-black">
                                {t('Welcome')} Jamel.<br
                                className="hidden lg:inline-block"/>{t("")}
                            </h1>
                        </Row>
                        <Row>
                            <p className="mb-8 leading-relaxed">
                                {t('Headline')}
                            </p>
                        </Row>
                        <Row>
                            <Col>
                                <a href="#contact" className="btn btn-primary mx-2">
                                    {t('HireMe')}
                                </a>
                                <a href="#projects" className="btn mx-2" style={{background: "#dddfe8"}}>
                                    Voir mes realisations
                                </a>
                            </Col>
                            <Row>
                                <Col className="p-1">
                                    <a href="https://github.com/jamelbd97">
                                        <img src="./social-media/github.png" alt="Github"/>
                                    </a>
                                </Col>
                                <Col className="p-1 p-md-1">
                                    <a href="https://www.linkedin.com/in/jamel-bouassida-805b78194">
                                        <img src="./social-media/linkedin.png" alt="Linkedin"/>
                                    </a>
                                </Col>
                                <Col className="p-1">
                                    <a href="https://www.facebook.com/profile.php?id=100083120996193">
                                        <img src="./social-media/facebook.png" alt="Facebook"/>
                                    </a>
                                </Col>
                                <Col className="p-1">
                                    <a href="https://twitter.com/jamelbd97">
                                        <img src="./social-media/twitter.png" alt="Twitter"/>
                                    </a>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                    <Col md={{span: 4}}>
                        <img
                            className="object-cover object-center mx-auto rounded-circle w-50"
                            alt="hero"
                            src="./my-photo.jpg"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
