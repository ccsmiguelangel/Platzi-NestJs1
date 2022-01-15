import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // ignora publicar elementos sin los datos que se indicaron en dtos
    forbidNonWhitelisted: true, // alerta por qué los datos no se aceptan
  }));
  await app.listen(3000);
}
bootstrap();
