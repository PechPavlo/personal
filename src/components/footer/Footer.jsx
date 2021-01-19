import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        {/* <h2>contact</h2> */}
        <div className="footer-contacts">
          <div className="footer-social_links">
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/pavlo-pechenevskyi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              className="footer-link"
              href="https://t.me/Pavlo_Pechenevskyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </a>
            <a
              className="footer-link"
              href="https://www.facebook.com/profile.php?id=100000677168898"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              className="footer-link"
              href="https://github.com/PechPavlo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div className="footer-contacts_info">
            <a
              className="footer-link"
              href="mailto:pavlo.pechenevskyi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlineIcon />
              pavlo.pechenevskyi@gmail.com
            </a>
            <a
              className="footer-link"
              href="tel:+380506806838"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneInTalkIcon />
              +38(050)680-68-38
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <span>Pavlo Pechenevskyi  © 2021</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
