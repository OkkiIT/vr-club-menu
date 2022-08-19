import React, { useState } from 'react';
import { HeaderContainer, EmptyDiv, Logo, SearchInput, SearchInputContainer } from './styled';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useGetAllGamesQuery } from '../../store/api-slices/games-slice';
import { OptionProps, components } from 'react-select';

const Header = () => {
  const { data } = useGetAllGamesQuery({});

  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const options =
    data &&
    data.map((item: any) => {
      return {
        ...item,
        value: item.name,
        label: item.name,
      };
    });
  console.log(options);

  const Option = (props: OptionProps<any>) => {
    console.log(props);
    return (
      <Link to={`/${props.data.activity}/${props.data.type}/${props.data.id}`}>
        <components.Option {...props} />
      </Link>
    );
  };
  return (
    <HeaderContainer>
      <EmptyDiv />
      <Link to={'/'}>
        <Logo>Virtual Club</Logo>
      </Link>
      <Select
        components={{ Option }}
        styles={{
          container: (styles) => ({ ...styles, flex: '0.3' }),
          option: (styles) => ({ ...styles, textDecoration: 'none', color: 'hsl(0, 0%, 20%)' }),
        }}
        placeholder="Введите название игры..."
        isSearchable
        value={selectedValue}
        options={options}
        inputValue={inputValue}
        onInputChange={(e) => {
          setInputValue(e);
        }}
        openMenuOnFocus={true}
        openMenuOnClick
      />
    </HeaderContainer>
  );
};

export default Header;
