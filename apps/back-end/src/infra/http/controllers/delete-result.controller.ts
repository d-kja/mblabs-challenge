import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  NotFoundException,
  Param,
} from "@nestjs/common";
import { ResourceNotFoundError } from "../../../core/errors/default/resource-not-found";
import { DeleteResultUseCase } from "../../../domain/classes/application/use-cases/delete-result.service";

@Controller("/results/:id")
export class DeleteResultController {
  constructor(private deleteResultUseCase: DeleteResultUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param("id") answerCommentId: string) {
    const result = await this.deleteResultUseCase.handle({
      id: answerCommentId,
    });

    if (result.isLeft()) {
      const error = result.value;

      switch (error.constructor) {
        case ResourceNotFoundError:
          throw new NotFoundException(error.message);
        default:
          throw new BadRequestException(error.message);
      }
    }
  }
}
