// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  padding: 100px 20px;
  text-align: center;
  background-color: #282c34;
  color: white;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background-color: #333;
  color: white;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 250px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Projects = () => {
  const projectData = [
    { title: 'Portfolio Website', description: 'A modern personal portfolio with React and Three.js.' },
    { title: 'E-Commerce App', description: 'An intuitive e-commerce platform with a shopping cart.' },
    { title: 'Chat Application', description: 'Real-time chat built with WebSocket integration.' },
  ];

  return (
    <ProjectsWrapper id="projects">
      <h2>My Projects</h2>
      <ProjectList>
        {projectData.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsWrapper>
  );
};

export default Projects;
