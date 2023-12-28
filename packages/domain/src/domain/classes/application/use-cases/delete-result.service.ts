import { ResourceNotFoundError } from "@/core/errors/default/resource-not-found.js";
import { Either, Left, Right } from "@/core/errors/either.js";
import { UnknownObject } from "@/core/types/helpers.js";
import { ResultsRepository } from "../repositories/result-repository.js";

export type DeleteResultRequest = {
  id: string;
};
export type DeleteResultResponse = Either<ResourceNotFoundError, UnknownObject>;

export class DeleteResultUseCase {
  constructor(private resultRepository: ResultsRepository) {}

  async handle({ id }: DeleteResultRequest): Promise<DeleteResultResponse> {
    const result = await this.resultRepository.getById(id);

    if (!result) {
      return Left.create(new ResourceNotFoundError());
    }

    await this.resultRepository.delete(result);

    return Right.create({});
  }
}
