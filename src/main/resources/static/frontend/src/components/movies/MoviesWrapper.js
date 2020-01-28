import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MOVIES } from 'actions/Backend';
import MoviesList from 'components/movies/MoviesList';

const MoviesWrapper = ({ area }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(MOVIES)
			.then(res => setMovies(res.data));
	}, []);

	return (
		<MoviesList
			movies={movies}
			area={area}
		/>
	)
};

MoviesWrapper.propTypes = {
	area: PropTypes.string
};

export default MoviesWrapper;