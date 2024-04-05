import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { FaBars } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { IoSearchOutline, IoClose } from "react-icons/io5";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  padding: 3rem 5rem;
  align-items: center;
  justify-content: space-between;
  z-index: 300;
  position: fixed;
  width: 100%;
  background: white;
`;

const NavLink = css`
  color: #5c6873;
  font-weight: 600;
  font-size: 17px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;
const Hover = css`
  &:hover {
    color: #32c5d2;
  }
`;
const Logo = styled(Link)`
  ${NavLink}
  margin-right: 120px;
  font-size: 30px;
`;

const NavIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: 3.7rem;
`;

const Menubar = styled(FaBars)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  ${Hover}
`;

const NavMenu = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  color: #3a3f45;
  font-size: 15px;
  position: relative;
  ${Hover}
`;

const MenuItem = styled.div`
  position: relative;
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Hover}
`;

const NavSearch = styled(IoSearchOutline)`
  display: flex;
  align-items: center;
  color: black;
  font-size: 18px;
  justify-content: center;
  margin-right: 3rem;
  margin-left: 1rem;
  ${Hover}
`;

const Carticon = styled(SlHandbag)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 20px;
`;

const SpanNum = styled.span`
  margin-left: -8px;
  position: relative;
  top: -0.5px;
  display: inline-block;
  border-radius: 20px;
  text-align: center;
  padding: 3px 0;
  height: 25px;
  font-size: 15px;
  width: 25px;
  background-color: #32c5d2;
  color: #ffffff;
  vertical-align: middle;
`;
const SearchBox = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border: 0;
  color: #69727c;
  background: transparent;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;

const CloseButton = styled(IoClose)`
  position: absolute;
  color: #828b96;
  top: 30px;
  right: 50px;
  font-size: 36px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  cursor: pointer;
`;

export default function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
  };

  return (
    <Nav>
      {isSearchVisible ? (
        <SearchBox isVisible={isSearchVisible}>
          <CloseButton onClick={closeSearch} />
          <input
            type="text"
            placeholder="Type to Search..."
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "0",
              outline: "none",
              fontSize: "22px",
              border: "none",
              fontWeight: "400"
            }}
          />
        </SearchBox>
      ) : (
        <>
          <Logo to="/">JANGO</Logo>
          <NavIcons>
            <NavMenu>
              {menuData.map((item, index) => (
                <MenuItem key={item.title || index}>
                  <NavMenuLinks to={item.link}>{item.title}</NavMenuLinks>
                </MenuItem>
              ))}
            </NavMenu>
            <NavSearch onClick={toggleSearch} aria-label="Search" />
            <Cart aria-label="Cart">
              <Carticon />
              <SpanNum>2</SpanNum>
            </Cart>
            <Menubar aria-label="Menu" />
          </NavIcons>
        </>
      )}
    </Nav>
  );
}
