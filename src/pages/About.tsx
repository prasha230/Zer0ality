import React from 'react';
import styled from 'styled-components';
import { getPlaceholderImage } from '../utils/placeholders';

const PageHeader = styled.header`
  padding: 6rem 2rem 4rem;
  background-color: #0a0a0a;
  color: #fff;
  text-align: center;
  width: 100%;
  overflow: hidden;
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

const Section = styled.section`
  padding: 6rem 2rem;
  width: 100%;
  overflow-x: hidden;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StorySection = styled(Section)`
  background-color: #f8f8f8;
`;

const StoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const StoryContent = styled.div`
  padding: 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StoryImage = styled.div`
  background-color: #ddd;
  border-radius: 50%;
  height: 450px;
  width: 450px;
  background-size: cover;
  background-position: center;
  margin: auto;
  
  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
    width: 250px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
`;

const ValuesSection = styled(Section)`
  background-color: #fff;
`;

const ValueCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #0a0a0a;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const AboutPage: React.FC = () => {
  // Sample values data
  const values = [
    {
      id: 1,
      icon: '🚀',
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to create innovative talent management strategies.'
    },
    {
      id: 2,
      icon: '💡',
      title: 'Creativity',
      description: 'Our creative approach helps us develop unique opportunities and partnerships for our artists and clients.'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in fostering meaningful connections between talent, brands, and audiences for exceptional results.'
    }
  ];
  
  return (
    <>
      <PageHeader>
        <PageTitle data-aos="fade-up">About Us</PageTitle>
        <PageDescription data-aos="fade-up" data-aos-delay="200">
          Learn about our journey and the values that drive our talent and media management company.
        </PageDescription>
      </PageHeader>
      
      <StorySection>
        <SectionContent>
          <StoryContainer>
            <StoryContent data-aos="fade-right">
              <SectionTitle>Our Story</SectionTitle>
              <Paragraph>
                Founded in 2020, Zer0ality began as a small team of passionate industry professionals with a shared vision: to create meaningful opportunities for artists and creative talent in a rapidly evolving media landscape.
              </Paragraph>
              <Paragraph>
                Since then, we've grown into a full-service talent and media management company, working with diverse artists, influencers, and creative professionals to develop their careers and connect them with the right opportunities. Our journey has been driven by a commitment to excellence, creativity, and putting our talent first.
              </Paragraph>
              <Paragraph>
                Today, Zer0ality continues to evolve, embracing new platforms and innovative strategies while staying true to our core mission of nurturing talent and creating impactful media experiences that resonate with audiences.
              </Paragraph>
            </StoryContent>
            <StoryImage data-aos="fade-left" style={{ backgroundImage: `url(${getPlaceholderImage(7)})` }} />
          </StoryContainer>
        </SectionContent>
      </StorySection>
      
      <ValuesSection>
        <SectionContent>
          <SectionTitle data-aos="fade-up" style={{ textAlign: 'center' }}>Our Values</SectionTitle>
          <ValueCards>
            {values.map(value => (
              <ValueCard key={value.id} data-aos="fade-up">
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValueCards>
        </SectionContent>
      </ValuesSection>
    </>
  );
};

export default AboutPage; 