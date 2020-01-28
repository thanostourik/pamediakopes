import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import mediaQueries from 'utils/MediaQueries';
import { H2, Span, Paragraph } from 'components/general/Typography';

const MovieSd = styled.div`
	${mediaQueries.desktop`
		grid-area: ${props => props.area ?? ''};
		padding: ${props => props.theme.paddings.large};
	`}
`;
const TitleSd = styled(H2)`
	margin-bottom: ${props => props.theme.margins.small};
`;
const DescriptionSd = styled(Paragraph)`
	margin-bottom: ${props => props.theme.margins.small};
`;
const DirectorSd = styled(Span)`
	color: ${props => props.theme.colors.secondary};
`;

const Movie = ({ area, title, description, director }) => (
	<MovieSd area={area}>
		<TitleSd>{title}</TitleSd>
		<DescriptionSd>{description}</DescriptionSd>
		<DirectorSd>{`Directed by: ${director}`}</DirectorSd>
	</MovieSd>
);

Movie.propTypes = {
	area: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	director: PropTypes.string.isRequired
};

export default Movie;