import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mediaQueries from 'utils/MediaQueries';
import Search from 'components/Search';

const HeaderSd = styled.header`
	display: grid;
	grid-template-columns: 114px auto;
	grid-gap: ${props => props.theme.margins.small};
	${mediaQueries.desktop`
		padding: ${props => props.theme.paddings.small} ${props => props.theme.paddings.medium};
		grid-area: ${props => props.area ?? ''};
		border-bottom: 2px solid ${props => props.theme.colors.divider};
		background: ${props => props.theme.colors.headerBg};
	`}
`;
const AddButtonSd = styled(Link)`
	padding: .5rem 1rem;
	text-decoration: none;
	color: ${props => props.theme.colors.secondary};
	background: ${props => props.theme.colors.button};
	border: 2px solid ${props => props.theme.colors.border};
	border-radius: 5px;
	:active {
		border: 2px solid ${props => props.theme.colors.borderFocused};
	}
`;

const Header = ({ area }) => (
	<HeaderSd area={area}>
		<AddButtonSd to="/movies/new">Add Movie</AddButtonSd>
		<Search/>
	</HeaderSd>
);

Header.propTypes = {
	area: PropTypes.string
};

export default Header;