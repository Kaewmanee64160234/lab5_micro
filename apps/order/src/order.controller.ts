import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() orderItems: { menuItemId: number; quantity: number }[]) {
    return this.orderService.createOrder(orderItems);
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.orderService.getOrder(+id);
  }

  // helolo
  @Get('hello')
  getHello(): string {
    return this.orderService.getHello();
  }

  // getOrders
  @Get()
  getOrders() {
    return this.orderService.getOrders();
  }
}
