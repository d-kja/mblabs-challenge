import { UniqueId } from "./value-object/unique-id.js";

export class Entity<Props> {
  private _id: UniqueId;
  protected props: Props;

  constructor(props: Props, id?: string) {
    this.props = props;
    this._id = UniqueId.create(id);
  }

  get id() {
    return this._id;
  }
}
