import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { envSchema } from "./env/env.js";
import { EnvModule } from "./env/env.module.js";
import { HttpModule } from "./http/http.module.js";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
