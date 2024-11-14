// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const About = () => (
  <AboutContainer id="about">
    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
      About Me
    </motion.h2>
    <motion.p initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 1.5 }}>
      I'm a software developer with a focus on creating smooth, user-friendly web applications.
    </motion.p>
  </AboutContainer>
);

const AboutContainer = styled.section`
  padding: 2rem;
  background: #f5f5f5;
  color: #333;
`;

export default About;
