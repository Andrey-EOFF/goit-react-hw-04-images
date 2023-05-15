import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppStyled from './App.styled';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    searchImg: '',
  };

  handleFormSubmit = searchImg => {
    this.setState({ searchImg });
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchImg={this.state.searchImg} />
        <ToastContainer autoClose={3000} />
      </AppStyled>
    );
  }
}

App.propTypes = {
  searchImg: PropTypes.string,
};

export default App;
