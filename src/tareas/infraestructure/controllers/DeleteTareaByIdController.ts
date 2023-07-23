import { Request, Response } from "express";

import { DeleteTareasByIdUsecase } from "../../application/DeleteTareaByIdUsecase";

export class DeleteTareaByIdTareaController {
  constructor(readonly deleteTareaByIdUseCase: DeleteTareasByIdUsecase) {}

  async run(req: Request, res: Response) {
    const tarea = req.body;
    try {
      const tareaData = await this.deleteTareaByIdUseCase.run(tarea.id);
      res.status(200).json(tareaData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
