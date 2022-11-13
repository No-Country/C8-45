import express from "express";
import morgan from "morgan";
import path from "path";

import router from "./routes";
//create server
const app = express();
//configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(router);
export default app;
