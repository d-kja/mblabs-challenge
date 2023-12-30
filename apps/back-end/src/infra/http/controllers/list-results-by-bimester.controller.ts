import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  Param,
} from "@nestjs/common";
import { ListResultsByBimesterUseCase } from "src/domain/classes/application/use-cases/list-results-by-bimester.service.js";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe.js";
import { ResultPresenter } from "../presenters/result-presenter.js";

const bimesterParamSchema = z.enum([
  "primeiro",
  "segundo",
  "terceiro",
  "quarto",
]);
type BimesterParamSchema = z.infer<typeof bimesterParamSchema>;
const queryValidationPipe = new ZodValidationPipe(bimesterParamSchema);

@Controller("/results/bimester/:bimester")
export class ListResultByBimesterController {
  constructor(
    private listResultsByBimesterUseCase: ListResultsByBimesterUseCase,
  ) {}

  @Get()
  @HttpCode(200)
  async handle(
    @Param("bimester", queryValidationPipe) bimester: BimesterParamSchema,
  ) {
    const result = await this.listResultsByBimesterUseCase.handle({
      bimester: bimester,
    });

    if (result.isLeft()) {
      throw new BadRequestException();
    }

    const results = result.value.results;

    return {
      results: results.map(ResultPresenter.toHTTP),
    };
  }
}
