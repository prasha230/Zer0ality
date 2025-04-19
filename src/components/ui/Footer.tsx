import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logoImage from '../../assets/images/Zer0ality_Logo.png';

const FooterContainer = styled.footer`
  background-color: #eb543a;
// background-color: #00b6c8;
  color: #fff;
  padding: 4rem 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoSection = styled.div`
  flex: 1;
  min-width: 250px;
`;

const LogoContainer = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 14vh;
  margin-bottom: 1rem;
`;

const FooterNav = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 150px;
`;

const FooterNavHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FooterNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #2D2D2A;
  }
`;

const SocialLinksContainer = styled.div`
  flex: 1;
  min-width: 200px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid white;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: white;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterTop>
        <LogoSection>
          <LogoContainer to="/">
            <LogoImage src={logoImage} alt="Zer0ality Logo" />
          </LogoContainer>
        </LogoSection>
        
        <FooterNav>
          <FooterNavHeading>Menu</FooterNavHeading>
          <FooterNavLink to="/work">Work</FooterNavLink>
          <FooterNavLink to="/about">About</FooterNavLink>
          <FooterNavLink to="/contact">Contact</FooterNavLink>
        </FooterNav>
        
        <SocialLinksContainer>
          <FooterNavHeading>Connect</FooterNavHeading>
          <SocialLinks>
            <SocialIcon href="https://www.linkedin.com/company/zer0ality-ga" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/zer0ality.growth" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
          </SocialLinks>
        </SocialLinksContainer>
      </FooterTop>
      
      <FooterBottom>
        <Copyright>&copy; {currentYear} Zer0ality. All Rights Reserved.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 