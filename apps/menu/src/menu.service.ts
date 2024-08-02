import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  private menu = [
    { id: 1, name: 'Burger', price: 10 },
    { id: 2, name: 'Pizza', price: 15 },
    { id: 3, name: 'Pasta', price: 8 },
  ];
  getHello(): string {
    return 'Hello World!';
  }
  // get meeu
  getMenu() {
    return this.menu;
  }

  // get manu by id
  async getMenuById(id: number) {
    const item = await this.menu.find((menu) => menu.id === id);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  }
}
