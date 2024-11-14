// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const projects = [
  { name: 'Project 1', description: 'Description of Project 1' },
  { name: 'Project 2', description: 'Description of Project 2' },
];

const Projects = () => (
  <ProjectsContainer id="projects">
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <motion.div key={index} initial={{ scale: 0.8 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
        <ProjectCard>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </ProjectCard>
      </motion.div>
    ))}
  </ProjectsContainer>
);

const ProjectsContainer = styled.section`
  padding: 2rem;
  background: #282c34;
  color: white;
`;

const ProjectCard = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  background: #444;
`;

export default Projects;
