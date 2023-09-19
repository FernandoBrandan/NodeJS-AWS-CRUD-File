import { Router } from "express";
import * as controller from "./controller.js"
const router = Router();

router.get("/:key", controller.get);
router.post("/:key", controller.post);
router.get("/", controller.list);
router.delete("/:key", controller.remove);

export { router }; // Utilizando la sintaxis de ESM
