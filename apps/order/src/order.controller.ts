import { Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // @Get()
  // getHello(): string {
  //   return this.orderService.getHello();
  // }

  // create order
  @Post()
  createOrder(orderItems: { meneItemId: number; quantity: number }[]) {
    return this.orderService.createOrder(orderItems);
  }

  // get all orders
  @Get()
  getOrders() {
    return this.orderService.getAllOrder();
  }

  // get order by id
  @Get('/:id')
  getOrderById(@Param('id') id: string) {
    return this.orderService.getOrderById(+id);
  }
}
