import { DataSource } from "typeorm";
import { User } from "../entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "192.168.1.161",
  port: 5432,
  username: "postgres",
  password: "mukesh@123.Com",
  database: "appv1",
  entities: [User],
  synchronize: true,
  logging: false,
});
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
