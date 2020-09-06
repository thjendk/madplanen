import { gql } from '@apollo/client';
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
};


export type QueryDaysArgs = {
  startDate?: Maybe<Scalars['String']>;
  numberOfDays?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['Boolean']>;
  createDay?: Maybe<Day>;
};


export type MutationCreateDayArgs = {
  data?: Maybe<DayInput>;
};

export type Day = {
  __typename?: 'Day';
  id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  recipe?: Maybe<Recipe>;
  user?: Maybe<User>;
};

export type DayInput = {
  date?: Maybe<Scalars['String']>;
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

export type Recipe = {
  __typename?: 'Recipe';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

