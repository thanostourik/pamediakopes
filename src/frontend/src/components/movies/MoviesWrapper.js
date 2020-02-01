import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import qs from 'query-string';
import { MOVIES } from 'actions/Backend';
import MoviesList from 'components/movies/MoviesList';
import MovieWrapper from 'components/movie/MovieWrapper';
import NoneSelected from 'components/movie/NoneSelected';

const MoviesWrapper = ({ area, history, match }) => {
	const [movies, setMovies] = useState([]);
	const [showing, setShowing] = useState([]);

	useEffect(() => {
		axios.get(MOVIES)
			.then(res => {
				if ( res.data?.length > 0 ) {
					setMovies(res.data);
				}
				else {
					history.push("/new");
				}
			});
	}, []);

	useEffect(() => {
		const params = qs.parse(history.location.search);
		if ( movies.length > 0 ) {
			if ( !params?.q ) {
				setShowing(movies);
			}
			else {
				setShowing(movies.filter(movie => movie.title.toLowerCase().includes(params.q.toLocaleLowerCase())));
			}
		}
	}, [movies, history.location.search]);

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
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
};

export default MoviesWrapper;