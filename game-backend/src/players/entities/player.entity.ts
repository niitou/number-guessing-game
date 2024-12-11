import { Games } from 'src/games/entities/game.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Players {
  @PrimaryGeneratedColumn({ type: 'int' })
  player_id;

  @Column({ unique: true, type: 'varchar' })
  name;

  @OneToMany(() => Games, (game) => game.player)
  games: Games[];

  @CreateDateColumn()
  date_created;
}
