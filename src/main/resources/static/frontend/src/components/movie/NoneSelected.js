import React from 'react';
import styled from 'styled-components';
import mediaQueries from 'utils/MediaQueries';

const NoneSelectedSd = styled.div`
	${mediaQueries.desktop`
		height: 350px;
		display: flex;
		align-items: center;
    	justify-content: center;
		grid-area: ${props => props.area ?? ''};
	`}
`;
const NoneSelectedLabelSd = styled.span`
	font-size: 2rem;
`;

const NoneSelected = ({ area }) => (
	<NoneSelectedSd area={area}>
		<NoneSelectedLabelSd>No movie selected!</NoneSelectedLabelSd>
	</NoneSelectedSd>
);

export default NoneSelected;