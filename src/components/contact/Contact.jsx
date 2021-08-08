// Adapted from: https://www.youtube.com/watch?v=7WwtzsSHdpI

import "./contact.scss"
import { useState } from "react";

export default function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {

        // stop page from refreshing
        e.preventDefault();
        
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
           <div className="left">
               <img src="assets/shake.svg" alt="" />
           </div>
           <div className="right">
               <h2>Contact</h2>
               <form onSubmit={handleSubmit}>
                   <input type="email" placeholder="Email" />
                   <textarea placeholder="Message"></textarea>
                   <button type="submit">Send</button>
                   {message && <span>Your message has been sent!</span>}
               </form>
           </div>
        </div>
    )
}