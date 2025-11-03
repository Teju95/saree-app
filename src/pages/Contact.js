import { useState } from "react";
import "./Contact.css"; // custom styles

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted] = useState(false);
  const [error] = useState("");

  if (error) {
    return <p className="text-danger text-center mt-4">{error}</p>;
  }

  if (submitted) {
    return (
      <div className="text-center mt-5">
        <h5>We've received your message, thank you for contacting us!</h5>
      </div>
    );
  }

  return (
    <div className="contact-container d-flex align-items-center justify-content-center">
      <form className="contact-form shadow p-4 rounded">
        <h2 className="text-center mb-4">Contact Us</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="yourname@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-dark w-50">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
