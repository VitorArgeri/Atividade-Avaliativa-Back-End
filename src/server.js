import express from "express";
import { config } from "dotenv";

import gamesRouter from "./routes/gamesRoutes.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4001; // Define a porta do servidor

// Inicializa o Express
const app = express();

app.use(express.json()); // Parse de JSON

app.use("/games", gamesRouter); // Usar as rotas de games

// Rota base para verificar se o servidor está rodando
app.get("/", (req, res) => {
  res.json({ message: "API de Coleção de Games funcionando!" });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
