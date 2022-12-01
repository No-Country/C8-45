import cors from "cors";
import express from "express";
import morgan from "morgan";
import path from "path";
import swaggerUi from "swagger-ui-express";

import router from "./routes";
import swaggerJson from "./swagger.json";
//create server
const app = express();
//configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use(router);
export default app;
