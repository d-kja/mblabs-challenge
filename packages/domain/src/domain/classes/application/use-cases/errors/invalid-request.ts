export class InvalidRequestError extends Error {
  constructor() {
    super("Requisição invalida, verifique os dados inseridos novamente.");
  }
}
