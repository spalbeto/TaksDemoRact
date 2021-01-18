import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import todosRoutes from "./routes/todos.routes";

const app = express();

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        author: app.get("pkg").author,
        descripcion: app.get("pkg").description,
        version: app.get("pkg").version
    })
})


app.use("/todos", todosRoutes);

export default app;