import React, { useState } from 'react';
import styled from 'styled-components';
import { getPlaceholderImage } from '../utils/placeholders';
import ProjectCard from '../components/sections/ProjectCard';

const PageHeader = styled.header`
  padding: 6rem 2rem 4rem;
  background-color: #0a0a0a;
  color: #fff;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const WorkSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f8f8f8;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.active ? '#0a0a0a' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#0a0a0a'};
  border: 2px solid #0a0a0a;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0a0a0a;
    color: #fff;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const WorkPage: React.FC = () => {
  // Categories for filtering
  const categories = ['All', 'Digital', 'Art'];
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Updated project data for talent and media management company
  const projects = [
    {
      id: 1,
      title: 'Celebrity Brand Partnership',
      category: 'Digital',
      description: 'Strategic collaboration between top influencer and luxury fashion brand',
      image: getPlaceholderImage(1),
      link: '/work/1'
    },
    {
      id: 2,
      title: 'Music Artist Management',
      category: 'Art',
      description: 'Complete career development and management for emerging recording artist',
      image: getPlaceholderImage(2),
      link: '/work/2'
    },
    {
      id: 3,
      title: 'Digital Content Strategy',
      category: 'Digital',
      description: 'Multi-platform content planning and execution for social media personality',
      image: getPlaceholderImage(3),
      link: '/work/3'
    },
    {
      id: 4,
      title: 'Talent Booking Campaign',
      category: 'Digital',
      description: 'Nationwide tour and appearance management for entertainment group',
      image: getPlaceholderImage(4),
      link: '/work/4'
    },
    {
      id: 5,
      title: 'Exhibition Curation',
      category: 'Art',
      description: 'Contemporary art showcase featuring represented visual artists',
      image: getPlaceholderImage(5),
      link: '/work/5'
    },
    {
      id: 6,
      title: 'Portfolio Development',
      category: 'Art',
      description: 'Creative direction and portfolio building for fashion models',
      image: getPlaceholderImage(6),
      link: '/work/6'
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <>
      <PageHeader>
        <PageTitle data-aos="fade-up">Our Work</PageTitle>
        <PageDescription data-aos="fade-up" data-aos-delay="200">
          Explore our portfolio of talent management, digital strategy, and artistic representation.
        </PageDescription>
      </PageHeader>
      
      <WorkSection>
        <FilterContainer data-aos="fade-up">
          {categories.map(category => (
            <FilterButton 
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </ProjectsGrid>
      </WorkSection>
    </>
  );
};

export default WorkPage; 