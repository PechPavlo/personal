import React, { useState } from 'react';
import './Contacts.scss';
import Footer from '../footer/Footer';
import Service from '../ServiceApi';

function Contacts() {
  const [isSent, setIsSent] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const isSentHandler = (sent) => {
    setIsSent(sent);
    setTimeout(() => setIsSent(false), 8000);
  };

  const sendData = async (event) => {
    event.preventDefault();
    const res = await Service(`Name: ${name}
    Email: ${email}
    Message: ${message}`);
    isSentHandler(res);
  };

  return (
    <div className="contacts">
      <div className="contacts_body">
        <h2>Contact</h2>
        <span className="contacts_body-title">Let’s get in touch</span>
        <p>
          Feel free to contact me anytime. I would love to hear from you if you
          are a potential client or even if you work in the IT industry, as I am
          always looking to expand my knowledge.
        </p>
        <p>
          You can contact with me by using the contact form below or by sending
          an e-mail to the address located at the bottom of the page. I always
          respond to messages within 24 hrs.
        </p>
        <div className="contact_form-wraper">
          <form id="contact_form" onSubmit={sendData}>
            <div className="contact_form-top">
              <input className="contact_form-name" name="name" type="text" placeholder="NAME" minLength="3" maxLength="35" required onChange={(ev) => setName(ev.target.value)} />
              <input className="contact_form-email" name="email" type="email" placeholder="EMAIL ADDRESS" required onChange={(ev) => setEmail(ev.target.value)} />
            </div>
            <textarea className="contact_form-message" name="subjects" type="text" placeholder="MESSAGE" minLength="5" maxLength="300" required onChange={(ev) => setMessage(ev.target.value)} />
            {isSent && <p className="send-message">Your message has successfully sent and I&#39;ll respond to you as soon as possible.</p>}
            <button id="submit" form="contact_form" type="submit">send</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
