// HAPPY CUSTOMER SECTION

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import sliderImages  from "../../data/FeatureData14";


const SliderContainer = styled.div`
 background-color: #fff;
 padding: 20px;
`;

const Title = styled.h3`
 text-align: center;
 font-size: 24px;
 font-weight: bold;
 text-transform: uppercase;
 margin-bottom: 20px;
`;

const Slider = styled.div`
 display: flex;
 overflow-x: auto;
 scroll-snap-type: x mandatory;
 -webkit-overflow-scrolling: touch;

 &::-webkit-scrollbar {
    display: none;
 }
`;

const Slide = styled.div`
 flex: 0 0 auto;
 width: 20%;
 scroll-snap-align: start;
 padding: 0 10px;
`;

const Image = styled.img`
 width: 100%;
 height: auto;
`;

const DotsContainer = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 20px;
`;

const Dot = styled.button`
 background-color: #bbb;
 border: none;
 border-radius: 50%;
 width: 10px;
 height: 10px;
 margin: 0 5px;
 cursor: pointer;

 &:focus {
    outline: none;
 }

 &.active {
    background-color: #717171;
 }
`;

const Feature14 = () => {
 const sliderRef = useRef(null);
 const [isDragging, setIsDragging] = useState(false);
 const [startPos, setStartPos] = useState(0);
 const [currentSlide, setCurrentSlide] = useState(0);

 useEffect(() => {
    const slider = sliderRef.current;
    let isRunning = true;
    let scrollLeft = 0;
    let slideWidth = slider.scrollWidth / sliderImages.length;

    const autoScroll = () => {
      if (isRunning) {
        scrollLeft += slideWidth;
        slider.scrollLeft = scrollLeft;
        if (scrollLeft >= slider.scrollWidth) {
          scrollLeft = 0;
        }
        setCurrentSlide(Math.round(scrollLeft / slideWidth));
      }
    };

    const scrollInterval = setInterval(autoScroll, 3000); // Adjust the interval as needed

    return () => {
      isRunning = false;
      clearInterval(scrollInterval);
    };
 }, []);

 const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
 };

 const handleMouseMove = (e) => {
    if (!isDragging) return;
    const slider = sliderRef.current;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;
    slider.scrollLeft += diff;
    setStartPos(currentPos);
 };

 const handleMouseUp = () => {
    setIsDragging(false);
 };

 const handleDotClick = (index) => {
    const slider = sliderRef.current;
    const slideWidth = slider.scrollWidth / sliderImages.length;
    slider.scrollLeft = index * slideWidth;
    setCurrentSlide(index);
 };

 return (
    <SliderContainer>
      <Title>Happy Customers</Title>
      <Slider
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {sliderImages.map((image, index) => (
          <Slide key={image.id}>
            <a href="#">
              <Image src={image.src} alt={image.alt} />
            </a>
          </Slide>
        ))}
      </Slider>
      <DotsContainer>
        {sliderImages.map((_, index) => (
          <Dot
            key={index}
            className={index === currentSlide ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
 );
};

export default Feature14;
