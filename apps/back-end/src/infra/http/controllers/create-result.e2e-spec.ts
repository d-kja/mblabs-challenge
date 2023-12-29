import { AppModule } from '@/infra/app.module.js'
import { DatabaseModule } from '@/infra/database/database.module.js'
import { PrismaService } from '@/infra/database/prisma/prisma.service.js'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'

import request from 'supertest'

describe('[POST/E2E] create-result', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    await app.init()
  })

  test('[POST] /results', async () => {
    const response = await request(app.getHttpServer())
      .post('/results')
      .send({})

    expect(response.statusCode).toBe(201)

    const resultOnDatabase = await prisma.result.findFirst()
    expect(resultOnDatabase).toBeTruthy()
  })
})
