import prisma from "../../prisma/prisma.js";

class GamesModel {
  // Obter todos os games
  async findAll() {
    const games = await prisma.games.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(games);

    return games;
  }

  // Obter um games pelo ID
  async findById(id) {
    const games = await prisma.games.findUnique({
      where: {
        id: Number(id),
      },
    });

    return games;
  }

  // Criar um novo games
  async create(
    title,
    price,
    releaseYear,
    developer,
    genres,
    platforms,
    imageUrl
  ) {
    const newGame = await prisma.games.create({
      data: {
        title,
        price,
        releaseYear,
        developer,
        genres,
        platforms,
        imageUrl,
      },
    });

    return newGame;
  }

  // Atualizar um game
  async update(
    id,
    title,
    price,
    releaseYear,
    developer,
    genres,
    platforms,
    imageUrl
  ) {
    const game = await this.findById(id);

    if (!game) {
      return null;
    }

    // Atualize o game existente com os novos dados
    const data = {};
    if (title !== undefined) {
      data.title = title;
    }
    if (price !== undefined) {
      data.price = price;
    }
    if (releaseYear !== undefined) {
      data.releaseYear = releaseYear;
    }
    if (developer !== undefined) {
      data.developer = developer;
    }
    if (genres !== undefined) {
      data.genres = genres;
    }
    if (platforms !== undefined) {
      data.platforms = platforms;
    }
    if (imageUrl !== undefined) {
      data.imageUrl = imageUrl;
    }

    const gameUpdated = await prisma.games.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return gameUpdated;
  }

  // Remover um game
  async delete(id) {
    const game = await this.findById(id);

    if (!game) {
      return null;
    }

    await prisma.games.delete({ // Corrigido de prisma.game.delete para prisma.games.delete
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new GamesModel();
