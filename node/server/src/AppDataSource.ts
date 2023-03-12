import "reflect-metadata";
import { DataSource } from "typeorm";
import { Project } from "./entity/Project";

export const AppDataSource = new DataSource({
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  logging: false,
  database: "sillage-ui",
  synchronize: true,
  entities: [Project],
});
