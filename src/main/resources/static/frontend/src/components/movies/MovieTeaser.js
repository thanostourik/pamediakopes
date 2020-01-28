import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkSd = styled(Link)`
	padding: ${props => props.theme.paddings.small} ${props => props.theme.paddings.medium};
	display: flex;
	justify-content: space-between;
	color: ${props => props.theme.colors.main};
	text-decoration: none;
	border-bottom: 1px solid ${props => props.theme.colors.divider};
`;
const TitleSd = styled.span``;
const YearSd = styled.span``;

const MovieTeaser = ({ id, title, year }) => (
	<LinkSd to={`/${id}`}>
		<TitleSd>{title}</TitleSd>
		<YearSd>{year}</YearSd>
	</LinkSd>
);

MovieTeaser.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired
};

export default MovieTeaser;