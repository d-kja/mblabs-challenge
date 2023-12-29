import { Module } from "@nestjs/common";
import { CreateResultUseCase } from "../../domain/classes/application/use-cases/create-result.service.js";
import { DeleteResultUseCase } from "../../domain/classes/application/use-cases/delete-result.service.js";
import { ListResultsUseCase } from "../../domain/classes/application/use-cases/list-results.service.js";
import { DatabaseModule } from "../database/database.module.js";
import { CreateResultController } from "./controllers/create-result.controller.js";
import { DeleteResultController } from "./controllers/delete-result.controller.js";
import { ListResultController } from "./controllers/list-results.controller.js";

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateResultController,
    DeleteResultController,
    ListResultController,
  ],
  providers: [CreateResultUseCase, ListResultsUseCase, DeleteResultUseCase],
})
export class HttpModule {}
