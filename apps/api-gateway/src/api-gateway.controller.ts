import { Body, Controller, Get, HttpServer, Param, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller()
export class ApiGatewayController {
  constructor(private httpService: HttpService) {}

  @Get('menu')
  async getMenu() {
    const res = await firstValueFrom(
      this.httpService.get('http://localhost:3001/menu'),
    );

    return res.data;
  }

  // get menu by id
  @Get('menu/:id')
  async getMenuById(@Param('id') id: string) {
    const res = await firstValueFrom(
      this.httpService.get(`http://localhost:3001/menu/${id}`),
    );
    return res.data;
  }

  // Post order\
  @Post('order')
  async createOrder(
    @Body() orderItems: { meneItemId: number; quantity: number }[],
  ) {
    const res = await firstValueFrom(
      this.httpService.post('http://localhost:3002/order', orderItems),
    );
    return res.data;
  }

  // get all orders
  @Get('order')
  async getOrders() {
    const res = await firstValueFrom(
      this.httpService.get('http://localhost:3002/order'),
    );
    return res.data;
  }

  // get order by id
  @Get('order/:id')
  async getOrderById(@Param('id') id: string) {
    const res = await firstValueFrom(
      this.httpService.get(`http://localhost:3002/order/${id}`),
    );
    return res.data;
  }
}
