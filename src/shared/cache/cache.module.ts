import { Global, Module } from "@nestjs/common";
import { client } from "./connection";

export const CACHE_PROVIDER = 'CACHE_PROVIDER';

@Global()
@Module({
    providers: [{ provide: CACHE_PROVIDER, useValue: client }],
    exports: [CACHE_PROVIDER]
})

export class CacheModule { }