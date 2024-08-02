import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { HttpService } from '@nestjs/axios';

@Module({
  imports: [HttpService],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
