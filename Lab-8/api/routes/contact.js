import express from "express";
import * as contactController from "../controllers/contact.js";
import Contact from "../models/contact.js";

const router = express.Router();

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.save);

router.route("/contacts/:id")
    .get(contactController.get)
    .put(contactController.update)
    .delete(contactController.remove)

export default router;