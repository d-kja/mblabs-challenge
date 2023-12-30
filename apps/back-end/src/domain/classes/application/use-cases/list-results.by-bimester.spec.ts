import { makeResult } from "../../../../../test/factories/make-result";
import { InMemoryResultsRepository } from "../../../../../test/in-memory-repositories/in-memory-results-repository";
import { UniqueId } from "../../../../core/entities/value-object/unique-id";
import { Bimester } from "../../enterprise/entities/value-object/bimester";
import { ListResultsByBimesterUseCase } from "./list-results-by-bimester.service";

let resultRepository: InMemoryResultsRepository;
let sut: ListResultsByBimesterUseCase;

describe("@use-case/list-result-by-bimester", async () => {
  beforeEach(() => {
    resultRepository = new InMemoryResultsRepository();
    sut = new ListResultsByBimesterUseCase(resultRepository);
  });

  it("should be able to list available results", async () => {
    resultRepository.items.push(
      makeResult({ bimester: Bimester.create("primeiro") }, "result-1"),
      makeResult({ bimester: Bimester.create("primeiro") }, "result-2"),
    );

    const result = await sut.handle({ bimester: "primeiro" });

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
