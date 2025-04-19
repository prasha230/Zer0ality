import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface ScrollButtonProps {
  visible: boolean;
}

const ScrollButton = styled.button<ScrollButtonProps>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: #0a0a0a;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transform: ${props => (props.visible ? 'translateY(0)' : 'translateY(20px)')};
  z-index: 99;
  
  &:hover {
    background-color: #333;
    transform: ${props => props.visible && 'translateY(-5px)'};
  }
`;

const ArrowIcon = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 2px solid white;
  border-left: 2px solid white;
  transform: rotate(45deg);
  margin-top: 5px;
`;

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  return (
    <ScrollButton visible={visible} onClick={scrollToTop} aria-label="Scroll to top">
      <ArrowIcon />
    </ScrollButton>
  );
};

export default ScrollToTop; 