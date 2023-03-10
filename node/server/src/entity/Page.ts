import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;
}
