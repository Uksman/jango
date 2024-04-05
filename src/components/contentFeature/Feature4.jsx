// OUR PHOTOGRAPHY SECTION

import styled from 'styled-components';
import imgBg from "../../assets/backgrounds/bg-82.jpg"
import img1 from '../../assets/stock/13.jpg';
import img2 from '../../assets/stock/81.jpg';
import img3 from '../../assets/stock/63.jpg';
import img4 from '../../assets/stock/48.jpg';
import img5 from '../../assets/stock/33.jpg';
import img6 from '../../assets/stock4/36.jpg';


const ContentBox = styled.div`
 background-image: url(${imgBg});
 background-size: cover;
 background-position: center;
 padding: 60px 0;
 background-color: transparent;
 min-height: 100%;
`;

const Container = styled.div`
 max-width: 1200px;
 margin: 0 auto;
`;

const ContentTitle = styled.div`
 text-align: center;
 margin-bottom: 20px;
`;

const Title = styled.h3`
 font-size: 30px;
 font-weight: bold;
 color: white;
 text-transform: uppercase;
`;

const Line = styled.div`
 width: 100px;
 height: 2px;
 background-color: white;
 margin: 20px auto;
`;

const Gallery = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr; 
 grid-template-rows: auto auto auto;
 grid-gap: 20px;
 width: 100%;

 @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto auto;
 }
`;

const GalleryItem = styled.div`
 width: 100%;
 height: auto;
 position: relative;

 @media (max-width: 768px) {
    width: 100%;
 }
`;


const GalleryImage = styled.img`
 width: 100%;
 height: auto;
 max-height: 400px; // Adjust this value as needed
 object-fit: cover;
`;

const Overlay = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
 display: flex;
 justify-content: center;
 align-items: center;
 opacity: 0;
 transition: opacity 0.3s ease;

 &:hover {
    opacity: 1;
 }
`;

const OverlayIcon = styled.i`
 font-size: 30px;
 color: white;
`;

const Feature4 = () => {
 return (
    <ContentBox>
      <Container>
        <ContentTitle>
          <Title>Our Photography</Title>
          <Line />
        </ContentTitle>
        <Gallery>
          <GalleryItem data-aos="zoom-in">
            <GalleryImage src={img1} alt="The River" />
            <Overlay>
              <OverlayIcon className="fa fa-plus" />
            </Overlay>
          </GalleryItem>
          <GalleryItem data-aos="zoom-in">
            <GalleryImage src={img2} alt="Speedy City" />
            <Overlay>
              <OverlayIcon className="fa fa-plus" />
            </Overlay>
          </GalleryItem>
          <GalleryItem data-aos="zoom-in">
            <GalleryImage src={img3} alt="The Workstation" />
            <Overlay>
              <OverlayIcon className="fa fa-plus" />
            </Overlay>
          </GalleryItem>
          <GalleryItem data-aos="zoom-in">
            <GalleryImage src={img4} alt="Exploring the Ice" />
            <Overlay>
              <OverlayIcon className="fa fa-plus" />
            </Overlay>
          </GalleryItem>
          <GalleryItem data-aos="zoom-in">
            <GalleryImage src={img5} alt="Music is the way of life" />
            <Overlay>
              <OverlayIcon className="fa fa-plus" />
            </Overlay>
          </GalleryItem>
          <GalleryItem data-aos="zoom-in">
            <GalleryImage src={img6} alt="Reflection" />
            <Overlay>
              <OverlayIcon className="fa fa-plus" />
            </Overlay>
          </GalleryItem>
        </Gallery>
      </Container>
    </ContentBox>
 );
};

export default Feature4;