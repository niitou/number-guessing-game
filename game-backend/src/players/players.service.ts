import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Players } from './entities/player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Players)
    private playerRepository: Repository<Players>,
  ) {}
  create(createPlayerDto: CreatePlayerDto) {
    return this.playerRepository.save(createPlayerDto);
  }

  async findByName(player_name: String) {
    const personalBest = await this.playerRepository
      .createQueryBuilder('players')
      .leftJoinAndSelect('players.games', 'games')
      .select('MIN(games.score)', 'score')
      .where('players.name = :name', { name: player_name })
      .getRawOne();
    const user = await this.playerRepository.findOne({
      where: { name: player_name },
    });
    if (!user) return 'Not Found!';
    return { ...user, ...personalBest };
  }
}
