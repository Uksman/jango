//WHY JANGO SECTION

import React, { useState } from "react";
import styled from "styled-components";
import data from "../../data/AccordionData";
import image from "../../assets/misc/jango-intro-2.jpg";

const YjangoContainer = styled.div`
  background-color: #f7f7f7;
  padding: 80px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative; 

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding-left: 50px;
    margin: 30px;
    padding-right: 50px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .container {
      grid-template-columns: 1fr;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

const YjangoContent = styled.div`
  padding: 20px;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 90px;
    display: block;
    height: 55vh;
    width: 100%;
    border: 0;
    padding: 30px;
    object-fit: contain;
  }
`;

const Text = styled.p`
  position: relative;
  background-color: #ffffff;
  width: 50%;
  padding: 30px;
  left: 20px;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const YjangoText = styled.div`
  h3 {
    font-size: 30px;
    margin: 0 0 30px 0;
    color: #2f353b !important;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Line = styled.hr`
  width: 30px;
  height: 3px;
  background-color: #32c5d2;
  margin: 0 0 30px 0;
`;

const Button = styled.button`
  background-color: #32c5d2;
  color: white;
  border: none;
  outline: none;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
  }
`;

const Accordion = styled.div`
  width: 100%;
`;

const AccordionItem = styled.button`
  background-color: ${({ isOpen }) => (isOpen ? "#32c5d2" : "white")};
  margin-bottom: 10px;
  padding: 30px 30px 25px 30px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  color: ${({ isOpen }) => (isOpen ? "white" : "black")};
  width: 100%;
  text-align: left;
  border: none;

  &:hover {
    background-color: #32c5d2;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 20px 20px 15px 20px;
  }
`;

const AccordionTitle = styled.div`
  margin-bottom: 20px;
  font-size: 19px;
  font-weight: 600 !important;
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  border-top: none;
  font-size: 18px;
`;

export default function Feature2() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <YjangoContainer>
      <div className="container">
        <YjangoContent>
          <YjangoText data-aos="fade-down">
            <h3>
              Why
              <br />
              JANGO ?
            </h3>
          </YjangoText>
          <Line />
          <Text data-aos="fade-left">
            JANGO is the ultimate tool to power any of your projects. Corporate,
            ecommerce, SAAS, CRM and much more.
          </Text>
          <Button data-aos="zoom-in">Explore</Button>
          <img
          data-aos="fade-up"
            src={image}
            alt="Example Image"
            style={{maxWidth: "1300px", marginBottom: "20px" }}
          />
        </YjangoContent>
        <Accordion data-aos="fade-up-left">
          {data.map((item, index) => (
            <AccordionItem
              key={item.id || index} // Assuming each item has a unique 'id' property
              onClick={() => handleToggle(index)}
              isOpen={openIndex === index}
            >
              <AccordionTitle>
                <h4>{item.panelHeading}</h4>
              </AccordionTitle>
              <AccordionContent isOpen={openIndex === index}>
                <p>{item.panelBody}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </YjangoContainer>
  );
}
