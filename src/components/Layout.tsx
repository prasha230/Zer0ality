import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import ScrollToTop from './ui/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Global styles to fix layout issues
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    max-width: 100%;
    overflow-x: hidden;
    position: relative;
  }
  
  body {
    width: 100%;
    min-height: 100vh;
  }
`;

const Main = styled.main`
  min-height: 100vh;
  padding-top: 15vh; // For the fixed navbar
  
  @media (max-width: 768px) {
    padding-top: 15vh; // More padding for mobile with stacked nav
    width: 100%;
    overflow: hidden;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout; 