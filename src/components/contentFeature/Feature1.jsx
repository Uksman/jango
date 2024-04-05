import React from "react";
import styled, { css } from "styled-components";
import featureData1 from "../../data/FeatureData1";
import img from "../../assets/line-icons/default.png";

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-left: 50px;
  padding-right: 50px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;

  @media (max-width: 767px) {
    padding: 15px;
  }
`;

const ImageStyle = css`
  display: inline-block;
  width: 60px;
  height: 60px;
  background-size: cover;
  margin-bottom: 10px;
  color: #32c5d2;
  background-image: url(${img});
`;

const Image1 = styled.div`
  ${ImageStyle}
  background-position: 0px -1300%;
`;
const Image2 = styled.div`
  ${ImageStyle}
  background-position: 0px -2500%;
`;
const Image3 = styled.div`
  ${ImageStyle}
  background-position: 0px 1200%;
`;

const Title = styled.h3`
  font-size: 30px;
  color: #3f444a;
  font-weight: 600;
  margin: 30px 0 25px 0;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #5c6873;
  font-weight: 300;
  margin: 0 0 10px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const Feature1 = () => {
  return (
    <FeaturesContainer>
      {featureData1.map((feature, index) => {
        const ImageComponent =
          index === 0 ? Image1 : index === 1 ? Image2 : Image3;

          const delay = index * 200000;

        return (
          <FeatureCard key={index} data-aos="fade-up-right" data-aos-delay={`${delay}ms`}>
            <ImageComponent />
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
          </FeatureCard>
        );
      })}
    </FeaturesContainer>
  );
};

export default Feature1;
