import { Router } from "express";
import { userRoute } from "./userRoute.js";
import { authRoute } from "./authRoute.js";

export const route = Router();

route.use("/auth", authRoute);
// route.use("/task", taskRoute);
// route.use("/team", teamRoute);
route.use("/user", userRoute);

