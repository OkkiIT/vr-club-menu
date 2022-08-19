import styled from 'styled-components';

export const ImageContainer = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
  flex: 1;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  transition: 400ms;
`

export const GameCardWrapper = styled.div`
  height: 330px;
  width: 300px;
  transition: 400ms;
  display: flex;
  flex-direction: column;
  
  &:hover {
    ${ImageContainer}{
      height: 310px;
    }
    width: 310px;
    height: 340px;
  }
  
`;
export const GameCardName = styled.span`
  width: 100%;
  height:100%;
  text-overflow: ellipsis;
  overflow-x: hidden;
  display: inline-block;
  text-align: center;
  position: relative;
  top: 3px;
`

export const GameCardNameContainer = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-overflow: ellipsis;
  padding: 0 10px;
`