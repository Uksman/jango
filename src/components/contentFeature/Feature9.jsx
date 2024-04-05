//NEWSLETTER SECTION;

import React from "react";
import styled from "styled-components";

// Define your styled components with responsive styles
const ContentBox = styled.div`
  background-color: #2f353b;
  padding: 30px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
  padding: 10px;

  @media (max-width: 768px) {
    flex: 100%;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 10px;
  margin: 10px 0;
`;

const BodyText = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  color: #6a7887;
`;

const InputGroup = styled.div`
  display: table;
    border-collapse: separate;
    position: relative;
    padding-top: 30px;
`;

const Input = styled.input`
  /* flex: 1;
  padding: 10px;
  font-size: 16px;
  margin-right: 10px; */

    color: #6f7b89;
    font-size: 17px;
    font-weight: 300;
    border-radius: 0;
    box-shadow: none;
    border-color: #41464c;
    background: transparent;
    padding: 8px 16px;
    display: table-cell;
    height: 46px;
    line-height: 1.33333;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    outline: none;
    border: 1px solid #c2cad8;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;

    

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  background-color: #32c5d2;
  color: white;
  border: none;
  cursor: pointer;
`;

// Define your React component
const SubscribeForm = () => {
  return (
    <ContentBox>
      <Container>
        <Row>
          <Column>
            <Title>Subscribe to our newsletter</Title>
            <BodyText>
              Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam
              nonummy nibh euismod
            </BodyText>
          </Column>
          <Column>
            <form action="#">
              <InputGroup>
                <Input type="text" placeholder="Your Email Here" />
                <SubmitButton type="submit">SUBSCRIBE</SubmitButton>
              </InputGroup>
            </form>
          </Column>
        </Row>
      </Container>
    </ContentBox>
  );
};

export default SubscribeForm;
