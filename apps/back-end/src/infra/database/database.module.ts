import { Module } from "@nestjs/common";
import { ResultsRepository } from "../../domain/classes/application/repositories/result-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaResultsRepository } from "./prisma/repositories/prisma-result-repository";

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
