import React from 'react';
import { HeaderContainer,EmptyDiv,Logo, SearchInput,SearchInputContainer } from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <EmptyDiv/>
      <Logo>Virtual Club</Logo>
      <SearchInputContainer>
        <SearchInput/>
      </SearchInputContainer>
    </HeaderContainer>
  );
};

export default Header;