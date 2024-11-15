// src/components/About.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  background-color: #f0f0f0;
  text-align: center;
`;

const About = () => {
  const fadeUp = useSpring({ from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 }, delay: 300 });

  return (
    <AboutWrapper id="about">
      <animated.h2 style={fadeUp}>About Me</animated.h2>
      <animated.p style={fadeUp}>
        I'm a passionate React developer with a love for creating interactive, dynamic web experiences. My expertise lies in modern JavaScript frameworks, 3D animations, and intuitive design.
      </animated.p>
    </AboutWrapper>
  );
};

export default About;
