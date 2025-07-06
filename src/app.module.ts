import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogController } from './dog/dog.controller';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './DatabaseModule';

@Module({
  imports: [CatsModule,DatabaseModule],
  controllers: [AppController, DogController, CatsController],
  providers: [AppService],
})
export class AppModule {}
