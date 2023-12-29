import { PrismaResultMapper } from '@/infra/database/prisma/mappers/prisma-result-mapper.js'
import { PrismaService } from '@/infra/database/prisma/prisma.service.js'
import { Bimester, Classes, Result, ResultProps } from '@mb-labs/domain'
import { Injectable } from '@nestjs/common'

export function makeResult(override: Partial<ResultProps> = {}, id?: string) {
  const result = Result.create(
    {
      bimester: Bimester.create('primeiro'),
      classType: Classes.create('artes'),
      grade: 0,
      ...override,
    },
    id,
  )

  return result
}

@Injectable()
export class ResultFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaResult(data: Partial<ResultProps> = {}): Promise<Result> {
    const result = makeResult(data)

    await this.prisma.result.create({
      data: PrismaResultMapper.toPrismaCreate(result),
    })

    return result
  }
}
