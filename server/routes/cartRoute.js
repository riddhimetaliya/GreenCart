import express from "express";
import authUser from "../middlewares/authUser.js";
import { updateCart } from "../controllers/cartController.js";

const cratRouter = express.Router();

cratRouter.post("/update", authUser, updateCart);

export default cratRouter;
