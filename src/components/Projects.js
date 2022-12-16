import {CodeIcon, DesktopComputerIcon, DeviceMobileIcon} from "@heroicons/react/solid";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useRef, useState} from "react";
import Carousel from "./Carousel/Carousel"
import {projects} from "../data";

let currentIndex = 1;

export default function Projects() {

    const childRef = useRef();

    const [selectedProject, setSelectedProject] = useState(projects[1]);

    const [webVisible, setWebVisible] = useState(false);
    const [mobileVisible, setMobileVisible] = useState(false);

    const [hasWeb, setHasWeb] = useState(true);
    const [hasMobile, setHasMobile] = useState(true);

    const [showMore, setShowMore] = useState(false);

    function selectProject(index, isNavigation) {
        if (isNavigation) {
            if (index > projects.length - 2) { // Infinity next
                childRef.current.navigateToNext()
                currentIndex = 2
            } else if (index === 0) { // Infinity prev
                childRef.current.navigateToPrev()
                currentIndex = projects.length - 3
            } else { // Normal behavior
                if (currentIndex < index) {
                    childRef.current.navigateToNext()
                } else if (currentIndex > index) {
                    childRef.current.navigateToPrev()
                }
                currentIndex = index
            }
        } else {
            currentIndex = index
        }
        let project = projects[currentIndex]

        if (project.type === 1) {
            setHasMobile(true)
            setHasWeb(false)
        } else if (project.type === 2) {
            setHasMobile(false)
            setHasWeb(true)
        } else if (project.type === 3) {
            setHasMobile(true)
            setHasWeb(true)
        } else {
            setHasMobile(false)
            setHasWeb(false)
        }

        setShowMore(false)
        setMobileVisible(false)
        setWebVisible(false)

        setSelectedProject(project)
    }

    let debugColors = [
        "bg-yellow-400",
        "bg-orange-500",
        "bg-pink-500",
        "bg-red-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-purple-500",
        "bg-blue-300",
    ]
    debugColors = []

    let linkToWeb;
    if (hasWeb) {
        const insideText = webVisible ? "Masquer l'aperçu web" : "Afficher l'aperçu web"
        linkToWeb =
            <a href="#projects" className="btn btn-primary py-2 my-1 w-100" onClick={() => {
                setWebVisible(!webVisible)
            }}>
                {insideText}
                <DesktopComputerIcon className="mx-2 inline-block w-5"/>
            </a>
    }

    let linkToMobile;
    if (hasMobile) {
        linkToMobile =
            <Col className="m-auto">
                <a href="#projects" className="btn btn-primary w-100 my-1 py-2"
                   onClick={() => setMobileVisible(!mobileVisible)}>
                    {mobileVisible ? "Cacher l'aperçu mobile" : "Afficher l'aperçu mobile"}
                    <DeviceMobileIcon className="mx-2 inline-block w-5"/>
                </a>
            </Col>
    }

    let webVersion;
    if (hasWeb && webVisible) {
        webVersion =
            <Row xs={{span: 12}} className="my-auto">
                <div className="bg-light rounded-4 p-1 p-md-3">
                    <video key={selectedProject.videoUrl} controls autoPlay muted loop={true} className="mx-auto">
                        <source src={selectedProject.otherUrl} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Row>
    }

    let mobileVersion;
    if (hasMobile && mobileVisible) {
        mobileVersion = <Col xs={{span: 12}} md={{span: 5}} lg={{span: 5}} xl={{span: 3}}
                             className={`my-auto relative ${debugColors[1]}`}>
            <div className="relative rounded-xl mb-5 my-sm-0">
                <img alt="gallery" src="./phone-overlay.png"
                     className="absolute top-0 bottom-0 my-auto z-0 object-cover"/>
                <div className="position-relative z-20">
                    <video key={selectedProject.videoUrl} controls autoPlay muted loop={true}
                           className="p-3 p-sm-4 p-md-2 p-lg-3 rounded-5" style={{aspectRatio: "13/27"}}>
                        <source className="rounded" src={selectedProject.videoUrl} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </Col>
    }

    function NewlineText(props) {
        return props.text.split('\n').map(str => <p>{str}</p>);
    }

    return (
        <section className="text-gray-400 bg-gray-700 body-font">
            <div className="container px-4 px-md-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4"/>
                    <h1 id="projects" className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
                        Applications que j'ai réalisé
                    </h1>
                </div>
                {webVersion}
                <Row className={`mt-2 ${debugColors[0]}`}>
                    {mobileVersion}
                    <Col className={`bg-gray-100 rounded-2xl text-start my-auto ${debugColors[2]}`}>
                        <Row className={`${debugColors[3]}`}>
                            <Col md={{span: 2}} className={`${debugColors[4]}`}>
                                <img width="100" alt="logo" className="mx-auto my-3" src={selectedProject.logoUrl}/>
                            </Col>
                            <Col className={`flex-grow-1 ${debugColors[5]}`}>
                                <h2 className="title-font font-medium text-black my-2">
                                    {selectedProject.title}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-500 mb-3">
                                    {selectedProject.subtitle}
                                </h1>
                                <button className="btn btn-dark" onClick={() => setShowMore(!showMore)}>
                                    {showMore ? "Cacher les details" : "Afficher plus de details"}
                                </button>
                            </Col>
                            <Col md={{span: 3}} className="m-auto">
                                {linkToWeb}
                                {linkToMobile}
                            </Col>
                        </Row>
                        {showMore ?
                            <Row className="m-5">
                                <h5 className="title-font font-medium text-black my-2">
                                    Description :
                                </h5>
                                <h5 className="title-font font-normal text-gray-700 my-2">
                                    <NewlineText text={selectedProject.description}/>
                                </h5>
                                <h5 className="title-font font-medium text-black my-2">
                                    Code source :
                                </h5>
                                <h5 className="title-font font-normal text-gray-700 my-2">
                                    {selectedProject.sourceCodeLink === "Privé" ?
                                        <NewlineText text={selectedProject.sourceCodeLink}/>
                                        :
                                        <a className="link-info"
                                           href={selectedProject.sourceCodeLink}>{selectedProject.sourceCodeLink}</a>
                                    }
                                </h5>
                                <h5 className="title-font font-medium text-black my-2">
                                    Plateforme :
                                </h5>
                                <h5 className="title-font font-normal text-gray-700 my-2">
                                    <NewlineText text={selectedProject.platforms}/>
                                </h5>
                            </Row> :
                            <Row className="m-4"/>
                        }
                        <Row className={`text-center font-medium text-black mt-4 h-44 ${debugColors[6]}`}>
                            <Row className={`${debugColors[0]} mx-auto`}>
                                <h5>
                                    Technologies utilisés
                                </h5>
                            </Row>
                            <Row className={`${debugColors[0]} mx-auto`}>{
                                selectedProject.technologies.length === 4 ?
                                    selectedProject.technologies.map((technology) =>
                                        <Col key={technology.id} className="col-3">
                                            <div className="bg-white rounded-4 mx-auto p-2">
                                                <a href={technology.link} className="">
                                                    <img width="75" height="75" alt="logo" className="mx-auto"
                                                         src={technology.imageUrl}/>
                                                </a>
                                                <p className="text-black">{technology.name}</p>
                                            </div>
                                        </Col>
                                    )
                                    :
                                    selectedProject.technologies.map((technology) =>
                                        <Col key={technology.id}>
                                            <div className="bg-white rounded-4 mx-auto p-2">
                                                <a href={technology.link} className="">
                                                    <img width="75" height="75" alt="logo" className="mx-auto"
                                                         src={technology.imageUrl}/>
                                                </a>
                                                <p className="text-black">{technology.name}</p>
                                            </div>
                                        </Col>
                                    )
                            }</Row>
                        </Row>
                        <Row className={`mx-2 my-3 h-40 rounded-5 bg-white`}>
                            <Row className={`text-center title-font text-black mx-auto`}>
                                <h4>
                                    Autres réalisations
                                </h4>
                            </Row>
                            <div className="my-auto">
                                <Carousel ref={childRef}
                                          refreshParentCallback={() => selectProject(childRef.current.getCurrentIndex(), false)}
                                          navigateToPosition={selectedProject}
                                >
                                    {projects.map((project, index) => {
                                        let x = selectedProject.id !== project.id ? "small-animated" : "big-animated";
                                        return <a className={`my-auto ${debugColors[8]}`}
                                                  onClick={() => {
                                                      selectProject(index, true)
                                                  }}>
                                            <div>
                                                <img key={project.key} className={`${x}`} alt="logo"
                                                     src={project.logoUrl}/>
                                            </div>
                                        </a>
                                    })}
                                </Carousel>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    );
}
