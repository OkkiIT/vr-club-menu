import styled from 'styled-components';

export const LinkButtonContainer = styled.div`
  position: absolute;
  width: fit-content;
  top: 20px;
  left: 20px;
`;

export const GameCardContainer = styled.div`
  text-indent: 20px;
  gap: 10px;
  width: 80%;
  max-height: 90%;
  overflow-y: auto;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 30px 10px;
`;

export const GameCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameNameContainer = styled.div`
  text-align: center;
  width: 100%;
  text-wrap: normal;
  text-overflow: clip;
  overflow-wrap: anywhere;
  font-size: 20px;
  font-weight: 600;
`

export const GameDescription = styled.span`
  overflow-wrap: break-word;
  padding: 0 50px;
`

export const PlayerContainer = styled.div`
  width: 700px;
  align-self: center;
  margin-right: 5px;
`