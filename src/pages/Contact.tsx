import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

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

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f8f8f8;
  width: 100%;
  overflow-x: hidden;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  padding: 2rem 0;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 2.5rem;
`;

const ContactDetails = styled.div`
  margin-bottom: 3rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #0a0a0a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-right: 1.5rem;
`;

const ContactText = styled.div`
  flex: 1;
`;

const ContactLabel = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const ContactValue = styled.p`
  color: #666;
  font-size: 1rem;
`;

const ContactForm = styled.form`
  background-color: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #0a0a0a;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #0a0a0a;
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: #0a0a0a;
  color: #fff;
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #333;
  }
  
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #e6f7e6;
  color: #2e7d32;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <>
      <PageHeader>
        <PageTitle data-aos="fade-up">Contact Us</PageTitle>
        <PageDescription data-aos="fade-up" data-aos-delay="200">
          Have a project in mind? Get in touch with us and let's create something amazing together.
        </PageDescription>
      </PageHeader>
      
      <ContactSection>
        <ContactContainer>
          <ContactInfo data-aos="fade-right">
            <ContactTitle>Get In Touch</ContactTitle>
            <ContactDescription>
              We'd love to hear from you. Whether you have a question about our services, pricing, or just want to say hello, we're here to help.
            </ContactDescription>
            
            <ContactDetails>
              <ContactItem>
                <ContactIcon>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </ContactIcon>
                <ContactText>
                  <ContactLabel>Our Location</ContactLabel>
                  <ContactValue>Gokul Bhawan, New Delhi, 110034</ContactValue>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </ContactIcon>
                <ContactText>
                  <ContactLabel>Email Address</ContactLabel>
                  <ContactValue>contact@zer0ality.com</ContactValue>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <FontAwesomeIcon icon={faPhone} />
                </ContactIcon>
                <ContactText>
                  <ContactLabel>Phone Number</ContactLabel>
                  <ContactValue>+91 0000000000</ContactValue>
                </ContactText>
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit} data-aos="fade-left">
            {isSubmitted && (
              <SuccessMessage>
                Your message has been sent successfully. We'll get back to you soon!
              </SuccessMessage>
            )}
            
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.name && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.name}</p>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your email address"
              />
              {errors.email && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.email}</p>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
              />
              {errors.subject && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.subject}</p>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message"
              />
              {errors.message && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.message}</p>}
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default ContactPage; 