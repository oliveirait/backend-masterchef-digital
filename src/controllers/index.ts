import { CreateRecipe } from "./CreateRecipe";
import { ListRecipe } from "./ListRecipe";



export const Recipes = {
  create: new CreateRecipe,
  read: new ListRecipe
}