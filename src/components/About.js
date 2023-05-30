import React from "react";
import {useTranslation} from 'react-i18next';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container} from "react-bootstrap";

export default function About() {
    const {t} = useTranslation();
    return (
        <section id="about">
            <Container>
                <Row className="my-5">
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
                        <Row className="my-1">
                            <Col className="flex my-auto" xs={{span: 12}} md={{span: 5}}>
                                <Col className="text-center">
                                    <a href="#contact" className="btn btn-primary">
                                        {t('HireMe')}
                                    </a>
                                </Col>
                                <Col className="text-center">
                                    <a href="#projects" className="btn" style={{background: "#dddfe8"}}>
                                        Voir mes realisations
                                    </a>
                                </Col>
                            </Col>
                            <Col className="my-3" xs={{span: 12}} sm={{span: 12}} md={{span: 6}}>
                                <Row className="mx-5 mx-md-0">
                                    <Col>
                                        <a className="btn mx-0 px-0" href="https://github.com/jamelbda97">
                                            <img src="./social-media/github.png" alt="Github"/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a className="btn mx-0 px-0"
                                           href="https://www.linkedin.com/in/jamel-bouassida-805b78194">
                                            <img src="./social-media/linkedin.png" alt="Linkedin"/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a className="btn mx-0 px-0"
                                           href="https://www.facebook.com/jamelbda97">
                                            <img src="./social-media/facebook.png" alt="Facebook"/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a className="btn mx-0 px-0"
                                           href="https://www.instagram.com/jamel.bouassida">
                                            <img src="./social-media/instagram.png" alt="Instagram"/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a className="btn mx-0 px-0" href="https://twitter.com/jamelbda97">
                                            <img src="./social-media/twitter.png" alt="Twitter"/>
                                        </a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{span: 4}}>
                        <img
                            className="object-cover object-center mx-auto rounded-circle w-64 m-2"
                            alt="hero"
                            src="./my-photo.jpg"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
