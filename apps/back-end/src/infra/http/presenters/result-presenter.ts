import { Result } from "@mb-labs/domain";

export class ResultPresenter {
  static toHTTP(value: Result) {
    return {
      id: value.id.toString(),
      bimester: value.bimester.value,
      classType: value.classType.value,
      grade: value.grade,
      createdAt: value.createdAt,
      updatedAt: value.updatedAt,
    };
  }
}
