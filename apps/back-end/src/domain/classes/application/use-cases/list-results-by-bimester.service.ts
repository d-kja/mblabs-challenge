import { Injectable } from '@nestjs/common'
import { Either, Right } from '../../../../core/errors/either.js'
import { Result } from '../../enterprise/entities/result.js'
import { BimesterType } from '../../enterprise/entities/value-object/bimester.js'
import { ResultsRepository } from '../repositories/result-repository.js'

export type ListResultsByBimesterRequest = {
  bimester: BimesterType
}
export type ListResultsByBimesterResponse = Either<
  null,
  {
    results: Result[]
  }
>

@Injectable()
export class ListResultsByBimesterUseCase {
  constructor(private resultRepository: ResultsRepository) {}

  async handle({
    bimester,
  }: ListResultsByBimesterRequest): Promise<ListResultsByBimesterResponse> {
    const results = await this.resultRepository.findManyByBimester(bimester)

    return Right.create({
      results,
    })
  }
}
