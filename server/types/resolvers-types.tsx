import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from 'config/apolloServer';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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


export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']>>;
  Mutation: ResolverTypeWrapper<{}>;
  Day: ResolverTypeWrapper<Partial<Day>>;
  DayInput: ResolverTypeWrapper<Partial<DayInput>>;
  DayRecipeInput: ResolverTypeWrapper<Partial<DayRecipeInput>>;
  Ingredient: ResolverTypeWrapper<Partial<Ingredient>>;
  IngredientCategory: ResolverTypeWrapper<Partial<IngredientCategory>>;
  IngredientInput: ResolverTypeWrapper<Partial<IngredientInput>>;
  Recipe: ResolverTypeWrapper<Partial<Recipe>>;
  RecipeIngredient: ResolverTypeWrapper<Partial<RecipeIngredient>>;
  RecipeInput: ResolverTypeWrapper<Partial<RecipeInput>>;
  RecipeIngredientInput: ResolverTypeWrapper<Partial<RecipeIngredientInput>>;
  User: ResolverTypeWrapper<Partial<User>>;
  UserInput: ResolverTypeWrapper<Partial<UserInput>>;
  LoginInput: ResolverTypeWrapper<Partial<LoginInput>>;
  CacheControlScope: ResolverTypeWrapper<Partial<CacheControlScope>>;
  Upload: ResolverTypeWrapper<Partial<Scalars['Upload']>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Boolean: Partial<Scalars['Boolean']>;
  String: Partial<Scalars['String']>;
  Int: Partial<Scalars['Int']>;
  Mutation: {};
  Day: Partial<Day>;
  DayInput: Partial<DayInput>;
  DayRecipeInput: Partial<DayRecipeInput>;
  Ingredient: Partial<Ingredient>;
  IngredientCategory: Partial<IngredientCategory>;
  IngredientInput: Partial<IngredientInput>;
  Recipe: Partial<Recipe>;
  RecipeIngredient: Partial<RecipeIngredient>;
  RecipeInput: Partial<RecipeInput>;
  RecipeIngredientInput: Partial<RecipeIngredientInput>;
  User: Partial<User>;
  UserInput: Partial<UserInput>;
  LoginInput: Partial<LoginInput>;
  Upload: Partial<Scalars['Upload']>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  days?: Resolver<Maybe<Array<Maybe<ResolversTypes['Day']>>>, ParentType, ContextType, RequireFields<QueryDaysArgs, never>>;
  day?: Resolver<Maybe<ResolversTypes['Day']>, ParentType, ContextType, RequireFields<QueryDayArgs, never>>;
  ingredients?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ingredient']>>>, ParentType, ContextType>;
  recipes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recipe']>>>, ParentType, ContextType>;
  recipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<QueryRecipeArgs, never>>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createDay?: Resolver<Maybe<ResolversTypes['Day']>, ParentType, ContextType, RequireFields<MutationCreateDayArgs, never>>;
  addRecipeToDay?: Resolver<Maybe<ResolversTypes['Day']>, ParentType, ContextType, RequireFields<MutationAddRecipeToDayArgs, never>>;
  removeRecipeFromDay?: Resolver<Maybe<ResolversTypes['Day']>, ParentType, ContextType, RequireFields<MutationRemoveRecipeFromDayArgs, never>>;
  createIngredient?: Resolver<Maybe<ResolversTypes['Ingredient']>, ParentType, ContextType, RequireFields<MutationCreateIngredientArgs, never>>;
  createRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<MutationCreateRecipeArgs, never>>;
  addIngredientToRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<MutationAddIngredientToRecipeArgs, never>>;
  removeIngredientFromRecipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType, RequireFields<MutationRemoveIngredientFromRecipeArgs, never>>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationLoginArgs, never>>;
  logout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, never>>;
}>;

export type DayResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Day'] = ResolversParentTypes['Day']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recipe']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type IngredientResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Ingredient'] = ResolversParentTypes['Ingredient']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['IngredientCategory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type IngredientCategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IngredientCategory'] = ResolversParentTypes['IngredientCategory']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type RecipeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ingredients?: Resolver<Maybe<Array<Maybe<ResolversTypes['RecipeIngredient']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type RecipeIngredientResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RecipeIngredient'] = ResolversParentTypes['RecipeIngredient']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ingredient?: Resolver<Maybe<ResolversTypes['Ingredient']>, ParentType, ContextType>;
  recipe?: Resolver<Maybe<ResolversTypes['Recipe']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = Context> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Day?: DayResolvers<ContextType>;
  Ingredient?: IngredientResolvers<ContextType>;
  IngredientCategory?: IngredientCategoryResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
  RecipeIngredient?: RecipeIngredientResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Upload?: GraphQLScalarType;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
