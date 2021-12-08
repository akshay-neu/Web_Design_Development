//Routes are defined so that we can see for which request which url is used

import express from 'express';
import * as todoController from '../controllers/todo.js';

const router = express.Router();

router.route('/todolist')
    .get(todoController.index)
    .post(todoController.save);


router.route('/todolist/:id')
    .get(todoController.get)
    .put(todoController.update)
    .delete(todoController.remove);


export default router;