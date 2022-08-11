import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Center = styled.div`
  position: relative;
`

export const StyledSvg = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 400;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
`
export const Button = styled.button`
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  transition: 1s ease-in-out;
  
  &:hover {
    transition: 1s ease-in-out;
    background: #4F95DA;
  }
  
  &:hover ${StyledSvg} {
    stroke-dashoffset: -480;
  }
`

export const StyledSpan = styled.span`
  color: white;
  font-weight: bold;
  font-size: 22px;
`
