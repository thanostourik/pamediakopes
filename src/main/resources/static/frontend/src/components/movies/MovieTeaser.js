import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkSd = styled(NavLink)`
	padding: ${props => props.theme.paddings.small} ${props => props.theme.paddings.medium};
	display: flex;
	justify-content: space-between;
	color: ${props => props.theme.colors.main};
	text-decoration: none;
	border-bottom: 1px solid ${props => props.theme.colors.divider};
	outline: 0;
	:hover {
		background: ${props => props.theme.colors.hover};
	}
	&.${props => props.activeClassName} {
		background: ${props => props.theme.colors.selected};
	}
`;
const TitleSd = styled.span``;
const YearSd = styled.span``;

const MovieTeaser = ({ id, title, year }) => (
	<LinkSd to={{pathname: `/${id}`, search:window.location.search}} activeClassName="is-active">
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