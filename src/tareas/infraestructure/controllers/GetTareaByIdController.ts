import { Request, Response } from "express";

import { GetTareasByIdUsecase } from "../../application/GetTareaByIdUsecase";

export class GetTareaByIdTareaController {
  constructor(readonly getTareaByIdUseCase: GetTareasByIdUsecase) {}

  async run(req: Request, res: Response) {
    const tarea = req.body;

    try {
      const tareaData = await this.getTareaByIdUseCase.run(tarea.id);
      res.status(200).json(tareaData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
