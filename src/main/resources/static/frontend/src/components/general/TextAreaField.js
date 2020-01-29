import React from 'react';
import styled from 'styled-components';
import TextArea from 'components/general/TextArea';

const TextAreaFieldSd = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${props => props.theme.margins.large};
`;
const LabelSd = styled.label`
	margin-bottom: .5rem;
	color: ${props => props.theme.colors.secondary};
`;
const TextAreaSd = styled(TextArea)`
	min-height: 70px;
	resize: vertical;
`;
const ErrorSd = styled.span`
	color: red;
	font-size: .9rem;
	font-style: italic;
	margin-top: ${props => props.theme.margins.small};
`;

const TextAreaField = ({ field, form, ...meta }) => {
	return (
		<TextAreaFieldSd>
			<LabelSd htmlFor={field.name} >{meta.placeholder}</LabelSd>
			<TextAreaSd {...field} id={field.name} type={meta.type} />
			{
				form.touched[field.name] && form.errors[field.name] &&
				<ErrorSd>{form.errors[field.name]}</ErrorSd>
			}
		</TextAreaFieldSd>
	);
};

export default TextAreaField;