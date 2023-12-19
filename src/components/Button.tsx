import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  z-index: 1;

  position: relative;
  
  &:hover {
    &::before{
      height: 100%;
      width: 100%;
    }
  }
  &::before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${Theme.colors.accent};
    
    position:absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
  }
`