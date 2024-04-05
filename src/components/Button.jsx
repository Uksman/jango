
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    background: ${({primary})=>(primary ? "#32c5d2": "#CD853f")};
    border: none;
    outline: none;
    white-space: nowrap;
    max-width: 200px;
    min-width: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: ${({big})=>(big? "16px 40px": " 14px 24px")};
    color: ${({primary})=>(primary? "#ffff": "#000d1a")};
    font-size: ${({big})=>(big? "20px":"14px")};
    &:hover{
        background-color: aliceblue;
        color: black;
    }

    
`