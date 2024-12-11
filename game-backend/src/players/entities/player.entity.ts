import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn({ type: 'int' })
  player_id;

  @Column({ unique: true, type: 'varchar' })
  name;

  @CreateDateColumn()
  date_created;
}
