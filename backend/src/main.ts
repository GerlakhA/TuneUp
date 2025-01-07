import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173/',
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  app.useBodyParser('json', { limit: '50mb' });

  app.use(cookieParser());
  await app.listen(5222);
}
bootstrap();
