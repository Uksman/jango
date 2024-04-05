import React from "react";
import styled from "styled-components";
import img1 from "../../assets/backgrounds/bg-51.jpg";
import img2 from "../../assets/stock3/6.jpg";

const ContentBox = styled.div`
 color: #5c6873;
 font-family: "Roboto Condensed", sans-serif;
 font-weight: 300;
 font-size: 17px;
 background-image: url(${img1});
 padding: 60px 0;
 background-attachment: fixed;
 background-position: center center;
 background-size: cover;
 background-color: transparent;
 min-height: 100%;
`;

const Container = styled.div`
 max-width: 1200px;
 margin: 0 auto;
`;

const CardContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 30px;
 justify-content: space-between;

 @media (max-width: 768px) {
    flex-direction: column;
 }
`;

const Card = styled.div`
 padding: 80px;
 color: white;
 background-color: rgba(255, 255, 255, 0.1);
 text-align: ${(props) => (props.right ? "right" : "left")};
 flex: 1 1 calc(50% - 15px);
 max-width: calc(50% - 15px);

 @media (max-width: 768px) {
    padding: 40px;
    flex: 1 1 100%;
    max-width: 100%;
 }
`;

const CardImage = styled(Card)`
background-image: url(${(props) => props.image});
 background-size: cover; 
 background-position: center center; 
 background-repeat: no-repeat;

 @media (max-width: 768px) {
    padding: 40px;
    flex: 1 1 100%;
    max-width: 100%;
    background-size: cover;
    background-position: center;
 }
`;

const CardTitle = styled.h3`
 font-size: 40px;
 font-weight: 600;
 text-transform: uppercase;
 margin: 0 0 20px 0;

 @media (max-width: 768px) {
    font-size: 32px;
 }
`;

const CardText = styled.p`
 font-size: 18px;

 @media (max-width: 768px) {
    font-size: 16px;
 }
`;

const Feature6 = () => {
 return (
    <ContentBox>
      <Container>
        <CardContainer>
          <Card right>
            <CardTitle>Great Customer Care</CardTitle>
            <CardText>
              Lorem ipsum euismod dolor amet consetuer adipiscing elit sed diam
              nonummy euismod dolore
            </CardText>
          </Card>
          <Card>
            <CardTitle>Awesome Features Pack</CardTitle>
            <CardText>
              Lorem ipsum euismod dolor amet consetuer adipiscing elit sed diam
              nonummy euismod dolore
            </CardText>
          </Card>
          <Card right>
            <CardTitle>Unlimited Themed Layouts</CardTitle>
            <CardText>
              Lorem ipsum euismod dolor amet consetuer adipiscing elit sed diam
              nonummy euismod dolore
            </CardText>
          </Card>
          <CardImage image={img2} />
        </CardContainer>
      </Container>
    </ContentBox>
 );
};

export default Feature6;
