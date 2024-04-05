// PURCHASE A PACKAGE SECTION

import React from "react";
import styled from "styled-components";
import {PRICINGDATA} from "../../data/FeatureData13";

const PricingContainer = styled.div`
 background-color: #f7f7f7;
 padding: 80px 30px;
 .container {
    display: none;
    padding-left: 50px;
    margin: 30px;
    background-color: red;
    padding-right: 50px;
 }
 @media (max-width: 991px) {
    padding: 40px 20px;
    .container {
      transform: scale(1);
    }

 }
`;

const PricingTitle = styled.div`

 text-align: center;
 margin-bottom: 40px;
 .c-line-center {
    width: 30px;
    height: 3px;
    background-color: #32c5d2;
    margin: 0 auto 30px auto;
 }
 h3 {
    font-size: 30px;
    color: #3f444a;
    margin: 0 0 30px 0;
    text-transform: uppercase;
 }
`;

const TileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
 justify-content: center;
 align-items: center;
 gap: 20px;
padding: 0 110px;
margin-top: 70px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Tile = styled.div`
 background-color: white;
 height: 100%;
 border-radius: 0;
 align-items: center;
 justify-content: center;
 text-align: center;
 transition: transform 0.3s ease-in-out;
 max-width: 300px;
  padding: 30px;

  @media (max-width: 991px) {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding-left: 350px;
    padding-right: 350px;
  }
`;

const SecondTile = styled(Tile)`
    transform: scale(1.2) !important;
    @media (max-width: 991px) {
      transform: scale(1) !important;
  }
`;

const Label = styled.div`
 background-color: #32c5d2;
 color: #fff;
 padding: 4px 10px 2px 10px;
 font-weight: bold;
 font-size: 14px;
 text-transform: uppercase;
 text-align: center;
 display: inline-block;
 margin: 30px 0 30px 0;
`;

const Price = styled.p`
 font-size: 60px;
 font-weight: bold;
 margin-bottom: 20px;
 color: #3f444a;
 sup {
    line-height: 0;
    position: relative;
    font-size: 28px;
    font-weight: normal;
    vertical-align: super;
    top: -.5em;
    color: #3f444a;
 }
 @media (max-width: 768px) {
    font-size: 48px;
 }
 @media (max-width: 480px) {
    font-size: 36px;
 }
`;

const Feature = styled.p`
 font-size: 16px;
 color: #666;
 margin-bottom: 10px;
 @media (max-width: 991px){
  width: 100px;
 }
`;

const PurchaseButton = styled.button`
 background-color: none;
 border: 2px solid #7f8c97;
 font-size: 16px;
 text-transform: uppercase;
 font-weight: bold;
 outline: none;
 margin-top: 40px;
 margin-bottom: 50px;
 padding: 10px 20px 8px 20px;
 color: #7f8c97;
 background: none;
 border-radius: 0;
 cursor: pointer;
 transition: background-color 0.2s ease-in-out;
 &:hover {
    background-color: #7f8c97;
    color: #ffff;
 }
`;

const ErrorMessage = styled.div`
 background-color: #f8d7da;
 border: 1px solid #f5c6cb;
 border-radius: 4px;
 padding: 20px;
 margin: 20px 0;
 color: #721c24;
 text-align: center;
 font-size: 18px;
 font-weight: bold;
`;

const Feature13 = () => {
  // Function to check if the PRICING data is in the expected format
  const isValidPricingData = (data) => {
    if (!Array.isArray(data)) {
        console.error('PRICING data is not an array');
        return false;
    }
    for (let item of data) {
        if (!item.hasOwnProperty('id') || !item.hasOwnProperty('label') || !item.hasOwnProperty('price') || !item.hasOwnProperty('btn')) {
            console.error('PRICING data item is missing required properties:', item);
            return false;
        }
    }
    return true;
};
 
  // Check if PRICING data is valid
  if (!isValidPricingData(PRICINGDATA)) {
     // Render a fallback UI or message if the data is not valid
     return <ErrorMessage>Error: Invalid pricing data. Please check the data source.</ErrorMessage>;
    }
 
  const renderTile = (tile, index) => {
     const TileComponent = index === 1 ? SecondTile : Tile;
     return (
       <TileComponent data-aos="fade-right" key={tile.id || index} className={`c-tile ${index % 3 === 0 ? 'c-tile-small' : ''}`}>
         <Label className="c-theme-bg">{tile.label}</Label>
         <Price>
           {tile.price}
           <sup>$</sup>
         </Price>
         <Feature>{tile.p1}</Feature>
         <Feature>{tile.p2}</Feature>
         <Feature>{tile.p3}</Feature>
         <Feature>{tile.p4}</Feature>
         <PurchaseButton type="button">{tile.btn}</PurchaseButton>
       </TileComponent>
     );
  };
 
  return (
     <PricingContainer>
       <PricingTitle>
         <h3>Purchase a Package</h3>
         <div className="c-line-center"></div>
       </PricingTitle>
       <TileContainer>
         {PRICINGDATA.map(renderTile)}
       </TileContainer>
     </PricingContainer>
  );
 };
 
 export default Feature13;