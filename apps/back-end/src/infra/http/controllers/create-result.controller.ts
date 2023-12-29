import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  UsePipes,
} from "@nestjs/common";
import { z } from "zod";
import { CreateResultUseCase } from "../../../domain/classes/application/use-cases/create-result.service.js";
import { AlreadyExistsError } from "../../../domain/classes/application/use-cases/errors/already-exists.js";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe.js";

const createResultSchema = z.object({
  bimester: z.enum(["primeiro", "segundo", "terceiro", "quarto"]),
  classType: z.enum(["biologia", "artes", "geografia", "sociologia"]),
  grade: z.coerce.number().max(10).min(0),
});

type CreateResultBodySchema = z.infer<typeof createResultSchema>;

@Controller("/results")
export class CreateResultController {
  constructor(private createResultUseCase: CreateResultUseCase) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createResultSchema))
  async handle(
    @Body()
    body: CreateResultBodySchema,
  ) {
    const { bimester, classType, grade } = body;

    const result = await this.createResultUseCase.handle({
      bimester,
      classType,
      grade,
    });

    if (result.isLeft()) {
      const error = result.value;

      switch (error.constructor) {
        case AlreadyExistsError:
          throw new ConflictException(error.message);
        default:
          throw new BadRequestException(error.message);
      }
    }
  }
}
