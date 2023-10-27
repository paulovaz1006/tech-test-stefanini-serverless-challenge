import "reflect-metadata"
import { DataSource } from "typeorm"

import { Employee } from "./entity/Employee"
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/data.db",
    synchronize: true,
    logging: false,
    entities: [Employee],
    migrations: [`${__dirname}/src/migration/*.ts`],
    subscribers: [],
})


AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))