import React, { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import { connect } from 'react-redux';
import { getTitles } from '../../store/actions/actions';

const Movies = ({ getTitles, titles, baseURL }) => {
  useEffect(() => {
    getTitles();
  }, []);

  let showMovies = titles.map(title => (
    <div key={title.id}>
      <img src={baseURL + title.poster_path} alt={title.title} />
    </div>
  ));

  return (
    <React.Fragment>
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
