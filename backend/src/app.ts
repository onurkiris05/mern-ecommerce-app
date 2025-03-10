import "dotenv/config";
import express from "express";
import usersRoutes from "./routes/users";

const app = express();

app.use(express.json());

app.use("/api/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
