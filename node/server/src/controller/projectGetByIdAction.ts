import { type Request, type Response } from "express";
import { AppDataSource } from "../AppDataSource";
import { Project } from "../entity/Project";

export async function docGetByIdAction(request: Request, response: Response) {
  const pageRepository = AppDataSource.getRepository(Project);
  const project = await pageRepository.findOne({
    where: {
      id: request.params.id,
    },
  });

  return project;
}

// post file
