import {Router} from "express";
import * as todosCtrl from "../controllers/todos.controller";

const router = Router();


router.post("/", todosCtrl.createTodo)
router.get("/", todosCtrl.getTodos)
router.get("/:todosId", todosCtrl.getTodoById)
router.put("/:todosId", todosCtrl.updateTodoById)
router.delete("/:todosId", todosCtrl.delateTodoById)

export default router;