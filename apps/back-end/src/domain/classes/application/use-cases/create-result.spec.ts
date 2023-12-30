import { makeResult } from "../../../../../test/factories/make-result";
import { InMemoryResultsRepository } from "../../../../../test/in-memory-repositories/in-memory-results-repository";
import { Bimester } from "../../enterprise/entities/value-object/bimester";
import { Classes } from "../../enterprise/entities/value-object/class-type";
import { CreateResultUseCase } from "./create-result.service";
import { AlreadyExistsError } from "./errors/already-exists";
import { InvalidRequestError } from "./errors/invalid-request";

let resultRepository: InMemoryResultsRepository;
let sut: CreateResultUseCase;

describe("@use-case/create-result", async () => {
  beforeEach(() => {
    resultRepository = new InMemoryResultsRepository();
    sut = new CreateResultUseCase(resultRepository);
  });

  it("should be able to create a new result", async () => {
    const result = await sut.handle({
      grade: 0,
      bimester: "quarto",
      classType: "artes",
    });

    expect(result.isRight()).toBe(true);
    expect(result.value).toEqual({
      result: expect.objectContaining({
        grade: 0,
      }),
    });
  });

  it("it shouldn't be able to create a result with a invalid grade", async () => {
    const result = await sut.handle({
      grade: 11,
      bimester: "quarto",
      classType: "artes",
    });

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(InvalidRequestError);
  });

  it("it shouldn't be able to create a result that already exists in that bimester", async () => {
    const existingResult = makeResult({
      bimester: Bimester.create("quarto"),
      classType: Classes.create("geografia"),
    });

    await resultRepository.create(existingResult);

    const result = await sut.handle({
      grade: 5,
      bimester: "quarto",
      classType: "geografia",
    });

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(AlreadyExistsError);
  });
});
