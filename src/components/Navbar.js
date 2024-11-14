// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Navbar = () => (
  <Nav>
    <Link to="home" smooth duration={500}>Home</Link>
    <Link to="about" smooth duration={500}>About</Link>
    <Link to="projects" smooth duration={500}>Projects</Link>
    <Link to="contact" smooth duration={500}>Contact</Link>
  </Nav>
);

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

export default Navbar;
