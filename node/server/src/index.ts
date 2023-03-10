import App from "express";
import { AppDataSource } from "./AppDataSource";
import routers from "./routers";

const port = Number(process.env.SILLAGE_SERVER_PORT);

AppDataSource.initialize()
  .then(() => {
    const app = App();
    routers(app);
    app.listen(port, () => {
      console.log(`Server is listened on ${port}.`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
