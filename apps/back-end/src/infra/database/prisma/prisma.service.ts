import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaService {
  constructor(private prisma: Prisma) {}
}
