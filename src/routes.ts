import { Router } from "express";
import { Recipes } from "./controllers";

const router = Router()



router.post("/recipes", Recipes.create.handle)
router.get("/recipes", Recipes.read.handle)


export { router }