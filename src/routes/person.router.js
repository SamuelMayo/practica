import { Router } from "express";
import personController from "../controllers/person.controller.js";

const router = Router();

router.get('/', personController.getAll);


export default router;
