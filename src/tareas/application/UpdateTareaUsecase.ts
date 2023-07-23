import { TareaRepository } from "../domain/TareaRepository";

export class UpdateTareaUsecase {
  constructor(readonly tareaRepository: TareaRepository) {}

  async run(
    titulo: string,
    descripcion: string,
    fecha_fin: string,
    id: string
  ) {
    const updateTarea = await this.tareaRepository.updateTareasById(
      titulo,
      descripcion,
      fecha_fin,
      id
    );
    return updateTarea;
  }
}
