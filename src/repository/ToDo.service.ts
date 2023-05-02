import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {ToDoItem} from "../models/ToDoItem";
import SqliteContext from "../database/SqliteContext";
import {CreateInterface} from "../app.controller";

@Injectable()
export class ToDoRepository {
  
    private readonly ItensRepository: Repository<ToDoItem>
    constructor() {this.ItensRepository = SqliteContext.getRepository(ToDoItem)}

    async getAll(): Promise<ToDoItem[]> {
        return await this.ItensRepository.find()
    }
    
    async getById(id: number): Promise<ToDoItem> {
        return await this.ItensRepository.findOne({where:{id}})
    }
    
    async create({title, description}: CreateInterface): Promise<boolean | ToDoItem> {
        try {
            const item = new ToDoItem()
            item.title = title
            item.description = description
            await this.ItensRepository.save(item)
            return item
        } catch (e) {
            return false
        }
    }
    
    async delete(id: number): Promise<boolean> {
        try {
            await this.ItensRepository.delete({id})
            return true
        } catch (e) {
            return false
        }
    }

}
