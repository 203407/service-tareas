export class Tarea {
  constructor(
    readonly id: string,
    readonly titulo: string,
    readonly descripcion: string,
    readonly fecha_inicio: string,
    readonly fecha_fin: string,
    readonly user_id: string,
    readonly status: string
  ) {}
}
