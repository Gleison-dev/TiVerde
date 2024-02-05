import express from "express";
import { usuarioRoute } from "./routes/Usuario.route.js"
import { empresaRoute } from "./routes/Empresa.route.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(usuarioRoute);
app.use(empresaRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});