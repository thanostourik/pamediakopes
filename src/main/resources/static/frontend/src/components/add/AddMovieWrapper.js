import React from 'react';
import axios from 'axios';
import { MOVIES } from 'actions/Backend';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AddMovieForm from 'components/add/AddMovieForm';

const InitialValues = {
	title: "",
	director: "",
	year: "",
	description: ""
};

const MovieSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Title is too short')
		.required("Title is required"),
	director: Yup.string()
		.min(2, 'Director is too short')
		.required('Director is required'),
	year: Yup.number()
		.min(1700, 'Wrong year')
		.max(new Date().getFullYear(), 'Wrong year')
		.required("Year is required"),
	description: Yup.string()
		.min(50, 'Description should be at least 50 characters')
		.required('Description is required')
});

const AddMovieWrapper = ({ history }) => {
	return (
		<Formik
			initialValues={InitialValues}
			validationSchema={MovieSchema}
			onSubmit={values => {
				axios.post(MOVIES, values)
					.then(res => history.push("/"));
			}}
		>
			{
				() => <AddMovieForm />
			}
		</Formik>
	)
};

export default AddMovieWrapper;