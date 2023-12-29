import { Injectable } from "@nestjs/common";
import {
  Result,
  ResultProps,
} from "../../src/domain/classes/enterprise/entities/result.js";
import { Bimester } from "../../src/domain/classes/enterprise/entities/value-object/bimester.js";
import { Classes } from "../../src/domain/classes/enterprise/entities/value-object/class-type.js";
import { PrismaResultMapper } from "../../src/infra/database/prisma/mappers/prisma-result-mapper.js";
import { PrismaService } from "../../src/infra/database/prisma/prisma.service.js";

export function makeResult(override: Partial<ResultProps> = {}, id?: string) {
  const result = Result.create(
    {
      bimester: Bimester.create("primeiro"),
      classType: Classes.create("artes"),
      grade: 0,
      ...override,
    },
    id,
  );

  return result;
}

@Injectable()
export class ResultFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaResult(data: Partial<ResultProps> = {}): Promise<Result> {
    const result = makeResult(data);

    await this.prisma.result.create({
      data: PrismaResultMapper.toPrismaCreate(result),
    });

    return result;
  }
}
