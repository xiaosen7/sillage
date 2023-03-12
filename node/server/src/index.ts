import App, { type Request, type Response, json } from "express";

import { type Mode, env } from "@sillage/env";
import cors from "cors";
import { AppDataSource } from "./AppDataSource";
import { AppRoutes } from "./routes";

const mode = process.env.NODE_ENV as Mode;
const port = env[mode].serverPort;

AppDataSource.initialize()
  .then(() => {
    const app = App();
    app.use(json());
    app.use(cors());

    for (const route of AppRoutes) {
      app[route.method](route.path, (request: Request, response: Response) => {
        void ssi(route.action, request, response);
      });
    }

    app.listen(port, () => {
      console.log(`Server is listened on ${port}.`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

async function ssi(
  action: (request: Request, response: Response) => any,
  request: Request,
  response: Response
) {
  try {
    const data = await action(request, response);
    response.send({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error(error);
    console.error(error.stack);
    response.send({
      success: false,
      message: error.toString(),
    });
  }
}
