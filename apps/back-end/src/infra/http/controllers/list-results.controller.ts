import { ListResultsUseCase } from "@mb-labs/domain";
import { BadRequestException, Controller, Get, HttpCode } from "@nestjs/common";
import { ResultPresenter } from "../presenters/result-presenter.js";

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
