import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { RecipeInput } from 'types/generated';
import { Card, Tag } from 'components/FoodPlan/FoodPlanCard';
import { Title } from 'components/Recipe/RecipeChooser';
import { Form, Button } from 'react-bootstrap';
import Recipe from 'api/recipe.class';
import { useHistory, useParams } from 'react-router-dom';
import { ReduxState } from 'redux/reducers';
import { useSelector } from 'react-redux';

interface RecipeFormProps {}

const RecipeForm = (props: RecipeFormProps) => {
	const params = useParams<{ recipeId: string }>();
	const recipeId = Number(params.recipeId);
	const recipe = useSelector((state: ReduxState) => state.recipeReducer.recipes.find((r) => r.id === recipeId));
	const history = useHistory();
	const formik = useFormik({
		initialValues: {
			name: recipe?.name || ''
		},
		onSubmit: (values) => handleSubmit(values)
	});

	const handleSubmit = async (data: RecipeInput) => {
		await Recipe.create(data);
	};

	useEffect(() => {
		Recipe.fetchById(recipeId);
	}, [recipeId]);

	return (
		<Card>
			<Title style={{ textTransform: 'capitalize' }}>{formik.values.name || 'Angiv navn...'}</Title>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					formik.handleSubmit();
				}}
			>
				<Form.Control
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					placeholder="Navn..."
				/>
				{!!recipe && (
					<div>
						<hr />
						<Title>Ingredienser</Title>
						{recipe?.ingredients.map((i) => (
							<Tag onClick={() => history.push(`/ingredient/${i.ingredient.id}`)}>
								{i.amount} {i.ingredient.name}
							</Tag>
						))}
						<Tag onClick={() => history.push(`/recipe/${recipe.id}/ingredient`)}>+</Tag>
					</div>
				)}
				<hr />
				<Button
					onClick={(e) => {
						e.preventDefault();
						formik.handleSubmit();
					}}
					block
					variant="outline-success"
				>
					Gem
				</Button>
			</Form>
		</Card>
	);
};

export default RecipeForm;
