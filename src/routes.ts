import { Router } from "express";
import { recipes } from "./controllers/recipes";
import { users } from "./controllers/users";

export const router = Router()

router.post("/recipes", recipes.create.handle)
router.get("/recipes", recipes.read.handle)
router.delete("/recipes", recipes.del.handle)
router.put("/recipes", recipes.update.handle)

router.post("/users", users.create.handle)
router.get("/users", users.read.handle)
router.put("/users", users.update.handle)