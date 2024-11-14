// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const Contact = () => (
  <ContactContainer id="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </ContactContainer>
);

const ContactContainer = styled.section`
  padding: 2rem;
  background: #f5f5f5;
  color: #333;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    padding: 0.5rem;
    color: white;
    background-color: #282c34;
  }
`;

export default Contact;
