import { useState, useEffect } from 'react';
import { ImageGalleryStyled, ImgeGalaryCent } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';
import fetchImages from 'services/getImages';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const ImageGallery = ({ searchImg }) => {
  const [images, setImages] = useState([]);

  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchInitialImages = () => {
      if (!searchImg) return;
      setStatus(Status.PENDING);
      setImages([]);
      setPage(1);

      fetchImages(searchImg, 1)
        .then(data => {
          setImages(data.hits);
          setStatus(Status.RESOLVED);
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    };

    fetchInitialImages();
  }, [searchImg]);

  const loadMore = () => {
    setStatus(Status.RESOLVED);

    fetchImages(searchImg, page + 1)
      .then(data => {
        setImages(prevImages => [...prevImages, ...data.hits]);
        setStatus(Status.RESOLVED);
        setPage(prevPage => prevPage + 1);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  if (status === Status.IDLE) {
    return null;
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }
  if (status === Status.REJECTED) {
    return <h2>Изображений на тему {searchImg} нет!</h2>;
  }
  if (status === Status.RESOLVED) {
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
        <Button onClick={loadMore} />
      </ImgeGalaryCent>
    );
  }
};

ImageGallery.propTypes = {
  searchImg: PropTypes.string.isRequired,
};

export default ImageGallery;











