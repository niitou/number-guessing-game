import { Player } from 'src/players/entities/player.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn({ type: 'int' })
  game_id;

  @Column({ type: 'int', nullable: false })
  score;

  @ManyToOne(() => Player, (player) => player.player_id, { eager: true })
  player_id: Player;

  @CreateDateColumn()
  date_create;
}
