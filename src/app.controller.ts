import { Controller, Get, Post,Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("公共接口")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('list')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('list')
  create(): string {
    return this.appService.create();
  }
  // 2.通配符路径(?+* 三种通配符 )
  // 可以匹配到 get请求, /app/user_xxx
  @Get('user_*')
  getUser() {
    return 'getUser';
  }
  // 3.带参数路径
  // 可以匹配到put请求，/app/list/xxxx
  @Put('list/:id')
  update() {
    return 'update';
  }
}
