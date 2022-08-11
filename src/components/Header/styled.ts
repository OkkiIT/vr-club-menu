import styled from 'styled-components';
import { headerHeight } from '../../consts/styles';

export const HeaderContainer = styled.header`
  display: flex;
  height: ${headerHeight};
  justify-content: space-between;
  align-items: center;
  //background-color: ${props=>props.theme.backgrounds.header};
  background: rgb(40,46,131);
  background: linear-gradient(90deg, rgba(40,46,131,1) 0%, rgba(64,94,184,1) 52%, rgba(40,46,131,1) 100%, rgba(1,57,66,1) 0139420%);
  //background: rgb(2,100,117);
  //background: linear-gradient(90deg, rgba(2,100,117,1) 0%, rgba(118,135,236,1) 100%, rgba(1,57,66,1) 0139420%);
`


export const Logo = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${props => props.theme.fontColor.header};
`

export const SearchInputContainer = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
`

export const SearchInput = styled.input`
  border: 1px solid red;
  flex: 0.3;
`

export const EmptyDiv = styled.div`
  flex: 0.3;
`