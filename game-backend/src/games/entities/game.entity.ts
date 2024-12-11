import { Players } from 'src/players/entities/player.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Games {
  @PrimaryGeneratedColumn({ type: 'int' })
  game_id;

  @Column({ type: 'int', nullable: false })
  score;

  @ManyToOne(() => Players, (player) => player.games)
  player: Players;

  @CreateDateColumn()
  date_create;
}
