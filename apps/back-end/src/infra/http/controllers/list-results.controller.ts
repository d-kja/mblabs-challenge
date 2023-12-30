import { BadRequestException, Controller, Get, HttpCode } from "@nestjs/common";
import { ListResultsUseCase } from "../../../domain/classes/application/use-cases/list-results.service";
import { ResultPresenter } from "../presenters/result-presenter";

@Controller("/results")
export class ListResultController {
  constructor(private listResultsUseCase: ListResultsUseCase) {}

  @Get()
  @HttpCode(200)
  async handle() {
    const result = await this.listResultsUseCase.handle();

    if (result.isLeft()) {
      throw new BadRequestException();
    }

    const results = result.value.results;

    return {
      results: results.map(ResultPresenter.toHTTP),
    };
  }
}
