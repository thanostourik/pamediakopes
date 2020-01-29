import React from 'react';
import styled from 'styled-components';

const TextAreaSd = styled.textarea`
	padding: .5rem;
	border: 2px solid ${props => props.theme.colors.border};
	border-radius: 5px;
	outline: 0;
	:focus {
		border: 2px solid ${props => props.theme.colors.borderFocused};
	}
`;

const TextArea = props => {
	return (
		<TextAreaSd
			{...props}
		/>
	);
};

export default TextArea;