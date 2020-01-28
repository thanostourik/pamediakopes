import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import mediaQueries from 'utils/MediaQueries';
import ButtonLink from 'components/general/ButtonLink';
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

const Header = ({ area }) => (
	<HeaderSd area={area}>
		<ButtonLink to="/new">Add Movie</ButtonLink>
		<Search/>
	</HeaderSd>
);

Header.propTypes = {
	area: PropTypes.string
};

export default Header;