// src/components/HeroSection.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';
import Background3D from './Background3D';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const HeroSection = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <HeroWrapper>
      <Background3D />
      <animated.h1 style={fadeIn}>Hi, I'm a React Developer</animated.h1>
      <animated.p style={fadeIn}>
        I build interactive, user-friendly web applications using the latest React technologies.
      </animated.p>
      <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
        See My Work
      </button>
    </HeroWrapper>
  );
};

export default HeroSection;
