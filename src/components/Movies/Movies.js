import React from 'react';
import { connect } from 'react-redux';

const Movies = props => {
  let showMovies = props.titles.map(title => (
    <div key={title.id}>
      <h1>Movie: {title.name}</h1>
      <p>Year: {title.year}</p>
      <p>Genre: {title.genre}</p>
    </div>
  ));

  return <React.Fragment>{showMovies}</React.Fragment>;
};

const mapStateToProps = state => ({
  titles: state.movies.titles,
});

export default connect(mapStateToProps)(Movies);
