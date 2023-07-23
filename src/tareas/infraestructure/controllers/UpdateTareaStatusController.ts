import { Request, Response } from "express";

import { UpdateTareaStatusUsecase } from "../../application/UpdateTareaStatusUsecase";

export class UpdateTareaStatusController {
  constructor(readonly updateTareaStatusUseCase: UpdateTareaStatusUsecase) {}

  async run(req: Request, res: Response) {
    const tarea = req.body;

    try {
      const tareaData = await this.updateTareaStatusUseCase.run(
        tarea.id,
        tarea.status
      );
      res.status(200).json(tareaData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
