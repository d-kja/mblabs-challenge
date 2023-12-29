import { Bimester, Classes, Result } from "@mb-labs/domain";
import { Result as PrismaResult } from "@prisma/client";

export class PrismaResultMapper {
  static toPrismaCreate(data: Result) {
    return {
      id: data.id.toString(),
      bimester: data.bimester.value,
      classType: data.classType.value,
      grade: data.grade,
    };
  }

  static toDomain(raw: PrismaResult): Result {
    return Result.create(
      {
        bimester: Bimester.create(raw.bimester),
        classType: Classes.create(raw.classType),
        grade: raw.grade,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      raw.id,
    );
  }
}
