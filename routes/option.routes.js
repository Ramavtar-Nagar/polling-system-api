import { Router } from "express";
import { 
    deleteOption,
    addVotes 
} from "../controllers/option.controller";

const router = Router()

router.route("/:id/delete").delete(deleteOption)
router.route("/:id/add_vote").post(addVotes)

export default router