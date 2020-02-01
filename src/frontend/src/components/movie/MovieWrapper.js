import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MOVIES } from 'actions/Backend';
import Movie from 'components/movie/Movie';

const MovieWrapper = ({ area, match }) => {
	const [movie, setMovie] = useState(undefined);

	useEffect(() => {
		if ( match.params.id ) {
			axios.get(`${MOVIES}/${match.params.id}`)
				.then(res => setMovie(res.data));
		}
	}, [match.params.id]);

	if ( !movie ) return null;
	return (
		<Movie
			area={area}
			title={movie.title}
			description={movie.description}
			director={movie.director}
		/>
	);
};

MovieWrapper.propTypes = {
	area: PropTypes.string,
	match: PropTypes.object.isRequired
};

export default MovieWrapper;