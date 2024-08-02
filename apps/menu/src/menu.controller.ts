import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  getHello(): string {
    return this.menuService.getHello();
  }

  // getAll menu
  @Get('menu')
  getMenu() {
    return this.menuService.getMenu();
  }

  // get menu by id
  @Get('menu/:id')
  async getMenuById(id: number) {
    return this.menuService.getMenuById(id);
  }
}
