import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { Bimester } from "../../../domain/classes/enterprise/entities/value-object/bimester.js";
import { Classes } from "../../../domain/classes/enterprise/entities/value-object/class-type.js";
import { AppModule } from "../../../infra/app.module.js";
import { DatabaseModule } from "../../../infra/database/database.module.js";
import { PrismaService } from "../../../infra/database/prisma/prisma.service.js";

import request from "supertest";
import { ResultFactory } from "../../../../test/factories/make-result.js";

describe("[GET/E2E] list-results", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let resultFactory: ResultFactory;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [ResultFactory],
    }).compile();

    app = moduleRef.createNestApplication();

    prisma = moduleRef.get(PrismaService);
    resultFactory = moduleRef.get(ResultFactory);

    await app.init();
  });

  test("[GET] /results", async () => {
    await Promise.all([
      resultFactory.makePrismaResult({
        bimester: Bimester.create("segundo"),
        classType: Classes.create("artes"),
      }),
      resultFactory.makePrismaResult({
        bimester: Bimester.create("primeiro"),
        classType: Classes.create("artes"),
      }),
    ]);

    const response = await request(app.getHttpServer())
      .get("/results")
      .send({});

    expect(response.statusCode).toBe(200);
    expect(response.body.results).toHaveLength(2);
  });
});
