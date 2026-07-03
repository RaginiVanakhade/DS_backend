import express from "express";
import { register, login } from "../controllers/authcontroller";
import {upload} from "../uploads/upload"

const router = express.Router();

router.post("/register", upload.single("profilePicture"), register);
router.post("/login", login);
export default router;