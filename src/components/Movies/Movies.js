import React from 'react';
import { connect } from 'react-redux';
import { getTitles } from '../../store/actions/actions';

const Movies = ({ getTitles, titles }) => {
  let showMovies = titles.map(title => (
    <div key={title.id}>
      <h1>Movie: {title.name}</h1>
      <p>Year: {title.year}</p>
      <p>Genre: {title.genre}</p>
    </div>
  ));

  const getTitlesHandler = () => {
    getTitles();
  };

  return (
    <React.Fragment>
      {showMovies}
      <button onClick={getTitlesHandler}>Get Titles</button>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispacth => ({
  getTitles: () => dispacth(getTitles()),
});

const mapStateToProps = state => ({
  titles: state.movies.titles,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movies);
