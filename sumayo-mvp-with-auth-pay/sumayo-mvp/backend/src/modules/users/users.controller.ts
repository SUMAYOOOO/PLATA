import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  findAll() { return { message: 'List users (stub)' } }

  @Get(':id')
  findOne(@Param('id') id: string) { return { message: 'Get user ' + id } }

  @Post()
  create(@Body() body: any) { return { message: 'Create user', body } }
}
