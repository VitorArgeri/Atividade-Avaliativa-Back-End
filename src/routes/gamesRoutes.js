import express from "express";
import GamesController from "../controllers/gamesController.js";

const gamesRouter = express.Router();

// Rotas de Games
// GET /personagens - Listar todos os Games
gamesRouter.get("/", GamesController.getAllGames);

// GET /personagens/:id - Obter um Game pelo ID
gamesRouter.get("/:id", GamesController.getGameById);

// POST /personagens - Criar um novo Game
gamesRouter.post("/", GamesController.createGame);

// PUT /personagens/:id - Atualizar um Game
gamesRouter.put("/:id", GamesController.updateGame);

// DELETE /personagens/:id - Remover um Game
gamesRouter.delete("/:id", GamesController.deleteGame);

export default gamesRouter;
