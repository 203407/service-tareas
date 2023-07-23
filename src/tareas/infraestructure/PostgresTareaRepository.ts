import { pool } from "../../database";
import { Tarea } from "../domain/tarea";
import { TareaRepository } from "../domain/TareaRepository";

export class PostgresTareaRepository implements TareaRepository {
  async createTarea(tarea: Tarea): Promise<Tarea | null> {
    const sql =
      "INSERT INTO tareas (id,titulo,descripcion,fecha_inicio,fecha_fin,user_id,status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
      tarea.id,
      tarea.titulo,
      tarea.descripcion,
      tarea.fecha_inicio,
      tarea.fecha_fin,
      tarea.user_id,
      tarea.status,
    ];
    try {
      const result = await pool.query(sql, values);

      if (result.rows.length > 0) {
        const createdTareaData = result.rows[0];
        const createdTarea: Tarea = {
          id: createdTareaData.id,
          titulo: createdTareaData.titulo,
          descripcion: createdTareaData.descripcion,
          fecha_inicio: createdTareaData.fecha_inicio,
          fecha_fin: createdTareaData.fecha_fin,
          user_id: createdTareaData.user_id,
          status: createdTareaData.status,
        };

        return createdTarea;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async getTareasById(id: string): Promise<Tarea[] | null> {
    const sql = "SELECT * FROM tareas WHERE user_id = $1";
    const values = [id];

    try {
      const result = await pool.query(sql, values);

      if (result.rows.length > 0) {
        const tareas: Tarea[] = result.rows.map((tarea: any) => ({
          id: tarea.id,
          titulo: tarea.titulo,
          descripcion: tarea.descripcion,
          fecha_inicio: tarea.fecha_inicio,
          fecha_fin: tarea.fecha_fin,
          user_id: tarea.user_id,
          status: tarea.status,
        }));
        return tareas;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async deleteTareasById(id: string): Promise<boolean | null> {
    const sql = "DELETE FROM tareas WHERE user_id = $1";
    const values = [id];

    try {
      const result = await pool.query(sql, values);
      console.log(result);
      return true;
    } catch (error) {
      return false;
      throw error;
    }
  }

  async updateTareasById(
    titulo: string,
    descripcion: string,
    fecha_fin: string,
    id: string
  ): Promise<boolean | null> {
    const sql =
      "UPDATE tareas SET titulo=$1, descripcion=$2,fecha_fin=$3 WHERE user_id= $4";
    const values = [titulo, descripcion, fecha_fin, id];

    try {
      const result = await pool.query(sql, values);
      console.log(result.rows);
      return true;
    } catch (error) {
      return false;
      throw error;
    }
  }

  async updateStatusTareasById(
    id: string,
    status: string
  ): Promise<boolean | null> {
    const sql = "UPDATE tareas SET status=$1, WHERE id = $2";
    const values = [status, id];

    try {
      const result = await pool.query(sql, values);
      console.log(result.rows);
      return true;
    } catch (error) {
      return false;
      throw error;
    }
  }
}
