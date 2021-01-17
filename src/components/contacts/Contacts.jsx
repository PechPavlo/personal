import React from 'react';
import './Contacts.scss';
import Footer from '../footer/Footer';

function Contacts() {
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
          You can contact with me by sending
          an e-mail to the address located at the bottom of the page. I always
          respond to messages within 24 hrs.
        </p>
      </div>
      <Footer className="contacts" />
    </div>
  );
}

export default Contacts;
