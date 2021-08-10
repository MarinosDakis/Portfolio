// Adapted from: https://www.youtube.com/watch?v=7WwtzsSHdpI, https://w3collective.com/react-contact-form/, https://www.youtube.com/watch?v=NgWGllOjkbs&ab_channel=RemyFamily, https://www.emailjs.com/docs/examples/reactjs/

import "./contact.scss"
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {

    /*
    // taken from: https://w3collective.com/react-contact-form/
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        
        // stop page from refreshing
         e.preventDefault();
         setStatus("Sending...");

         const {name, email, message} = e.target.elements;

         let details = {
             name: name.value,
             email: email.value,
             message: message.value,
         };

         let response = await fetch("http://localhost:3000", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
          });

          setStatus("Submit");
          let result = await response.json();
          alert(result.status);
    };
    //end code taken
    */

    // adapted from [8/9/2021]: https://www.emailjs.com/docs/examples/reactjs/ 

    const [message, setMessage] = useState(false);

    const sendEmail = (e) => {

        // stop page from refreshing
        e.preventDefault();

        emailjs.sendForm('service_7fhq5aj', 'template_zih9zp5', e.target, 'user_T1v1KxdfCplKJOuY983fa')
        .then((result) => {
            console.log(result.text);
            setMessage(true);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    // end adaptation

    return (
        <div className="contact" id="contact">
           <div className="left">
               <img src="assets/shake.svg" alt="" />
           </div>
           <div className="right">
               <h2>Contact</h2>
               <form onSubmit={sendEmail}>
                   <input type="text" id="subject" name="subject" placeholder="Subject" required />
                   <input type="text" id="name" name="name" placeholder="Full Name" required />
                   <input type="email" id="email" name="email" placeholder="Email" required />
                   <textarea id="message" name="message" placeholder="Message" required />
                   <button type="submit">Send</button>
                   {message && <span>Your message has been sent!</span>}
               </form>
           </div>
        </div>
    )
}