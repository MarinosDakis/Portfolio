// Adapted from: https://www.youtube.com/watch?v=7WwtzsSHdpI

import "./works.scss"
import { useState } from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    // this will contain the data for the following section
    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Web Development",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Covid-19 Data Challenge",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Academic Projects",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
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
                            <div className="imgContainer">
                                <img src={d.icon} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            <span>Projects</span>  
                        </div>
                    </div>

                    <div className="right">
                        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
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

/*
web application
                <div className="item">
                    <img src="./assets/globe.png" alt="" />
                    <h3>Covid-19 Symptom Challenge</h3>
                </div>
                <div className="item">
                    <img src="./assets/globe.png" alt="" />
                    <h3>Best Fit Simulation</h3>
                </div>
                <div className="item">
                    <img src="./assets/globe.png" alt="" />
                    <h3>Expression Tree</h3>
                </div>

*/
