import { Module } from "@nestjs/common";
import { ListResultsByBimesterUseCase } from "src/domain/classes/application/use-cases/list-results-by-bimester.service";
import { CreateResultUseCase } from "../../domain/classes/application/use-cases/create-result.service";
import { DeleteResultUseCase } from "../../domain/classes/application/use-cases/delete-result.service";
import { ListResultsUseCase } from "../../domain/classes/application/use-cases/list-results.service";
import { DatabaseModule } from "../database/database.module";
import { CreateResultController } from "./controllers/create-result.controller";
import { DeleteResultController } from "./controllers/delete-result.controller";
import { ListResultByBimesterController } from "./controllers/list-results-by-bimester.controller";
import { ListResultController } from "./controllers/list-results.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateResultController,
    DeleteResultController,
    ListResultController,
    ListResultByBimesterController,
  ],
  providers: [
    CreateResultUseCase,
    ListResultsUseCase,
    DeleteResultUseCase,
    ListResultsByBimesterUseCase,
  ],
})
export class HttpModule {}
