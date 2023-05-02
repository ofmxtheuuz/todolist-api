import {DataSource} from "typeorm";
import {ToDoItem} from "../models/ToDoItem";


const SqliteContext = new DataSource({
    type: "sqlite",
    database: "./data.db",
    synchronize: true,
    entities: [ToDoItem],
})

export default SqliteContext