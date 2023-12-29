//
// EXPORTING DOMAIN CLASSES AND ENTITIES SO THAT IT CAN BE USED AS A PACKAGE
//

export * from "./domain/classes/application/repositories/result-repository.js";

export * from "./domain/classes/application/use-cases/create-result.service.js";
export * from "./domain/classes/application/use-cases/delete-result.service.js";
export * from "./domain/classes/application/use-cases/list-results.service.js";

export * from "./domain/classes/enterprise/entities/result.js";
export * from "./domain/classes/enterprise/entities/value-object/bimester.js";
export * from "./domain/classes/enterprise/entities/value-object/class-type.js";

export * from "./core/entities/entity.js";
export * from "./core/entities/value-object/unique-id.js";

export * from "./core/types/helpers.js";

export * from "./core/errors/default/resource-not-found.js";
export * from "./domain/classes/application/use-cases/errors/already-exists.js";
export * from "./domain/classes/application/use-cases/errors/invalid-request.js";
