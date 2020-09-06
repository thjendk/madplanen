export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['Boolean']>;
  days?: Maybe<Array<Maybe<Day>>>;
  day?: Maybe<Day>;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  recipe?: Maybe<Recipe>;
};


export type QueryDaysArgs = {
  startDate?: Maybe<Scalars['String']>;
  numberOfDays?: Maybe<Scalars['Int']>;
};


export type QueryDayArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryRecipeArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['Boolean']>;
  createDay?: Maybe<Day>;
  addRecipeToDay?: Maybe<Day>;
  removeRecipeFromDay?: Maybe<Day>;
  createIngredient?: Maybe<Ingredient>;
  createRecipe?: Maybe<Recipe>;
  addIngredientToRecipe?: Maybe<Recipe>;
  removeIngredientFromRecipe?: Maybe<Recipe>;
  login?: Maybe<Scalars['String']>;
  logout?: Maybe<Scalars['String']>;
  createUser?: Maybe<Scalars['String']>;
};


export type MutationCreateDayArgs = {
  data?: Maybe<DayInput>;
};


export type MutationAddRecipeToDayArgs = {
  data?: Maybe<DayRecipeInput>;
};


export type MutationRemoveRecipeFromDayArgs = {
  data?: Maybe<DayRecipeInput>;
};


export type MutationCreateIngredientArgs = {
  data?: Maybe<IngredientInput>;
};


export type MutationCreateRecipeArgs = {
  data?: Maybe<RecipeInput>;
};


export type MutationAddIngredientToRecipeArgs = {
  data?: Maybe<RecipeIngredientInput>;
};


export type MutationRemoveIngredientFromRecipeArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationLoginArgs = {
  data?: Maybe<LoginInput>;
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserInput>;
};

export type Day = {
  __typename?: 'Day';
  id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  user?: Maybe<User>;
};

export type DayInput = {
  date?: Maybe<Scalars['String']>;
};

export type DayRecipeInput = {
  dayId?: Maybe<Scalars['Int']>;
  recipeId?: Maybe<Scalars['Int']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  category?: Maybe<IngredientCategory>;
};

export type IngredientCategory = {
  __typename?: 'IngredientCategory';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
};

export type IngredientInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<RecipeIngredient>>>;
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  id?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  ingredient?: Maybe<Ingredient>;
  recipe?: Maybe<Recipe>;
};

export type RecipeInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RecipeIngredientInput = {
  ingredientId?: Maybe<Scalars['Int']>;
  recipeId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserInput = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

