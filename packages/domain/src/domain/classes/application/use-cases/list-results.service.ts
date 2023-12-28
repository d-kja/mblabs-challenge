import { Either, Right } from "@/core/errors/either.js";
import { Result } from "../../enterprise/entities/result.js";
import { ResultsRepository } from "../repositories/result-repository.js";

export type ListResultsResponse = Either<
  null,
  {
    results: Result[];
  }
>;

export class ListResultsUseCase {
  constructor(private resultRepository: ResultsRepository) {}

  async handle(): Promise<ListResultsResponse> {
    const results = await this.resultRepository.findMany();

    return Right.create({
      results,
    });
  }
}
