import { Request, Response } from "express";

import { UpdateTareaUsecase } from "../../application/UpdateTareaUsecase";

export class UpdateTareaController {
  constructor(readonly updateTareaUseCase: UpdateTareaUsecase) {}

  async run(req: Request, res: Response) {
    const tarea = req.body;

    try {
      const tareaData = await this.updateTareaUseCase.run(
        tarea.titulo,
        tarea.descripcion,
        tarea.fecha_fin,
        tarea.id
      );
      res.status(200).json(tareaData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
