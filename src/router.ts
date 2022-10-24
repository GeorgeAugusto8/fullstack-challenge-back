import { Router } from "express";
import { defaultController } from "./Controllers/DefaultController";

const router: Router = Router();

router.get("/api/posts", defaultController.returnPosts);
router.get("/api/pages", defaultController.returnPages);

export { router };
