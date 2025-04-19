import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getPlaceholderImage } from '../utils/placeholders';
import HeroSection from '../components/sections/HeroSection';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section = styled.section`
  padding: 6rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeaturedWorkSection = styled(Section)`
  background-color: #f8f8f8;
`;

const WorkGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const WorkItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const WorkImage = styled.div`
  height: 250px;
  background-color: #ddd;
  background-size: cover;
  background-position: center;
`;

const WorkContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const WorkTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const WorkDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  flex: 1;
`;

const WorkLink = styled(Link)`
  display: inline-block;
  color: #0a0a0a;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ViewAllButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 4rem auto 0;
  padding: 1rem 2.5rem;
  background-color: transparent;
  color: #0a0a0a;
  text-decoration: none;
  border: 2px solid #0a0a0a;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0a0a0a;
    color: #fff;
  }
`;

const HomePage: React.FC = () => {
  // Updated featured work data for talent and media management
  const featuredWorks = [
    {
      id: 1,
      title: 'Celebrity Brand Partnership',
      description: 'Strategic collaboration between top influencer and luxury fashion brand',
      image: getPlaceholderImage(1),
      link: '/work/1'
    },
    {
      id: 2,
      title: 'Music Artist Management',
      description: 'Complete career development and management for emerging recording artist',
      image: getPlaceholderImage(2),
      link: '/work/2'
    },
    {
      id: 3,
      title: 'Exhibition Curation',
      description: 'Contemporary art showcase featuring represented visual artists',
      image: getPlaceholderImage(5),
      link: '/work/5'
    }
  ];
  
  return (
    <>
      <HeroSection 
        title="Zer0ality"
        subtitle="Premier talent and media management for artists, celebrities, and creative professionals."
        buttonText="View Our Work"
        buttonLink="/work"
      />
      
      <FeaturedWorkSection>
        <SectionTitle data-aos="fade-up">Featured Work</SectionTitle>
        <WorkGrid>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {featuredWorks.map(work => (
              <SwiperSlide key={work.id}>
                <WorkItem data-aos="fade-up">
                  <WorkImage style={{ backgroundImage: `url(${work.image})` }} />
                  <WorkContent>
                    <WorkTitle>{work.title}</WorkTitle>
                    <WorkDescription>{work.description}</WorkDescription>
                    <WorkLink to={work.link}>View Project</WorkLink>
                  </WorkContent>
                </WorkItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </WorkGrid>
        <ViewAllButton to="/work" data-aos="fade-up">View All Projects</ViewAllButton>
      </FeaturedWorkSection>
    </>
  );
};

export default HomePage; 