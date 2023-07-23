import express from "express";

import {
  createTareaController,
  deleteTareaByIdTareaController,
  getTareaByIdTareaController,
  updateTareaController,
  updateTareaStatusController,
} from "./dependencies";

const tareaRouter = express.Router();

tareaRouter.post(
  "/tarea/create",
  createTareaController.run.bind(createTareaController)
);

tareaRouter.post(
  "/tarea/get",
  getTareaByIdTareaController.run.bind(getTareaByIdTareaController)
);

tareaRouter.post(
  "/tarea/delete",
  deleteTareaByIdTareaController.run.bind(deleteTareaByIdTareaController)
);

tareaRouter.post(
  "/tarea/update",
  updateTareaController.run.bind(updateTareaController)
);

tareaRouter.post(
  "/tarea/update/status",
  updateTareaStatusController.run.bind(updateTareaStatusController)
);

export { tareaRouter };
