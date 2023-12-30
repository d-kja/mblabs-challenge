import { ResultsRepository } from "../../src/domain/classes/application/repositories/result-repository.js";
import { Result } from "../../src/domain/classes/enterprise/entities/result.js";
import { BimesterType } from "../../src/domain/classes/enterprise/entities/value-object/bimester.js";
import { ClassesType } from "../../src/domain/classes/enterprise/entities/value-object/class-type.js";

export class InMemoryResultsRepository implements ResultsRepository {
  public items: Result[] = [];

  async create(value: Result): Promise<void> {
    this.items.push(value);
  }

  async delete(value: Result): Promise<void> {
    const itemIndex = this.items.findIndex(
      (item) => item.id.toString() === value.id.toString(),
    );

    this.items.splice(itemIndex, 1);
  }

  async getById(value: string): Promise<Result | null> {
    const item = this.items.find((item) => item.id.toString() === value);

    if (!item) return null;

    return item;
  }

  async getByBimesterAndClassType(params: {
    classType: ClassesType;
    bimester: BimesterType;
  }): Promise<Result | null> {
    const item = this.items.find(
      (item) =>
        item.classType.value === params.classType &&
        item.bimester.value === params.bimester,
    );

    if (!item) return null;

    return item;
  }

  async findMany(): Promise<Result[]> {
    return this.items;
  }

  async findManyByBimester(value: BimesterType): Promise<Result[]> {
    return this.items.filter((item) => item.bimester.value === value);
  }
}
