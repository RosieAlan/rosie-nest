import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInfoDto } from './dto/user-info.dto';

import { ApiOperation, ApiResponse } from '@nestjs/swagger';
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: '注册用户' })
  @ApiResponse({ status: 201, type: UserInfoDto })
  @Post('register')
  register(@Body() createUser: CreateUserDto) {
    return this.userService.register(createUser);
  }
}
