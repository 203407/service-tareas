import { TareaRepository } from "../domain/TareaRepository";

export class DeleteTareasByIdUsecase {
  constructor(readonly tareaRepository: TareaRepository) {}

  async run(id: string) {
    const delTareas = await this.tareaRepository.deleteTareasById(id);
    return delTareas;
  }
}
