export class AlreadyExistsError extends Error {
  constructor() {
    super("Recurso já existe");
  }
}
