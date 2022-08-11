import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const ButtonContainer = styled.div`
  
  & a {
    text-decoration: none;
  }
`;

export const AgeFilter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 170px;
  align-items: center;
`


export const ToggleLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 30px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
  
  &:active:after{
    width: 30px;
  }
  
  &:after{
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    height: 20px;
    width: 20px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`
export const ToggleInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  
  &:checked + ${ToggleLabel}{
    background: #bada55;
  }
  
  &:checked + ${ToggleLabel}:after{
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`

export const LabelForToggle = styled.h3`
`

export const GamesWrapper = styled.div`
  overflow-x: auto;
  flex: 1;
`