import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentConfig = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentConfig);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
