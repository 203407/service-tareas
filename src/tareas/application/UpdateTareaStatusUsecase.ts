import { TareaRepository } from "../domain/TareaRepository";

export class UpdateTareaStatusUsecase {
  constructor(readonly tareaRepository: TareaRepository) {}

  async run(id: string, status: string) {
    const updateTarea = await this.tareaRepository.updateStatusTareasById(
      id,
      status
    );
    return updateTarea;
  }
}
