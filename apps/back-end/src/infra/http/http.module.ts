import {
  CreateResultUseCase,
  DeleteResultUseCase,
  ListResultsUseCase,
} from "@mb-labs/domain";
import { Module } from "@nestjs/common";
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
