import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReduxState } from 'redux/reducers';
import Day from 'api/day.class';
import Recipe from 'api/recipe.class';
import { Card } from 'components/FoodPlan/FoodPlanCard';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { da } from 'date-fns/locale';
import { format, differenceInDays, startOfDay } from 'date-fns';

export const Title = styled.div`
	font-size: 1.3em;
	font-weight: bold;
	margin-bottom: 5px;
	text-align: center;
	text-transform: capitalize;
`;

interface RecipeChooserProps {}

const RecipeChooser = (props: RecipeChooserProps) => {
	const history = useHistory();
	const params = useParams<{ dayId: string }>();
	const dayId = Number(params.dayId);
	const day = useSelector((state: ReduxState) => state.daysReducer.days.find((d) => d.id === dayId));
	const recipes = useSelector((state: ReduxState) => state.recipeReducer.recipes)
		.slice()
		.sort((a, b) => a.name.localeCompare(b.name));

	useEffect(() => {
		Day.fetchById(dayId);
		Recipe.fetchAll();
	}, [dayId]);

	const handleSelect = async (recipeId: number) => {
		await Day.addRecipe({ recipeId, dayId: day.id });
	};

	if (!day) return <p>Dit link er forkert</p>;
	return (
		<div>
			<Title>{format(new Date(day.date), 'EEEE (dd-MM-yyyy)', { locale: da })}</Title>
			<p style={{ color: 'grey', textAlign: 'center' }}>
				Om {differenceInDays(startOfDay(new Date(day.date)), startOfDay(new Date()))} dag(e).
			</p>
			<hr />
			<div style={{ overflowY: 'auto' }}>
				{recipes.map((r) => (
					<Card>
						<Title>{r.name}</Title>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div style={{ width: '100%' }}>
								<Button
									onClick={() => history.push(`/recipe/${r.id}`)}
									block
									variant="outline-secondary"
									size="sm"
								>
									Rediger opskrift
								</Button>
							</div>
							<div style={{ width: '100%' }}>
								<Button
									disabled={day?.recipes.some((rec) => rec.id === r.id)}
									onClick={() => handleSelect(r.id)}
									variant={
										!day?.recipes.some((rec) => rec.id === r.id)
											? 'outline-success'
											: 'outline-secondary'
									}
									block
									size="sm"
								>
									{!day?.recipes.some((rec) => rec.id === r.id) ? 'Vælg' : 'Allerede valgt'}
								</Button>
							</div>
						</div>
					</Card>
				))}
				{recipes.length === 0 && <Card>Ikke flere opskrifter...</Card>}
			</div>
		</div>
	);
};

export default RecipeChooser;
