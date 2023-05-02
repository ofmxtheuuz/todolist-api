
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ToDoRepository} from "./repository/ToDo.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ToDoRepository],
})
export class AppModule {}
