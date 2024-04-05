
//JANGO'S Main Features
import React, { useState } from "react";
import styled, { css } from "styled-components";
import featuresData from "../../data/FeatureData5";
import iconimg from "../../assets/line-icons/dark1.png";
import iconimgdark from "../../assets/line-icons/default.png";
import bg62 from "../../assets/backgrounds/bg-62.jpg"

const Container = styled.div`
  max-width: 100%;
  margin-top: 30px;
`;

const Title = styled.h3`
  font-size: 34px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const Line = styled.div`
  width: 50px;
  height: 2px;
  background-color: #32c5d2;
  margin: 0 auto;
`;

const IconList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 30px 0;
`;

const Icon = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;

  div.space{
    margin-bottom: 20px;
  }

  &.active {
    color: #32c5d2;
  }
`;

const Content = styled.div`
 display: none;
 background-color: #2f353b;
 background-image: url(${bg62});
 padding: 80px 150px;
 width: 100%;
  &.active {
    display: flex;
    justify-content: space-around;
    align-items: center; // Center content on small screens
 }
 img {
    width: 50%;
    height: auto;
    border: 1px solid rgba(99, 8, 8, 0.1);
 }
 @media (max-width: 768px) {
    padding: 40px 20px; // Reduce padding on small screens
    flex-direction: column; // Stack content vertically on small screens
 }

`;

const TextContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;

 h4 {
    font-size: 30px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
 }
 p {
  color: #838e9a;
    font-size: 17px;
    font-weight: 300;
    margin: 20px 0;
 }
 button {
    padding: 10px 20px;
    background-color: #32c5d2;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #064b52;
    }
 }

 @media (max-width: 768px) {
    align-items: center; // Center text on small screens
 }
`;

const IconStyle = css`
  width: 55px;
  height: 55px;
  background-image: url(${iconimg});
  background-size: cover;
  display: inline-block;
    
  &.hover{
    background-image: url(${iconimgdark});
}
`;

const DesignIcon = styled.div`
  ${IconStyle}
  background-position: 0px 2400%;
`;

const ResponsiveIcon = styled.div`
  ${IconStyle}
  background-position: 0px 1800%;
`;

const SupportIcon = styled.div`
  ${IconStyle}
  background-position: 0px 1300%;
`;

const FlexibleIcon = styled.div`
  ${IconStyle}
  background-position: 0px 1900%;
`;

const StructuredIcon = styled.div`
  ${IconStyle}
  background-position: 0px 3200%;
`;

const Feature5 = () => {
  const [activeFeature, setActiveFeature] = useState(featuresData[0].id);

  return (
    <Container>
      <Title>JANGO'S Main Features</Title>
      <Line />
      <IconList>
        {featuresData.map((feature) => (
          <Icon
            key={feature.id}
            className={feature.id === activeFeature ? "active" : ""}
            onClick={() => setActiveFeature(feature.id)}
          >
            <div className="space">
              {feature.title === "Design" && <DesignIcon />}
              {feature.title === "Responsive" && <ResponsiveIcon />}
              {feature.title === "Support" && <SupportIcon />}
              {feature.title === "Flexible" && <FlexibleIcon />}
              {feature.title === "Structured" && <StructuredIcon />}
            </div>
            <span>{feature.title}</span>
          </Icon>
        ))}
      </IconList>
      {featuresData.map((feature) => (
        <Content
          key={feature.id}
          className={feature.id === activeFeature ? "active" : ""}
        >
          <TextContainer>
            <h4>{feature.content}</h4>
            <p>{feature.description}</p>
            <button>EXPLORE</button>
          </TextContainer>
          <img src={feature.image} alt={feature.content} />
        </Content>
      ))}
    </Container>
  );
};

export default Feature5;