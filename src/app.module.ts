import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { ArticlesModule } from './articles/articles.module';
import { ProductsModule } from './products/products.module';
import {
  LoggerMiddleware,
  logger,
} from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [CatsModule, DogsModule, ArticlesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, logger)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
      )
      .forRoutes(CatsController, DogsController);
  }
}
