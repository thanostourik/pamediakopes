import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import mediaQueries from 'utils/MediaQueries';
import Header from 'components/Header';
import AddMovieWrapper from 'components/add/AddMovieWrapper';
import MoviesWrapper from 'components/movies/MoviesWrapper';

const AppSd = styled.div`
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
	const history = useHistory();
	return (
		<AppSd>
			<Header area="header" history={history} />
			<Switch>
				<Route path="/new" render={props => <AddMovieWrapper area="left" {...props} />} />
				<Route path="/" render={props => <MoviesWrapper area="left" {...props} />} />
			</Switch>
		</AppSd>
	);
}

export default App;
