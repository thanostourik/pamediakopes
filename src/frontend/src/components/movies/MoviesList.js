import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import mediaQueries from 'utils/MediaQueries';
import MovieTeaser from 'components/movies/MovieTeaser';

const MoviesListSd = styled.div`
	display: ${props => props.hasSelected ? 'none' : 'block'};
	${mediaQueries.desktop`
		display: block;
		grid-area: ${props => props.area ?? ''};
		border-right: 2px solid ${props => props.theme.colors.divider};
	`}
`;

const MoviesList = ({ movies, area, hasSelected }) => (
	<MoviesListSd area={area} hasSelected={hasSelected}>
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
	movies: PropTypes.array.isRequired,
	area: PropTypes.string,
	hasSelected: PropTypes.bool
};

export default MoviesList;