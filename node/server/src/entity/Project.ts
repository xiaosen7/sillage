/* eslint-disable unicorn/filename-case */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Project {
  @PrimaryColumn()
  id: string;

  @Column()
  pageSchemaUrl: string;
}
