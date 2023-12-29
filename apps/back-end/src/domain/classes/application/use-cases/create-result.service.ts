import { Injectable } from "@nestjs/common";
import { Either, Left, Right } from "../../../../core/errors/either.js";
import { Result } from "../../enterprise/entities/result.js";
import {
  Bimester,
  BimesterType,
} from "../../enterprise/entities/value-object/bimester.js";
import {
  Classes,
  ClassesType,
} from "../../enterprise/entities/value-object/class-type.js";
import { ResultsRepository } from "../repositories/result-repository.js";
import { AlreadyExistsError } from "./errors/already-exists.js";
import { InvalidRequestError } from "./errors/invalid-request.js";

export type CreateResultRequest = {
  grade: number;
  bimester: BimesterType;
  classType: ClassesType;
};
export type CreateResultResponse = Either<
  AlreadyExistsError | InvalidRequestError,
  {
    result: Result;
  }
>;

@Injectable()
export class CreateResultUseCase {
  constructor(private resultRepository: ResultsRepository) {}

  async handle({
    grade,
    bimester,
    classType,
  }: CreateResultRequest): Promise<CreateResultResponse> {
    const meetsGradeConditions = grade >= 0 && grade <= 10;

    if (!meetsGradeConditions) {
      return Left.create(new InvalidRequestError());
    }

    const wasCreatedBefore =
      await this.resultRepository.getByBimesterAndClassType({
        bimester,
        classType,
      });

    if (wasCreatedBefore) {
      return Left.create(new AlreadyExistsError());
    }

    const result = Result.create({
      grade,
      bimester: Bimester.create(bimester),
      classType: Classes.create(classType),
    });

    await this.resultRepository.create(result);

    return Right.create({ result });
  }
}
