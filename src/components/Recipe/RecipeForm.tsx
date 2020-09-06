import React from 'react';
import { useForm } from 'react-hook-form';

interface RecipeFormProps {}

const RecipeForm = (props: RecipeFormProps) => {
	const { handleSubmit, register, errors } = useForm();

	return <p>RecipeForm</p>;
};

export default RecipeForm;
