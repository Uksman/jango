import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { Button } from "./Button";

const HeroSection = styled.section`
 height: 100vh;
 max-height: 1100px;
 position: relative;
 overflow: hidden;
`;

const HeroWrapper = styled.div`
 width: 100%;
 height: 100%;
 align-items: center;
 display: flex;
 justify-content: center;
 color: aliceblue;
 overflow: hidden;
 position: relative;
`;

const HeroSlide = styled.div`
 z-index: 1;
 width: 100%;
 height: 100%;
`;

const HeroImage = styled.img`
 position: absolute;
 top: 0;
 left: 0;
 height: 91vh;
 width: 100vw;
 object-fit: cover;
`;

const HeroContent = styled.div`
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 z-index: 10;
 max-width: 1600px;
 color: white;
 word-break: break-word; 

 h1 {
    font-size: clamp(1rem, 8vw, 3rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1.2; 
    max-height: 2.4em; 
    overflow: hidden; 
    display: -webkit-box; 
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
 }

 @media (max-width: 768px) {
    h1 {
      font-size: clamp(1rem, 5vw, 2rem);
      text-align: center;
    }
 }
`;

const HeroSlider = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 100%;
 align-items: center;
 justify-content: center;
 display: flex;

 /* &::before {
    content: "";
    position: absolute;
    z-index: 2;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    left: 50%;
    bottom: 50%;
    transition: all 8s ease;
    transform: translate(-50%, -50%);
    opacity: 1;
    overflow: hidden;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.6)
    );
 }  */
`;

const arrowbtn = css`
 position: absolute;
 width: 55px;
 height: 55px;
 padding: 10px;
 cursor: pointer;
 border-radius: 50%;
 border: 1px solid #32C5D2;
 user-select: none;
 transition: 0.3s;
`;

const SliderButton = styled.div`
 position: absolute;
 top: 50%;
 display: flex;
 z-index: 100;
 width: 100%;
 justify-content: space-between;
 padding: 0 2rem;

 @media (max-width: 768px) {
    padding: 0 1rem;
 }
`;

const PrevBtn = styled(FcPrevious)`
 ${arrowbtn}
 left: 0;
 transform: translateY(-50%);
`;

const NxtBtn = styled(FcNext)`
 ${arrowbtn}
 right: 0;
 transform: translateY(-50%);
`;

const Hero = ({ slides }) => {
 const [current, setCurrent] = useState(0);
 const length = slides.length;
 const timeout = useRef(null);

 useEffect(() => {
    const nxtslide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nxtslide, 7000);

    return function() {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
 }, [current, length]);

 const nxtSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
 };

 const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
 };

 if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
 }

 return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                 <HeroImage src={slide.image} alt={slide.alt} />
                 <HeroContent>
                    <h1>{slide.title}</h1>
                    <Button to={slide.path} primary="true">
                      {slide.label}
                    </Button>
                 </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButton>
          <PrevBtn onClick={prevSlide} />
          <NxtBtn onClick={nxtSlide} />
        </SliderButton>
      </HeroWrapper>
    </HeroSection>
 );
};

export default Hero;
