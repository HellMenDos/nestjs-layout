import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { BillingService } from './billing.service';

@Controller()
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
  ) {}

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @MessagePattern({cmd: 'payment'})
  async getGreetingMessageAysnc(name: string): Promise<string> {
    return `Hello ${name} Async`;
  }

}
