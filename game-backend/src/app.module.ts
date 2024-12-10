import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';
import { Player } from './players/entities/player.entity';
import { Game } from './games/entities/game.entity';
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
      entities: [Player, Game],
      synchronize: true, // Don't use in production
    }),
    PlayersModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
