import { Module } from "@nestjs/common";
import { ResultsRepository } from "../../domain/classes/application/repositories/result-repository.js";
import { PrismaService } from "./prisma/prisma.service.js";
import { PrismaResultsRepository } from "./prisma/repositories/prisma-result-repository.js";

@Module({
  providers: [
    PrismaService,
    {
      useClass: PrismaResultsRepository,
      provide: ResultsRepository,
    },
  ],

  exports: [PrismaService, ResultsRepository],
})
export class DatabaseModule {}
