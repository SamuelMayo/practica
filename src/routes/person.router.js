import { Router } from "express";
import personController from "../controllers/person.controller.js";

const router = Router();

router.get('/', personController.getAll);
router.post('/',personController.save);
router.get('/:id', personController.getById);
router.delete('/:id', personController.del);
export default router;
