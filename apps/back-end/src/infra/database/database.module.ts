import { ResultsRepository } from "@mb-labs/domain";
import { Module } from "@nestjs/common";
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
