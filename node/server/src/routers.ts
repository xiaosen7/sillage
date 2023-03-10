import { type Express } from "express";

export default function routers(app: Express) {
  app.get("/material", (req, res) => {
    res.send("/material");
  });
}
