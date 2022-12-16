import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react'
import './carousel.css'
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";

let nextTriggered = false
let infinity = false

const Carousel = forwardRef((props, ref) => {

    const {children, refreshParentCallback} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    useImperativeHandle(ref, () => ({
        getCurrentIndex() {
            if (nextTriggered) {
                if (currentIndex === children.length) {
                    console.log("Next/1ST")
                    console.log(children.length - 1)
                    return children.length - 1
                } else {
                    console.log("Next/2ND")
                    console.log(currentIndex + 2)
                    return currentIndex + 2
                }
            } else {
                if (currentIndex === 0) {
                    console.log("Back/1ST")
                    console.log(children.length - 3)
                    return children.length - 3
                } else {
                    console.log("Back/2ND")
                    console.log(currentIndex)
                    return currentIndex
                }
            }
        },
        navigateToNext() {
            nextIndex()
        },
        navigateToPrev() {
            prevIndex()
        },
    }));

    function nextIndex() {
        nextTriggered = true
        if (currentIndex !== 5) {
            infinity = false
            setCurrentIndex(prevState => prevState + 1)
        } else {
            infinity = true
            setCurrentIndex(0)
        }
    }

    function prevIndex() {
        nextTriggered = false
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        } else {
            setCurrentIndex(length - 3)
        }
    }

    const next = () => {
        nextIndex()
        refreshParentCallback()
    }

    const prev = () => {
        prevIndex()
        refreshParentCallback()
    }

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    let val = "carousel-normal-translation"

    if (nextTriggered) {
        if (currentIndex === 0) {
            val = "carousel-override-translation"
            setTimeout(function () {
                setCurrentIndex(currentIndex + 1)
            }, 0);
        }
    } else {
        if (currentIndex === length - 3) {
            val = "carousel-override-translation"
            setTimeout(function () {
                setCurrentIndex(currentIndex - 1)
            }, 0);
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <a onClick={prev} className="left-arrow">
                    <ChevronLeftIcon className="m-auto text-black"/>
                </a>
                <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div
                        className={`carousel-content ${val}`}
                        style={{transform: `translateX(-${currentIndex * 100 / 3}%)`}}
                    >
                        {children}
                    </div>
                </div>
                <a onClick={next} className="right-arrow">
                    <ChevronRightIcon className="m-auto text-black"/>
                </a>
            </div>
        </div>
    );
});

export default Carousel
