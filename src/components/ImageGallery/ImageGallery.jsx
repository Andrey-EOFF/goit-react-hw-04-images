import { Component } from 'react';
import { ImageGalleryStyled, ImgeGalaryCent } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';
import fetchImages from 'services/getImages';

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevName = prevProps.searchImg;
    const nextName = this.props.searchImg;

    if (prevName !== nextName) {
      this.setState({ status: 'pending', images: [], page: 1 });

      fetchImages(nextName, 1)
        .then(data => this.setState({ images: data.hits, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  };

  loadMore = () => {
    const { searchImg } = this.props;
    const { page } = this.state;
    const nextPage = page + 1;

    this.setState({ status: 'resolved' });

    fetchImages(searchImg, nextPage)
      .then(data =>
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          status: 'resolved',
          page: nextPage,
        }))
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { images, status } = this.state;
    const { searchImg } = this.props;

    if (status === 'idle') {
      return null;
    }

    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h2>Изображений на тему {searchImg} нет!</h2>;
    }
    if (status === 'resolved') {
      return (
        <ImgeGalaryCent>
          <ImageGalleryStyled>
            {images.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
          </ImageGalleryStyled>
          <Button onClick={this.loadMore} />
        </ImgeGalaryCent>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchImg: PropTypes.string.isRequired,
};

export default ImageGallery;
