import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { MOVIES } from 'actions/Backend';
import MoviesList from 'components/movies/MoviesList';
import MovieWrapper from 'components/movie/MovieWrapper';
import NoneSelected from 'components/movie/NoneSelected';

const MoviesWrapper = ({ area }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(MOVIES)
			.then(res => setMovies(res.data));
	}, []);

	return (
		<>
			<MoviesList
				area={area}
				movies={movies}
			/>
			<Route exact path="/" render={() => <NoneSelected area="right"/>} />
			<Route path="/:id" render={props => <MovieWrapper area="right" {...props} />} />
		</>
	)
};

MoviesWrapper.propTypes = {
	area: PropTypes.string
};

export default MoviesWrapper;