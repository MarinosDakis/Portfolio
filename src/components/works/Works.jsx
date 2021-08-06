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
          desc:
            "QcFirst is a full-stack course enrollment web application for students, instructors and administrators that was created using EJS, Bootstrap, CSS, MongoDB/Mongoose, and JavaScript (Node JS).",
          img:
            "assets/project images/QcFirst.png",
          url: "https://qcfirst--marinosdakis.repl.co/"
        },
        {
          id: "2",
          title: "Covid-19 Data Challenge",
          desc:
            "Team leader of 6 graduate students in COVID-19 project that assessed symptom survey data in partnership with Facebook Data for Good, Delphi Group, Joint Program on Survey Methodology, and more!",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
            url: ""
        },
        {
          id: "3",
          title: "Academic Projects",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
            url: ""
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
                              <a href={d.url}>Project</a>  
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