import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule, RmqModule } from '@app/common';
import { MainController } from './main.controller';

@Module({
  imports: [
    RmqModule.register({
      name:'BILLING'
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/main/.env',
    }),
    AuthModule
  ],
  controllers: [MainController],
  providers: [],
})
export class MainModule {}
