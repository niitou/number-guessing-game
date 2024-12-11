import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';
import { Player } from '../players/entities/player.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
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
}
