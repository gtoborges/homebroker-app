import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    console.log('teste');
    await this.$connect();
  }

  // async enableShutdownHooks(app: any) {
  //   this.$on('beforeExit', async () => {
  //     await app.close();
  //   });
  // }
}
