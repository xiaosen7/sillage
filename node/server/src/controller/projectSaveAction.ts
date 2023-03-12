import { type Request, type Response } from "express";
import { AppDataSource } from "../AppDataSource";
import { Project } from "../entity/Project";

export async function projectSaveAction(request: Request, response: Response) {
  const pageRepository = AppDataSource.getRepository(Project);
  const project = pageRepository.create(request.body);
  await pageRepository.save(project);
  return project;
}
