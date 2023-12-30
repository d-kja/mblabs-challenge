import { Injectable } from "@nestjs/common";
import { ResultsRepository } from "src/domain/classes/application/repositories/result-repository.js";
import { Result } from "../../../../domain/classes/enterprise/entities/result.js";
import { BimesterType } from "../../../../domain/classes/enterprise/entities/value-object/bimester.js";
import { ClassesType } from "../../../../domain/classes/enterprise/entities/value-object/class-type.js";
import { PrismaResultMapper } from "../mappers/prisma-result-mapper.js";
import { PrismaService } from "../prisma.service.js";

@Injectable()
export class PrismaResultsRepository implements ResultsRepository {
  constructor(private prisma: PrismaService) {}

  async create(value: Result): Promise<void> {
    const data = PrismaResultMapper.toPrismaCreate(value);

    await this.prisma.result.create({
      data,
    });
  }

  async delete(value: Result): Promise<void> {
    await this.prisma.result.delete({
      where: {
        id: value.id.toString(),
      },
    });
  }

  async getById(value: string): Promise<Result> {
    const data = await this.prisma.result.findUnique({
      where: {
        id: value,
      },
    });

    if (!data) {
      return null;
    }

    return PrismaResultMapper.toDomain(data);
  }

  async getByBimesterAndClassType(params: {
    classType: ClassesType;
    bimester: BimesterType;
  }): Promise<Result> {
    const data = await this.prisma.result.findFirst({
      where: {
        bimester: params.bimester,
        classType: params.classType,
      },
    });

    if (!data) {
      return null;
    }

    return PrismaResultMapper.toDomain(data);
  }

  async findMany(): Promise<Result[]> {
    const results = await this.prisma.result.findMany();

    return results.map((result) => PrismaResultMapper.toDomain(result));
  }

  async findManyByBimester(value: BimesterType): Promise<Result[]> {
    const results = await this.prisma.result.findMany({
      where: {
        bimester: value
      }
    });

    return results.map((result) => PrismaResultMapper.toDomain(result));
  }
}
