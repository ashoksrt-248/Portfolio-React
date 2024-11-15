// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  padding: 20px;
  background-color: #282c34;
  color: white;
  text-align: center;

  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;

    &:hover {
      color: #61dafb;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>&copy; {new Date().getFullYear()} Your Name</p>
    <div>
      <a href="https://github.com">GitHub</a>
      <a href="https://linkedin.com">LinkedIn</a>
      <a href="https://twitter.com">Twitter</a>
    </div>
  </FooterWrapper>
);

export default Footer;
