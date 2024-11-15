// src/components/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  padding: 100px 20px;
  text-align: center;
  background-color: #f0f0f0;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  input, textarea {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #61dafb;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #21a1f1;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted! (Mock Action)');
  };

  return (
    <ContactWrapper id="contact">
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" rows="4" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </Form>
    </ContactWrapper>
  );
};

export default Contact;
