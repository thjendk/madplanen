import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import FoodPlan from 'components/FoodPlan/FoodPlan';
import RecipeChooser from 'components/Recipe/RecipeChooser';
import RecipeForm from 'components/Recipe/RecipeForm';
import IngredientForm from 'components/ingredient/IngredientForm';
import IngredientChooser from 'components/ingredient/IngredientChooser';
import DayRecipe from 'components/Recipe/DayRecipe';

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5px auto;
	width: 100%;
	max-width: 1200px;
`;

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
	useEffect(() => {
		// Login?
	}, []);

	return (
		<div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
			<Header />
			<Layout>
				<Switch>
					<Route path="/ingredient/new" component={IngredientForm} />
					<Route path="/ingredient/:ingredientId" component={IngredientForm} />
					<Route path="/recipe/new" component={RecipeForm} />
					<Route path="/recipe/:recipeId/ingredient" component={IngredientChooser} />
					<Route path="/recipe/:recipeId" component={RecipeForm} />
					<Route path="/day/:dayId/new" component={RecipeChooser} />
					<Route path="/day/:dayId/:recipeId" component={DayRecipe} />
					<Route path="/" component={FoodPlan} />
				</Switch>
			</Layout>
			<div style={{ flexGrow: 1 }} />
			<Footer />
		</div>
	);
};

export default App;
