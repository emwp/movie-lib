import React, { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTitles } from '../../store/actions/actions';

const Movies = ({ getTitles, titles, baseURL }) => {
  useEffect(() => {
    getTitles();
  }, []);

  const selectMovieHandler = id => {
    console.log(id);
  };

  let showMovies = titles.map(title => (
    <CarouselWrapper key={title.id}>
      <img
        src={baseURL + title.poster_path}
        alt={title.title}
        onClick={() => selectMovieHandler(title.id)}
      />
    </CarouselWrapper>
  ));

  return (
    <React.Fragment>
      <h2>Trending Movies</h2>
      <Carousel>{showMovies}</Carousel>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispacth => ({
  getTitles: () => dispacth(getTitles()),
});

const mapStateToProps = state => ({
  titles: state.movies.titles,
  baseURL: state.movies.baseURL,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movies);

// --- Styles --- //

const CarouselWrapper = styled.div`
  img {
    cursor: pointer;
  }
`;
