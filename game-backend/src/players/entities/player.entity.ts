import { Game } from 'src/games/entities/game.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn({ type: 'int' })
  player_id;

  @Column({ unique: true, type: 'varchar' })
  name;

  @OneToMany(() => Game, (game) => game.player_id)
  games: Game[];

  @CreateDateColumn()
  date_created;
}
