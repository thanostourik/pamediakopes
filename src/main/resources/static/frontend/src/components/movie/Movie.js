import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mediaQueries from 'utils/MediaQueries';
import { H2, Span, Paragraph } from 'components/general/Typography';

import closeImg from "img/close.png";

const MovieSd = styled.div`
	position: relative;
	padding: ${props => props.theme.paddings.large};
	${mediaQueries.desktop`
		grid-area: ${props => props.area ?? ''};
		padding: ${props => props.theme.paddings.large};
	`}
`;
const CloseSd = styled(Link)`
	display: inline-block;
    position: absolute;
    top: 2.2em;
    right: 2rem;
    width: 25px;
    outline: 0;
`;
const CloseImgSd = styled.img`
	width: 100%;
	height: auto;
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
		<CloseSd to={{pathname: "/", search: window.location.search}}>
			<CloseImgSd src={closeImg} alt="close" />
		</CloseSd>
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