import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';
import { AppService } from './app.service';
import { DogsService } from './dogs/dogs.service';
import { CatsService } from './cats/cats.service';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DogsController],
  providers: [AppService, CatsService, DogsService],
})
export class AppModule {}
