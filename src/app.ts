import express from "express";
import routes from "./routes/user.routes.js";

const app = express();

app.use(routes)

export default app;