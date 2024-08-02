import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(private httpService: HttpService) {}
  createOrder(orderItems: { meneItemId: number; quantity: number }[]) {
    throw new Error('Method not implemented.');
  }
  private orders = [
    // {
    //   id: 1,
    //   orderItems: [
    //     {
    //       meneItemId: 1,
    //       quantity: 2,
    //     },
    //   ],
    //   total: 20,
    // },
    // {
    //   id: 2,
    //   orderItems: [
    //     {
    //       meneItemId: 2,
    //       quantity: 1,
    //     },
    //   ],
    //   total: 15,
    // },
    // {
    //   id: 3,
    //   orderItems: [
    //     {
    //       meneItemId: 3,
    //       quantity: 3,
    //     },
    //   ],
    //   total: 15,
    // },
    // {
    //   id: 4,
    //   orderItems: [
    //     {
    //       meneItemId: 1,
    //       quantity: 1,
    //     },
    //     {
    //       meneItemId: 3,
    //       quantity: 2,
    //     },
    //   ],
    //   total: 15,
    // },
  ];
  async getOrderById(arg0: number) {
    const menuResponse = await firstValueFrom(
      this.httpService.get('http://localhost:3001/menu'),
    );
    const menuItems = menuResponse.data;

    let total = 0;

    for (const menuItem of menuItems) {
      const orderItem = this.orders.find((order) => order.id === arg0);
      if (!orderItem) {
        throw new Error('Order not found');
      }
      const item = orderItem.orderItems.find(
        (item) => item.meneItemId === menuItem.id,
      );
      if (item) {
        total += item.quantity * menuItem.price;
      }
    }
    const order = {
      id: this.orders.length + 1,
      items: menuItems,
      total: total,
    };

    this.orders.push(order);
  }
  getAllOrder() {
    throw new Error('Method not implemented.');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
