import { AppModule } from '@/infra/app.module.js'
import { DatabaseModule } from '@/infra/database/database.module.js'
import { PrismaService } from '@/infra/database/prisma/prisma.service.js'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'

import request from 'supertest'
import { ResultFactory } from 'test/factories/make-result.js'

describe('[DELETE/E2E] delete-result', () => {
  let app: INestApplication
  let prisma: PrismaService
  let resultFactory: ResultFactory

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [ResultFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)
    resultFactory = moduleRef.get(ResultFactory)

    await app.init()
  })

  test('[DELETE] /results', async () => {
    const result = await resultFactory.makePrismaResult()

    const response = await request(app.getHttpServer())
      .delete(`/results/${result.id.toString()}`)
      .send({})

    expect(response.statusCode).toBe(204)

    const resultOnDatabase = await prisma.result.findMany()
    expect(resultOnDatabase).toHaveLength(0)
  })
})
