import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none  ;
  border-radius: 50%;
  cursor: pointer;
  opacity: .5;
  transition: 300ms;
  font-weight: 700;
  font-size: 20px;
  
  &:hover{
    opacity: 1;
  }
`