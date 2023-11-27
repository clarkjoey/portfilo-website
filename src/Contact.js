import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <br />
      <p>
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: "0.5rem" }}/>email: joeclark3516@gmail.com
        <br />
        <FontAwesomeIcon icon={faInbox} style={{ marginRight: "0.5rem" }}/>208-789-3908
      </p>
      <br />
      <a href="mailto:joeclark3516@gmail.com"><img style={{ height: "100px" }} src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt="Gmail"/></a>
      <a href="https://www.linkedin.com/in/imjosephclark/" target="_blank" rel="noopener noreferrer"><img style={{ height: "100px" }} src="https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-LinkedIn-Logo.jpg" alt="LinkedIn"/></a>
      <a href="https://github.com/clarkjoey" target="_blank" rel="noopener noreferrer"><img style={{ height: "100px"}} src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.jpg" alt="GitHub"/></a>
    </section>
  );
}

export default Contact;