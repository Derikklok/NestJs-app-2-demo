import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {config} from 'dotenv'

async function bootstrap() {
  config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('query parser', 'extended');

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is active on: ${await app.getUrl()}`);
}
bootstrap();
