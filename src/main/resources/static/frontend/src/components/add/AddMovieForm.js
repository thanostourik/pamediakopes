import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'formik';
import InputField from 'components/general/InputField';
import ButtonLink from 'components/general/ButtonLink';

const FormSd = styled(Form)`
	padding: ${props => props.theme.paddings.medium};
`;
const ButtonsContainerSd = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const AddButtonSd = styled.button`
	display: inline-block;
	padding: .5rem 1rem;
	text-decoration: none;
	font-size: 1rem;
	color: ${props => props.theme.colors.secondary};
	background: ${props => props.theme.colors.button};
	border: 2px solid ${props => props.theme.colors.border};
	border-radius: 5px;
	cursor: pointer;
	:active {
		border: 2px solid ${props => props.theme.colors.borderFocused};
	}
`;

const AddMovieForm = () => {
	return (
		<FormSd>
			<Field
				type="text"
				name="title"
				placeholder="Title"
				component={InputField}
			/>
			<Field
				type="text"
				name="director"
				placeholder="Director"
				component={InputField}
			/>
			<Field
				type="number"
				name="year"
				placeholder="Year"
				component={InputField}
			/>
			<Field
				type="text"
				name="description"
				placeholder="Description"
				component={InputField}
			/>
			<ButtonsContainerSd>
				<AddButtonSd type="submit">Add Movie</AddButtonSd>
				<ButtonLink to="/">Back</ButtonLink>
			</ButtonsContainerSd>
		</FormSd>
	)
};

export default AddMovieForm;