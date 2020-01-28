import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import mediaQueries from 'utils/MediaQueries';
import Header from 'components/Header';
import AddMovieWrapper from 'components/add/AddMovieWrapper';
import MoviesWrapper from 'components/movies/MoviesWrapper';
import MovieWrapper from 'components/movie/MovieWrapper';

const AppSd = styled.div`
	padding: 20px;
	${mediaQueries.desktop`
		width: 1200px;
		padding:0;
		margin: 0 auto;
		display: grid;
		grid-template-areas: "header header"
							 "left right";
		grid-template-columns: 1fr 1fr;
	`}
`;

function App() {
	let location = useLocation();
	return (
		<AppSd>
			<Header area="header"/>
			{
				location.pathname === '/movies/new' &&
				<AddMovieWrapper area="left"/>
			}
			{
				location.pathname !== '/movies/new' &&
				<>
					<MoviesWrapper area="left"/>
					<Route path="/movies/:id" render={props => <MovieWrapper {...props} area="right"/>} />
				</>
			}
		</AppSd>
	);
}

export default App;
