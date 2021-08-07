// Adapted from: https://www.youtube.com/watch?v=7WwtzsSHdpI

import "./works.scss"
import { useState } from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    // this will contain the data for the following section
    const data = [
        {
          id: "1",
          title: "QC First",
          desc: "QcFirst is a full-stack course enrollment web application for students, instructors and administrators that was created using EJS, Bootstrap, CSS, MongoDB/Mongoose, and JavaScript (Node JS).",
          img: "assets/project images/QcFirst.png",
          url: "https://qcfirst--marinosdakis.repl.co/"
        },
        {
          id: "2",
          title: "Covid-19 Data Challenge",
          desc: "Team leader of 6 graduate students in COVID-19 project that assessed symptom survey data in partnership with Facebook Data for Good, Delphi Group, Joint Program on Survey Methodology, and more!",
          img: "assets/project images/virus.png",
          url: "https://drive.google.com/drive/folders/1PYz0QVXH8OBVOPLXHcoNF3mcu90ZfzM4?usp=sharing"
        },
        {
          id: "3",
          title: "Philo4Thought Website",
          desc: "Implemented new secure interactive WordPress site (100+ pages) for Philo4Thought Inc. using Elementor, Yoast SEO, etc. that increased website’s user traffic by 500%.",
          img: "assets/project images/P4T 2020 Logo Square.jpg",
          url: "https://www.philo4thought.org/"
        },
      ];

    // deals with the slider section  
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>

              {data.map((d) => (
                <div className="container">
                  <div className="itemWorks">
                      <div className="left">
                          <div className="leftContainer">
                              <h2>{d.title}</h2>
                              <p>{d.desc}</p>
                              <a href={d.url} target="_blank" rel="noreferrer">Project</a>  
                          </div>
                      </div>

                      <div className="right">
                          <img src={d.img} alt="" />
                      </div>
      
                  </div>
                </div>
              ))}

            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}