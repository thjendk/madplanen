import Dataloader from 'dataloader';
import Day from 'models/days.model';
import Ingredient from 'models/ingredients.model';
import IngredientCategory from 'models/ingredient_categories.model';
import Recipe from 'models/recipes.model';
import RecipeIngredient from 'models/recipe_ingredients.model';

const batchDays = async (ids: number[]) => {
	const days = await Day.query().findByIds(ids);
	return ids.map((id) => days.find((d) => d.id === id));
};
const batchIngredients = async (ids: number[]) => {
	const ingredients = await Ingredient.query().findByIds(ids);
	return ids.map((id) => ingredients.find((i) => i.id === id));
};
const batchIngredientCategories = async (ids: number[]) => {
	const ic = await IngredientCategory.query().findByIds(ids);
	return ids.map((id) => ic.find((ic) => ic.id === id));
};
const batchRecipes = async (ids: number[]) => {
	const r = await Recipe.query().findByIds(ids);
	return ids.map((id) => r.find((r) => r.id === id));
};
const batchRecipeIngredient = async (ids: number[]) => {
	const ri = await RecipeIngredient.query().findByIds(ids);
	return ids.map((id) => ri.find((r) => r.id === id));
};

// Loaders
const daysLoader = () => new Dataloader((ids: number[]) => batchDays(ids));
const ingredientLoader = () => new Dataloader((ids: number[]) => batchIngredients(ids));
const ingredientCategoryLoader = () => new Dataloader((ids: number[]) => batchIngredientCategories(ids));
const recipeLoader = () => new Dataloader((ids: number[]) => batchRecipes(ids));
const recipeIngredientLoader = () => new Dataloader((ids: number[]) => batchRecipeIngredient(ids));

export default () => ({
	daysLoader: daysLoader(),
	ingredientLoader: ingredientLoader(),
	ingredientCategoryLoader: ingredientCategoryLoader(),
	recipeLoader: recipeLoader(),
	recipeIngredientLoader: recipeIngredientLoader()
});
