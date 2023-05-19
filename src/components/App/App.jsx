import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppStyled from './App.styled';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import PropTypes from 'prop-types';

const App = () => {
  const [searchImg, setSearchImg] = useState('');

  return (
    <AppStyled>
      <Searchbar onSubmit={setSearchImg} />
      <ImageGallery searchImg={searchImg} />
      <ToastContainer autoClose={3000} />
    </AppStyled>
  );
};

App.propTypes = {
  searchImg: PropTypes.string,
};

export default App;
