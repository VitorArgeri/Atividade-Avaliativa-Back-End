import GamesModel from "../models/gamesModel.js";

class GamesController {
  // GET /api/games
  async getAllGames(req, res) {
    try {
      const games = await GamesModel.findAll();
      res.json(games);
    } catch (error) {
      console.error("Erro ao buscar games:", error);
      res.status(500).json({ error: "Erro ao buscar games" });
    }
  }

  // GET /api/games/:id
  async getGameById(req, res) {
    try {
      const { id } = req.params;

      const game = await GamesModel.findById(id);

      if (!game) {
        return res.status(404).json({ error: "Game não encontrado" });
      }

      res.json(game);
    } catch (error) {
      console.error("Erro ao buscar game:", error);
      res.status(500).json({ error: "Erro ao buscar game" });
    }
  }

  // POST /api/games
  async createGame(req, res) {
    try {
      // Validação básica
      const {
        title,
        price,
        releaseYear,
        developer,
        genres,
        platforms,
        imageUrl,
      } = req.body;

      // Verifica se todos os campos do game foram fornecidos
      if (
        !title ||
        !price ||
        !releaseYear ||
        !developer ||
        !genres ||
        !platforms ||
        !imageUrl
      ) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo game
      const newGame = await GamesModel.create(
        title,
        price,
        releaseYear,
        developer,
        genres,
        platforms,
        imageUrl
      );

      if (!newGame) {
        return res.status(400).json({ error: "Erro ao criar game" });
      }

      res.status(201).json(newGame);
    } catch (error) {
      console.error("Erro ao criar game:", error);
      res.status(500).json({ error: "Erro ao criar game" });
    }
  }

  // PUT /api/games/:id
  async updateGame(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        price,
        releaseYear,
        developer,
        genres,
        platforms,
        imageUrl,
      } = req.body;

      // Atualizar o game
      const updatedGame = await GamesModel.update(
        id,
        title,
        price,
        releaseYear,
        developer,
        genres,
        platforms,
        imageUrl
      );

      if (!updatedGame) {
        return res.status(404).json({ error: "Game não encontrado" });
      }

      res.json(updatedGame);
    } catch (error) {
      console.error("Erro ao atualizar game:", error);
      res.status(500).json({ error: "Erro ao atualizar game" });
    }
  }

  // DELETE /api/games/:id
  async deleteGame(req, res) {
    try {
      const { id } = req.params;

      // Remover o game
      const result = await GamesModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Game não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover game:", error);
      res.status(500).json({ error: "Erro ao remover game" });
    }
  }
}

export default new GamesController();