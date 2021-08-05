// Adapted from: https://www.youtube.com/watch?v=7WwtzsSHdpI

import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    // adds different texts to scroll through website
    useEffect(()=> {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500, //adds a delay before backspacing text
            backSpeed: 70,
            strings: ["Healthcare","Bio-medical Informatics", "Machine Learning", "Bio-medical Diagnostics"]
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/resume pic crop.png" alt="Marinos" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                   <h2>Hi there, I'm</h2>
                   <h1>Marinos Dakis</h1>
                   <h3>My interests include: <span ref={textRef}></span></h3> 
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down arrow"/>
                </a>
            </div>
        </div>
    )
}
