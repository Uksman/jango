// WHAT WE CAN DO SECTION

import styled from "styled-components";
import features from "../../data/FeatureData7";
import {
  FaRocket,
  FaUsers,
  FaShoppingBasket,
  FaLightbulb,
  FaChartPie,
  FaTrophy,
} from "react-icons/fa";
import bg87 from "../../assets/backgrounds/bg-87.jpg";

const ContentBox = styled.div`
  background-image: url(${bg87});
  background-size: cover;
  background-attachment: fixed;
    background-position: center center;
    background-color: transparent;
    min-height: 100%;
  padding: 60px 0;
  `;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  p{
    font-size: 17px;
    font-weight: 400;
    color: #5c6873;
    margin: 30px 0;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-weight: 600 !important;
  font-size: 30px;
  color: #3f444a;
  margin: 0 0 30px 0;
  text-transform: uppercase;

`;

const Line = styled.div`
  width: 30px;
    height: 3px;
    background-color: #32c5d2;
    margin: 0 auto 30px auto;
`;

const Card = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 25px;
`;

const GridContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 20px;
 margin-top: 20px;
`;

const Icon = styled.i`
  background-color: #fff;
  margin-right: 10px;
  width: 54px;
    height: 54px;
    font-size: 27px;
    border-radius: 27px;
    text-align: center;
    padding: 14px;
    position: absolute;
    z-index: 5;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Feature7 = () => {
  return (
    <ContentBox>
      <Container>
        <Title>What we can do</Title>
        <Line />
        <p style={{ textAlign: "center" }}>Lorem ipsum dolor consetuer elit</p>
        <GridContainer>
          {features.map((feature, index) => {
            let IconComponent;
            switch (feature.icon) {
              case 'icon-rocket':
                IconComponent = FaRocket;
                break;
              case 'icon-user':
                IconComponent = FaUsers;
                break;
              case 'icon-basket':
                IconComponent = FaShoppingBasket;
                break;
              case 'icon-bulb':
                IconComponent = FaLightbulb;
                break;
              case 'icon-pie-chart':
                IconComponent = FaChartPie;
                break;
              case 'icon-trophy':
                IconComponent = FaTrophy;
                break;
              default:
                IconComponent = FaRocket;
            }

            return (
              <Card key={index}>
                <IconComponent size={27} color="#5c6873" backgroundColor = "#fff" borderRadius = "27px" />
                <Content>
                 <h3 style={{ textTransform: 'uppercase', fontWeight: 'bold', color: "#32c5d2" }}>{feature.title}</h3>
                 <p>{feature.description}</p>
                </Content>
              </Card>
            );
          })}
        </GridContainer>
      </Container>
    </ContentBox>
  );
};

export default Feature7;
