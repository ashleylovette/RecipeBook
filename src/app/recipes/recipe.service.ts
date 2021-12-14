
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model"

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

//   private recipes: Recipe[]= [
//   new Recipe(
//     'Tasty Shnitzel',
//     'A super tasty schnitzel',
//     'https://get.pxhere.com/photo/dish-food-cuisine-ingredient-meat-taco-meal-produce-salad-side-dish-recipe-fried-food-mexican-food-lunch-american-food-brunch-appetizer-Tex-mex-food-greek-food-Latin-american-food-mixed-grill-1557385.jpg',
//      [
//        new Ingredient('Meat', 1),
//        new Ingredient('French Fries', 20)
//      ] ),
//   new Recipe(
//     'Big Fat Burger',
//     'What else is there to say?',
//     'https://get.pxhere.com/photo/dish-food-cuisine-ingredient-meat-taco-meal-produce-salad-side-dish-recipe-fried-food-mexican-food-lunch-american-food-brunch-appetizer-Tex-mex-food-greek-food-Latin-american-food-mixed-grill-1557385.jpg',
//     [
//       new Ingredient('Buns', 2),
//       new Ingredient('Meat', 1)
//     ] )
// ];

private recipes: Recipe[] = [];


constructor(private shoppingListService: ShoppingListService) {}

setRecipes(recipes: Recipe[]) {
  this.recipes = recipes;
  this.recipesChanged.next(this.recipes.slice());
}

getRecipes() {
  return this.recipes.slice();
}

getRecipe(index: number) {
  return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.shoppingListService.addIngredients(ingredients);
}

addRecipe(recipe: Recipe) {
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index: number) {
  this.recipes.splice(index, 1);
  this.recipesChanged.next(this.recipes.slice());
}
}
