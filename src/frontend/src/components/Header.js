import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import mediaQueries from 'utils/MediaQueries';
import ButtonLink from 'components/general/ButtonLink';
import Search from 'components/Search';

const HeaderSd = styled.header`
	display: grid;
	grid-template-columns: 114px auto;
	padding: ${props => props.theme.paddings.small} ${props => props.theme.paddings.medium};
	grid-gap: ${props => props.theme.margins.small};
	background: ${props => props.theme.colors.headerBg};
	${mediaQueries.desktop`
		grid-area: ${props => props.area ?? ''};
		border-bottom: 2px solid ${props => props.theme.colors.divider};
	`}
`;

const Header = ({ area, history }) => (
	<HeaderSd area={area}>
		<ButtonLink to="/new">Add Movie</ButtonLink>
		<Search history={history} />
	</HeaderSd>
);

Header.propTypes = {
	area: PropTypes.string,
	history: PropTypes.object.isRequired
};

export default Header;