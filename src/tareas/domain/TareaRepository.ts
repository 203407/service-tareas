import { Tarea } from "./tarea";

export interface TareaRepository {
  createTarea(tarea: Tarea): Promise<Tarea | null>;
  getTareasById(id: string): Promise<Tarea[] | null>;
  deleteTareasById(id: string): Promise<boolean | null>;
  updateTareasById(
    titulo: string,
    descripcion: string,
    fecha_fin: string,
    id: string
  ): Promise<boolean | null>;
  updateStatusTareasById(id: string, status: string): Promise<boolean | null>;
}
