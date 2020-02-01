import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import qs from 'query-string';
import { MOVIES } from 'actions/Backend';
import MoviesList from 'components/movies/MoviesList';
import MovieWrapper from 'components/movie/MovieWrapper';
import NoneSelected from 'components/movie/NoneSelected';

const MoviesWrapper = ({ area, location, match }) => {
	const [movies, setMovies] = useState([]);
	const [showing, setShowing] = useState([]);

	useEffect(() => {
		axios.get(MOVIES)
			.then(res => setMovies(res.data));
	}, []);

	useEffect(() => {
		const params = qs.parse(location.search);
		if ( movies.length > 0 ) {
			if ( !params?.q ) {
				setShowing(movies);
			}
			else {
				setShowing(movies.filter(movie => movie.title.toLowerCase().includes(params.q.toLocaleLowerCase())));
			}
		}
	}, [movies, location.search]);

	return (
		<>
			<MoviesList
				area={area}
				movies={showing}
				hasSelected={!match.isExact}
			/>
			<Route exact path="/" render={() => <NoneSelected area="right"/>} />
			<Route path="/:id" render={props => <MovieWrapper area="right" {...props} />} />
		</>
	)
};

MoviesWrapper.propTypes = {
	area: PropTypes.string,
	location: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
};

export default MoviesWrapper;