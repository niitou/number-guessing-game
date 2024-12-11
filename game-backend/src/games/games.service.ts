import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Games } from './entities/game.entity';
import { Repository } from 'typeorm';
import { Players } from '../players/entities/player.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Games)
    private gameRepository: Repository<Games>,
    @InjectRepository(Players)
    private playerRepository: Repository<Players>,
  ) {}
  async create(createGameDto: CreateGameDto) {
    const user = await this.playerRepository.findOne({
      where: { player_id: createGameDto.player_id },
    });

    if (!user) {
      throw new Error('User Not Found');
    }

    const new_game = this.gameRepository.create({
      game_id: user.player_id,
      score: createGameDto.score,
    });
    return this.gameRepository.save(new_game);
  }
  async getLeaderboard() {
    const leaderBoard = await this.gameRepository
      .createQueryBuilder('games')
      .leftJoinAndSelect('games.player', 'playerId')
      .orderBy('games.score')
      .limit(5)
      .getMany();
    return leaderBoard;
  }
}
