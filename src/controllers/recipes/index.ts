import { CreateRecipe } from "./CreateRecipe";
import { DeleteRecipe } from "./DeleteRecipe";
import { ListRecipe } from "./ListRecipe";
import { UpdateRecipe } from "./UpdateRecipe";


export const Recipes = {
  create: new CreateRecipe,
  read: new ListRecipe,
  del: new DeleteRecipe,
  update: new UpdateRecipe
}