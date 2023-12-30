import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "src/infra/app.module";
import { DatabaseModule } from "src/infra/database/database.module";
import { PrismaService } from "src/infra/database/prisma/prisma.service";

import request from "supertest";
import { ResultFactory } from "test/factories/make-result";

describe("[DELETE/E2E] delete-result", () => {
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

  test("[DELETE] /results", async () => {
    const result = await resultFactory.makePrismaResult();

    const response = await request(app.getHttpServer())
      .delete(`/results/${result.id.toString()}`)
      .send({});

    expect(response.statusCode).toBe(204);

    const resultOnDatabase = await prisma.result.findMany();
    expect(resultOnDatabase).toHaveLength(0);
  });
});
