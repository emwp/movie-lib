import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTitles } from '../../store/actions/actions';

const Movies = ({ getTitles, titles }) => {
  useEffect(() => {
    getTitles();
  }, []);

  let showMovies = titles.map(title => (
    <div key={title.id}>
      <h3>{title.title}</h3>
      <p>Release Date: {new Date(title.release_date).toLocaleDateString('pt-BR')}</p>
    </div>
  ));

  return <React.Fragment>{showMovies}</React.Fragment>;
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
