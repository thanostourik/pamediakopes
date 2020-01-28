import React from 'react';
import styled from 'styled-components';
import Input from 'components/general/Input';

const InputFieldSd = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${props => props.theme.margins.large};
`;
const LabelSd = styled.label`
	margin-bottom: .5rem;
	color: ${props => props.theme.colors.secondary};
`;
const InputSd = styled(Input)`
	
`;
const ErrorSd = styled.span`
	color: red;
	font-size: .9rem;
	font-style: italic;
	margin-top: ${props => props.theme.margins.small};
`;

const InputField = ({ field, form, ...meta }) => {
	console.log(form.touched)
	console.log(form.errors)
	return (
		<InputFieldSd>
			<LabelSd htmlFor={field.name} >{meta.placeholder}</LabelSd>
			<InputSd {...field} id={field.name} type={meta.type} />
			{
				form.touched[field.name] && form.errors[field.name] &&
				<ErrorSd>{form.errors[field.name]}</ErrorSd>
			}
		</InputFieldSd>
	);
};

export default InputField;