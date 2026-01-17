import { useState} from "react";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Form Submitted !");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div><br />

                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div><br />

                <div>
                    <label>Message: </label>    
                    <textarea 
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div><br />

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;