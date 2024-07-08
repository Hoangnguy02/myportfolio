import React, {useRef} from 'react';
import './contact.css';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';

const Contact = ()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_535l0kp', 'template_dm7ao3k', form.current, {
        publicKey: 'DA7vkf7p1jZhiaWUi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <section id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'> Please fill out the form below to discuss any work opportunities</span>
            
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name' />
                <input type='email' className='email' placeholder='Your email' name='your_email' />
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'  />
                <button type='submit' value='Send' className='submitBtn'> Submit</button>
            
                <div className='links'>
                    <FontAwesomeIcon icon={faInstagram} className='link' />
                    <FontAwesomeIcon icon={faLinkedin} className='link' />
            
                </div>
            </form>
            
        </section>

    )
};
export default Contact;