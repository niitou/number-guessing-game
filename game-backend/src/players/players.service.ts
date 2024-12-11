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

  findByName(player_name: String) {
    return this.playerRepository.findOne({ where: { name: player_name } });
  }
}
