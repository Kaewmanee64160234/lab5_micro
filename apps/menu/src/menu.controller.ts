import { Controller, Get, Param } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('hello')
  getHello(): string {
    return this.menuService.getHello();
  }

  // getAll menu
  @Get()
  getMenu() {
    return this.menuService.getMenu();
  }

  // get menu by id
  @Get('/:id')
  async getMenuById(@Param('id') id: string) {
    return this.menuService.getMenuById(+id);
  }
}
