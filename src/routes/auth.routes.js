import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
// test protected route
router.get("/me", protect, (req, res) => {
 res.json({ message: "Protected route accessed", userId: req.user });
});

export default router;