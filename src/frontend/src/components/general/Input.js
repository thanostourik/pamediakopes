import React from 'react';
import styled from 'styled-components';

const InputSd = styled.input`
	padding: .5rem;
	border: 2px solid ${props => props.theme.colors.border};
	border-radius: 5px;
	outline: 0;
	:focus {
		border: 2px solid ${props => props.theme.colors.borderFocused};
	}
`;

const Input = props => {
	return (
		<InputSd
			{...props}
		/>
	);
};

export default Input;