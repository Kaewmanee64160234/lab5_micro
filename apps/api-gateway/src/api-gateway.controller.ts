import { Controller, Get, HttpServer, Param } from '@nestjs/common';
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
}
