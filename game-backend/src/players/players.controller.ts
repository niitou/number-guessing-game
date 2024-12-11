import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Request } from 'express';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  findByName(@Req() req: Request) {
    const player_name = req.query.name.toString();
    return this.playersService.findByName(player_name);
  }
}
