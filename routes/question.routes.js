import { Router } from "express";
import { 
    createQuestion,
    addOptions,
    viewQuestion,
    deleteQuestion
} from "../controllers/question.controller.js";

const router = Router()

router.route("/create").post(createQuestion)
router.route("/:id/options/create").post(addOptions)
router.route("/:id/delete").delete(deleteQuestion)
router.route("/:id").get(viewQuestion)

export default router
