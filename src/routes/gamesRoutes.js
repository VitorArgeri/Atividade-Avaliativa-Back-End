import express from "express";
import GamesController from "../controllers/gamesController.js";

const gamesRouter = express.Router();

// Rotas de Games
gamesRouter.get("/", GamesController.getAllGames);

gamesRouter.get("/:id", GamesController.getGameById);

gamesRouter.post("/", GamesController.createGame);

gamesRouter.put("/:id", GamesController.updateGame);

gamesRouter.delete("/:id", GamesController.deleteGame);

export default gamesRouter;
