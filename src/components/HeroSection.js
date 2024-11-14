// src/components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = () => (
  <HeroContainer>
    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      Hello, I'm Ashok Amara
    </motion.h1>
    <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1.5 }}>
      A passionate developer.
    </motion.p>
  </HeroContainer>
);

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #282c34;
  color: white;
`;

export default HeroSection;
