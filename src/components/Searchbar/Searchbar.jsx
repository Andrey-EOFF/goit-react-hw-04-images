import { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import {
  SearchbarForm,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLbl,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchImg, setSearchImg] = useState('');

  const handleNameChange = evt => {
    setSearchImg(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchImg.trim() === '') {
      toast('Введите тему изображений!');
      return;
    }
    onSubmit(searchImg);
    setSearchImg('');
  };

  return (
    <SearchbarForm>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <RiSearch2Line />
          <SearchFormBtnLbl>Search</SearchFormBtnLbl>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleNameChange}
          value={searchImg}
        />
      </SearchForm>
    </SearchbarForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
