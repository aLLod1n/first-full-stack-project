import express from "express";
import { addUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get('/users', getUsers);

router.post('/add-user', addUser);

export default router;