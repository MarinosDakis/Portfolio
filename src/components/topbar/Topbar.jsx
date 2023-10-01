// Adapted from: https://www.youtube.com/watch?v=7WwtzsSHdpI

import "./topbar.scss";
import {Phone, Mail, Description, LinkedIn, GitHub, Instagram} from "@material-ui/icons";
import logo from "../../images/logo.png"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Marinos Dakis.</a>
                    {/* <div className="itemContainer">
                        <Phone className="icon" />
                        <span>+1 (516)-387-6165</span>
                    </div> */}
                    <div className="itemContainer">
                        <Mail className="icon"  />
                        <span><a href="mailto:Marinosdakis@gmail.com">Marinosdakis@gmail.com</a></span>
                    </div>
                    <div className="itemContainer">
                        <Description className="icon"  />
                        <span><a href="https://drive.google.com/file/d/1Fi_mjMsVTgubNUPDuSOWzIkmvj4vr5s8/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon"  />
                        <span><a href="https://www.linkedin.com/in/marinos-dakis/" target="_blank" rel="noreferrer">LinkedIn</a></span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon"  />
                        <span><a href="https://github.com/MarinosDakis" target="_blank" rel="noreferrer">GitHub</a></span>
                    </div>
                    <div className="itemContainer">
                        <Instagram className="icon"  />
                        <span><a href="https://www.instagram.com/marinos.dakis/" target="_blank" rel="noreferrer">Instagram</a></span>
                    </div>
                    <div className="itemContainer">
                        <img height="30" width="30" src={logo} alt="happy mum logo"/>
                        <span><a href="https://happymum.org/" target="_blank" rel="noreferrer">HappyMum</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
