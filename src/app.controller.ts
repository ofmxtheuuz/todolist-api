import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {ToDoRepository} from "./repository/ToDo.service";

export interface CreateInterface {
  title: string
  description: string
}

@Controller()
export class AppController {
  constructor(private readonly repo: ToDoRepository) { }

  @Get('find')
  async All() {
    return {
      status: 200,
      content: await this.repo.getAll()
    }
  }
  
  @Get('find/:id')
  async One(@Query('id') id: number) {
    return {
      status: 200,
      content: await this.repo.getById(id)
    }
  }
  
  @Post('create')
  async Create(@Body() createInterface: CreateInterface) {
    return {
      status: 200,
      content: await this.repo.create(createInterface)
    }
  }
}
