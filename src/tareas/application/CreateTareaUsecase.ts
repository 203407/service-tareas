import { Tarea } from "../domain/tarea";
import { TareaRepository } from "../domain/TareaRepository";

export class CreateTareaUsecase {
  constructor(readonly tareaRepository: TareaRepository) {}

  async run(tarea: Tarea) {
    const createTarea = await this.tareaRepository.createTarea(tarea);
    return createTarea;
  }
}
