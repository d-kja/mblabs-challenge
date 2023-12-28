import { Result } from "../../enterprise/entities/result.js";
import { BimesterType } from "../../enterprise/entities/value-object/bimester.js";
import { ClassesType } from "../../enterprise/entities/value-object/class-type.js";

type GetByBimesterAndClassTypeParams = {
  classType: ClassesType;
  bimester: BimesterType;
};

export abstract class ResultsRepository {
  abstract create(value: Result): Promise<void>;
  abstract deleteById(value: string): Promise<void>;
  abstract getById(value: string): Promise<Result | null>;
  abstract getByBimesterAndClassType(
    params: GetByBimesterAndClassTypeParams,
  ): Promise<Result | null>;
  abstract findMany(): Promise<Result[]>;
}
