import { Result as PrismaResult } from "@prisma/client";
import { Result } from "../../../../domain/classes/enterprise/entities/result.js";
import { Bimester } from "../../../../domain/classes/enterprise/entities/value-object/bimester.js";
import { Classes } from "../../../../domain/classes/enterprise/entities/value-object/class-type.js";

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
