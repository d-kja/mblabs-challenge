import { ResourceNotFoundError } from "src/core/errors/default/resource-not-found.js";
import { makeResult } from "test/factories/make-result.js";
import { InMemoryResultsRepository } from "test/in-memory-repositories/in-memory-results-repository.js";
import { DeleteResultUseCase } from "./delete-result.service.js";

let resultRepository: InMemoryResultsRepository;
let sut: DeleteResultUseCase;

describe("@use-case/delete-result", async () => {
  beforeEach(() => {
    resultRepository = new InMemoryResultsRepository();
    sut = new DeleteResultUseCase(resultRepository);
  });

  it("should be able to delete an existing result", async () => {
    const createdResult = makeResult();

    await resultRepository.create(createdResult);

    const result = await sut.handle({
      id: createdResult.id.toString(),
    });

    expect(result.isRight()).toBe(true);
    expect(resultRepository.items).toHaveLength(0);
  });

  it("shouldn't be able to delete a result that doesn't exist", async () => {
    const result = await sut.handle({
      id: "invalid-id",
    });

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(ResourceNotFoundError);
  });
});
