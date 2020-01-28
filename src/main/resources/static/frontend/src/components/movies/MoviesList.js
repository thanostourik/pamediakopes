import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import mediaQueries from 'utils/MediaQueries';
import MovieTeaser from 'components/movies/MovieTeaser';

const MoviesListSd = styled.div`
	${mediaQueries.desktop`
		grid-area: ${props => props.area ?? ''};
		border-right: 2px solid ${props => props.theme.colors.divider};
	`}
`;

const MoviesList = ({ movies, area }) => (
	<MoviesListSd area={area}>
		{
			movies.map(movie => (
				<MovieTeaser
					key={movie.id}
					{...movie}
				/>
			))
		}
	</MoviesListSd>
);

MoviesList.propTypes = {
	movies: PropTypes.array.isRequired
};

export default MoviesList;