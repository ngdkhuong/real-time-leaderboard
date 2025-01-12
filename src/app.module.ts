import {Module, MiddlewareConsumer, RequestMethod} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {TypeOrmModule} from "@nestjs/typeorm";

import {ConfigModule} from "@nestjs/config";
import {AppDataSource} from "./data-source";
import {LoggerMiddleware} from "./common/middlewares/logger.middleware";
import { UserModule } from "./user/user.module";
import { RedisService } from "./redis/redis.service";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TypeOrmModule.forRoot(AppDataSource.options),
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService, RedisService],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(LoggerMiddleware)
			.forRoutes({path: "*", method: RequestMethod.ALL});
	}
}
