import styled from 'styled-components';

export const H2 = styled.h2`
	margin: 0;
	font-size: ${props => props.theme.sizes.h2};
`;

export const Paragraph = styled.p`
	margin: 0;
	color: ${props => props.theme.colors.main};
	font-size: ${props => props.theme.sizes.content};
	line-height: 1.6;
`;

export const Span = styled.span`
	color: ${props => props.theme.colors.main};
	font-size: ${props => props.theme.sizes.content};
`;