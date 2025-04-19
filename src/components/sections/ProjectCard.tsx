import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.div<{ backgroundImage: string }>`
  height: 250px;
  background-color: #ddd;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardCategory = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ViewButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  color: #0a0a0a;
  text-decoration: none;
  border: 2px solid #0a0a0a;
  font-size: 1rem;
  align-self: flex-start;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0a0a0a;
    color: #fff;
  }
`;

interface ProjectCardProps {
  id: string | number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  description,
  image,
  link
}) => {
  return (
    <Card data-aos="fade-up">
      <CardImage backgroundImage={image} />
      <CardContent>
        <CardCategory>{category}</CardCategory>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <ViewButton to={link}>View Project</ViewButton>
      </CardContent>
    </Card>
  );
};

export default ProjectCard; 