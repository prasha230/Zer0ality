import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/images/Zer0ality_Logo.png';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 5rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  background-color: #ffde59;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
  
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    height: 15vh;
  }
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  height: 10vh;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (min-width: 769px) {
    height: 12vh;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (min-width: 769px) {
    margin-top: 0;
  }
`;

interface NavLinkProps {
  isActive: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  color: #2D2D2A;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease-in-out;
  font-weight: ${props => props.isActive ? '700' : '400'};
  
  &:after {
    content: '';
    position: absolute;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #2D2D2A;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (min-width: 769px) {
    font-size: 1.3rem;
  }
`;

const Navbar: React.FC = () => {
  const location = useLocation();
  
  // Helper function to check if the link matches the current path
  const isActive = (path: string) => {
    // For home page
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    // For other pages, check if the pathname starts with the path (to handle nested routes)
    return path !== '/' && location.pathname.startsWith(path);
  };
  
  return (
    <Nav>
      <LogoContainer to="/">
        <LogoImage src={logoImage} alt="Zer0ality Logo" />
      </LogoContainer>
      
      <NavLinks>
        <NavLink to="/work" isActive={isActive('/work')}>Work</NavLink>
        <NavLink to="/about" isActive={isActive('/about')}>About Us</NavLink>
        <NavLink to="/contact" isActive={isActive('/contact')}>Contact Us</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 