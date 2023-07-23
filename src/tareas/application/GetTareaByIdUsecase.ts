import { TareaRepository } from "../domain/TareaRepository";

export class GetTareasByIdUsecase {
  constructor(readonly tareaRepository: TareaRepository) {}

  async run(id: string) {
    const getTareas = await this.tareaRepository.getTareasById(id);
    return getTareas;
  }
}
