import { CreateTareaUsecase } from "../application/CreateTareaUsecase";
import { DeleteTareasByIdUsecase } from "../application/DeleteTareaByIdUsecase";
import { GetTareasByIdUsecase } from "../application/GetTareaByIdUsecase";
import { UpdateTareaStatusUsecase } from "../application/UpdateTareaStatusUsecase";
import { UpdateTareaUsecase } from "../application/UpdateTareaUsecase";
import { CreateTareaController } from "./controllers/CreateTareaController";
import { DeleteTareaByIdTareaController } from "./controllers/DeleteTareaByIdController";
import { GetTareaByIdTareaController } from "./controllers/GetTareaByIdController";
import { UpdateTareaController } from "./controllers/UpdateTareaController";
import { UpdateTareaStatusController } from "./controllers/UpdateTareaStatusController";
import { PostgresTareaRepository } from "./PostgresTareaRepository";

const postgresTareaRepository = new PostgresTareaRepository();

export const createTareaUseCase = new CreateTareaUsecase(
  postgresTareaRepository
);
export const createTareaController = new CreateTareaController(
  createTareaUseCase
);

export const getTareasByIdUsecaseTareaUseCase = new GetTareasByIdUsecase(
  postgresTareaRepository
);
export const getTareaByIdTareaController = new GetTareaByIdTareaController(
  getTareasByIdUsecaseTareaUseCase
);

export const deleteTareasByIdUsecaseTareaUseCase = new DeleteTareasByIdUsecase(
  postgresTareaRepository
);
export const deleteTareaByIdTareaController =
  new DeleteTareaByIdTareaController(deleteTareasByIdUsecaseTareaUseCase);

export const updateTareaUsecase = new UpdateTareaUsecase(
  postgresTareaRepository
);
export const updateTareaController = new UpdateTareaController(
  updateTareaUsecase
);

export const updateTareaStatusUsecase = new UpdateTareaStatusUsecase(
  postgresTareaRepository
);
export const updateTareaStatusController = new UpdateTareaStatusController(
  updateTareaStatusUsecase
);
