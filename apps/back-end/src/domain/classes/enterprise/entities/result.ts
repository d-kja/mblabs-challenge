import { Entity } from "../../../../core/entities/entity";
import { Optional } from "../../../../core/types/helpers";
import { Bimester } from "./value-object/bimester";
import { Classes } from "./value-object/class-type";

export interface ResultProps {
  /**
   * I could create two new entities to manage those enums, however as it's a siple project I don't see a need to go overboard
   */
  bimester: Bimester;
  classType: Classes;

  grade: number;

  createdAt: Date;
  updatedAt?: Date | null;
}

export class Result extends Entity<ResultProps> {
  get bimester() {
    return this.props.bimester;
  }
  get classType() {
    return this.props.classType;
  }
  get grade() {
    return this.props.grade;
  }

  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(props: Optional<ResultProps, "createdAt">, id?: string) {
    return new Result(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );
  }
}
