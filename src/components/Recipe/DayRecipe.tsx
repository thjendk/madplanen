import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import Day from 'api/day.class';

interface DayRecipeProps {}

const DayRecipe = (props: DayRecipeProps) => {
	const params = useParams<{ recipeId: string; dayId: string }>();
	const history = useHistory();
	const recipeId = Number(params.recipeId);
	const dayId = Number(params.dayId);

	const handleRemove = async () => {
		await Day.removeRecipe({ dayId, recipeId });
		history.push(`/day/${dayId}`);
	};

	return (
		<div>
			<Button block variant="outline-danger" onClick={() => handleRemove()}>
				Fjern
			</Button>
		</div>
	);
};

export default DayRecipe;
