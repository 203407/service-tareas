import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { CreateTareaUsecase } from "../../application/CreateTareaUsecase";
import { Tarea } from "../../domain/tarea";

export class CreateTareaController {
  constructor(readonly createTareaUseCase: CreateTareaUsecase) {}

  async run(req: Request, res: Response) {
    const tarea = req.body;
    const uniqueId = String(uuidv4());

    try {
      const tareaData = await this.createTareaUseCase.run(
        new Tarea(
          uniqueId,
          tarea.titulo,
          tarea.descripcion,
          tarea.fecha_inicio,
          tarea.fecha_fin,
          tarea.user_id,
          tarea.status
        )
      );
      res.status(200).json(tareaData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
