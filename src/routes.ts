import { Router } from "express";
import { Recipes } from "./controllers/recipes";
import { Users } from "./controllers/users";

const router = Router()

router.post("/recipes", Recipes.create.handle)
router.get("/recipes", Recipes.read.handle)
router.delete("/recipes", Recipes.del.handle)
router.put("/recipes", Recipes.update.handle)

router.post("/users", Users.create.handle)
router.get("/users", Users.read.handle)
router.put("/users", Users.update.handle)


export { router }