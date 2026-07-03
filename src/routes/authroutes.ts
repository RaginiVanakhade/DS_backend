import express from "express";
import { register } from "../controllers/authcontroller";
import {upload} from "../uploads/upload"

const router = express.Router();

router.post("/register", upload.single("profilePicture"), register);

export default router;