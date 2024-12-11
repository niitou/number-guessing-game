import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Players } from './players/entities/player.entity';
import { Games } from './games/entities/game.entity';
import { GamesController } from './games/games.controller';
import { PlayersController } from './players/players.controller';
import { GamesService } from './games/games.service';
import { PlayersService } from './players/players.service';
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config({ path: __dirname + '/../.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      logging: true,
      entities: [Players, Games],
      synchronize: true, // Don't use in production
    }),
    TypeOrmModule.forFeature([Games, Players]),
  ],
  controllers: [AppController, GamesController, PlayersController],
  providers: [AppService, GamesService, PlayersService],
})
export class AppModule {}
