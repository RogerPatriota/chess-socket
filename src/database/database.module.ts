import { Global, Module } from "@nestjs/common";
import { db } from "./connection";

export const DB_PROVIDER = 'DB_PROVIDER'

@Global()
@Module({
    providers: [
        { provide: DB_PROVIDER, useValue: db }
    ],
    exports: [DB_PROVIDER]
})

export class DatabaseModule { }