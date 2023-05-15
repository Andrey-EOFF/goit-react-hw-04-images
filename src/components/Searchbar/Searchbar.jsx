import { Component } from 'react';
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

class Searchbar extends Component {
  state = {
    searchImg: '',
  };

  handleNameChange = evt => {
    this.setState({ searchImg: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.searchImg.trim() === '') {
      toast('Введите тему изображений!');
      return;
    }
    this.props.onSubmit(this.state.searchImg);
    this.setState({ searchImg: '' });
  };

  render() {
    return (
      <SearchbarForm>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <RiSearch2Line />
            <SearchFormBtnLbl>Search</SearchFormBtnLbl>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.searchImg}
          />
        </SearchForm>
      </SearchbarForm>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
