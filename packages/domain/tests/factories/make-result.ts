import {
  Result,
  ResultProps,
} from "@/domain/classes/enterprise/entities/result.js";
import { Bimester } from "@/domain/classes/enterprise/entities/value-object/bimester.js";
import { Classes } from "@/domain/classes/enterprise/entities/value-object/class-type.js";

export function makeResult(override?: Partial<ResultProps>, id?: string) {
  return Result.create(
    {
      grade: 0,
      bimester: Bimester.create("segundo"),
      classType: Classes.create("artes"),
      ...override,
    },
    id,
  );
}
