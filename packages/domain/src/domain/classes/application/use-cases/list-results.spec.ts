import { UniqueId } from "@/core/entities/value-object/unique-id.js";
import { makeResult } from "tests/factories/make-result.js";
import { InMemoryResultsRepository } from "../../../../../tests/in-memory-repositories/in-memory-results-repository.js";
import { ListResultsUseCase } from "./list-results.service.js";

let resultRepository: InMemoryResultsRepository;
let sut: ListResultsUseCase;

describe("@use-case/list-result", async () => {
  beforeEach(() => {
    resultRepository = new InMemoryResultsRepository();
    sut = new ListResultsUseCase(resultRepository);
  });

  it("should be able to list available results", async () => {
    resultRepository.items.push(
      makeResult({}, "result-1"),
      makeResult({}, "result-2"),
    );

    const result = await sut.handle();

    expect(result.isRight()).toBe(true);
    expect(result.value?.results).toHaveLength(2);
    expect(result.value?.results).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: UniqueId.create("result-1") }),
        expect.objectContaining({ id: UniqueId.create("result-2") }),
      ]),
    );
  });
});
