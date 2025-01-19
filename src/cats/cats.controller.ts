import { Controller, Get, Post } from '@nestjs/common';
@Controller('cats')
export class CatsController {
  constructor() {}

  @Get()
  findAll(): string {
    return 'Thid returns all cats';
  }

  @Get('breed')
  findBreed(): string {
    return 'Thid returns breed';
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
