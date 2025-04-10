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
      // Extraindo os dados do corpo da requisição
      const {
        title,
        price,
        releaseYear = null,
        developer,
        genres = null,
        platforms = null,
        imageUrl = null,
      } = req.body;

      // Validação básica para os campos obrigatórios
      if (!title || !price || !developer) {
        return res.status(400).json({ error: "Os campos 'title', 'developer' e 'price' são obrigatórios." });
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

      // Retornar o game criado
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